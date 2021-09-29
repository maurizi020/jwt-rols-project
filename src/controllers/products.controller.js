import DEBUG from 'debug';
import { StatusCode } from 'http-status-codes';
import Products from '../models/products';

const debug = DEBUG('Controllers:Products');

/**
 *  Function to save a product object in the database
 * @param {Express.Request} req
 * @param {Express.Response} res
 */

const createProduct = async (req, res) => {
  const {
    name, category, price, imgURL,
  } = req.body;
  try {
    const newProduct = new Products({
      name, category, price, imgURL,
    });

    const newProductSaved = await newProduct.save();
    res.status(StatusCode.CREATED).send({ msg: 'the product has been created.', newProduct: newProductSaved });
  } catch (error) {
    debug(error);
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ msg: 'internal server error' });
  }
};

/**
 * function to list all products in the database
 * @param {Express.Response} res
 */
const getProducts = async (_, res) => {
  try {
    const productsList = await Products.find();
    res.status(StatusCode.OK).send(productsList);
  } catch (error) {
    debug(error);
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ msg: 'internal server error' });
  }
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
