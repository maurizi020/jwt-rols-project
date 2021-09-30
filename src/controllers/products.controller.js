import DEBUG from 'debug';
import StatusCode, { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
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

/**
 * Function to find a specific product using its id
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
const getProductById = async (req, res) => {
  const { query } = req;
  if (mongoose.isValidObjectId(query.Id)) {
    try {
      const product = await Products.findById(query.Id);
      res.status(StatusCodes.OK).send(product);
    } catch (error) {
      debug(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Internal Server Error' });
    }
  } else {
    debug(`Invalid Id: ${query.Id} is not valid`);
    res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Bad request' });
  }
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
