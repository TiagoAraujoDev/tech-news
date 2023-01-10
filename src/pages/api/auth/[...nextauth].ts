import { NextAuthOptions, User as UserType } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

import {
  closeMongodbConnection,
  createMongodbConnection,
} from "../../../lib/mongodb/mongodb";
import { User } from "../../../lib/mongodb/models/user";

interface SignIn {
  user: UserType | AdapterUser;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: {
        params: {
          scope: "read:user",
        },
      },
    }),
  ],
  secret: "x6PQvGcMMrpiSbIP/WxqkJ6HOckl4PpndIAINzAL0a0=",
  jwt: {},
  callbacks: {
    async signIn({ user }: SignIn): Promise<boolean> {
      try {
        await createMongodbConnection().catch((err) => console.log(err));

        const userAlreadyExist = await User.findOne({ id: user.id }).exec();
        if (userAlreadyExist) {
          return true;
        }

        const newUser = new User(user);
        await newUser.save();

        await closeMongodbConnection().catch((err) => console.log(err));

        return true;
      } catch {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
