import mongoose from 'mongoose';

export const connectdb = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('connection successful and db connected');
    })
    .catch((err) => {
      console.log(err);
    });
};
