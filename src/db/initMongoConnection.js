/* eslint-disable no-undef */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const initMongoConnection = async () => {
  try {
    const user = process.env.MONGODB_USER;
    const pwd = process.env.MONGODB_PASSWORD;
    const url = process.env.MONGODB_URL;
    const db = process.env.MONGODB_DB;

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=ContactCluster`,
    );

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Error while setting up mongo connection', error);
    throw error;
  }
};
