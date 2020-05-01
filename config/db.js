import mongoose from "mongoose";

export default async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1);
  }
};
