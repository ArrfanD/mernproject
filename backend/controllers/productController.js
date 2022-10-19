const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorHandler')

// Create Product -- Admin
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}

// Get All Products
exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
}

// Update Product -- Admin
exports.updateProduct = async (req,res,next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })
}

// Delete Existing Product 
exports.deleteProduct = async (req,res,next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Cannot find this Product in the Database", 500))
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product Delete Successful"
    })
}

// Get Product Details 
exports.getProductDetails = async (req,res,next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        product
    })
}