import { Schema, model } from 'mongoose';

const RolesSchema = new Schema({
  name: {
    type: String,
  },
}, {
  versionKey: false,
});

export default model('Role', RolesSchema);
