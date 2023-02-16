import mongoose from 'mongoose';
import connectDB from './connectDB';

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    if (connection.readyState == 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectDB;

