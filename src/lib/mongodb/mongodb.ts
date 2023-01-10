import mongoose from "mongoose";

type Connection = {
  isConnected: number;
};

const uri = process.env.MONGODB_URL!;
const connection = {} as Connection;

export const createMongodbConnection = async () => {
  try {
    if (connection.isConnected) {
      return;
    }

    mongoose.set("strictQuery", true);
    const db = await mongoose.connect(uri);

    connection.isConnected = db.connection.readyState;
  } catch (error) {
    console.log(error);
  }
};

export const closeMongodbConnection = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};
