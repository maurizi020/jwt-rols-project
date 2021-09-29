import mongoose from 'mongoose';
import DEBUG from 'debug';

const debug = DEBUG('databaseFile');

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => debug(db))
  .catch((err) => debug(err));
