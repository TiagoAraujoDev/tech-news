import { NextAuthOptions, User } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'
import { query as q } from 'faunadb'

import { fauna } from '../../../lib/fauna'

interface SignIn {
  user: User | AdapterUser
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: {
        params: {
          scope: 'read:user',
        },
      },
    }),
  ],
  secret: 'x6PQvGcMMrpiSbIP/WxqkJ6HOckl4PpndIAINzAL0a0=',
  jwt: {},
  callbacks: {
    async signIn({ user }: SignIn): Promise<boolean> {
      const { email } = user

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index('user_by_email'), q.Casefold(user.email!)),
              ),
            ),
            q.Create(q.Create(q.Collection('users'), { data: { email } })),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email!))),
          ),
        )

        return true
      } catch {
        return false
      }
    },
  },
}

export default NextAuth(authOptions)
