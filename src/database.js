import mongoose from 'mongoose';
import DEBUG from 'debug';

const debug = DEBUG('databaseFile');

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => debug('the database is connected.'))
  .catch((err) => debug(err));
