import DEBUG from 'debug';
import { StatusCode } from 'http-status-codes';
import Products from '../models/products';

const debug = DEBUG('Controllers:Products');

const createProduct = async (req, res) => {
  const {
    name, category, price, imgURL,
  } = req.body;
  const newProduct = new Products({
    name, category, price, imgURL,
  });
  try {
    await newProduct.save();
    res.status(StatusCode.CREATED).send({ msg: 'the product has been created.' });
  } catch (error) {
    debug(error);
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ msg: 'internal server error' });
  }
};

const getProducts = (req, res) => {

};

const getProductById = (req, res) => {

};

const updateProductById = (req, res) => {

};

const deleteProductById = (req, res) => {

};

export {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
