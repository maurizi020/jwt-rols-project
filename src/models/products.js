import { Schema, model } from 'mongoose';

const isEmpty = (v) => v !== '';

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    validate: isEmpty,
  },
  category: {
    type: String,
    required: true,
    validate: isEmpty,
  },
  price: {
    type: Number,
    required: true,
    validate: (v) => v !== 0,
  },
  imgURL: {
    type: String,
    required: true,
    validate: isEmpty,
  },
}, {
  timestamps: true,
  versionKey: false,
});

export default model('Product', productSchema);
