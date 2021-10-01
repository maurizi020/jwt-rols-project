import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [{
    ref: 'Role',
    type: Schema.Types.ObjectId,
  }],
}, {
  timestamps: true,
  versionKey: false,
});

export default model('Users', UserSchema);
