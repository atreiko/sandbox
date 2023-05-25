const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncErrors');
const ApiFeatures = require('../utils/apifeatures');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

// create product - admin
exports.createProduct = catchAsyncError (async (req, res, next) => {

    req.body.user = req.user.id

    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product: product
    })
})

// get all products
exports.getAllProducts = catchAsyncError (async (req, res, next) => {

    const resultPerPage = 8;
    const productCount = await Product.countDocuments()

    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage)
    const products = await apiFeature.query;
    // Product.find()
    res.status(200).json({
        success: true,
        products: products
    })
})

// get product details
exports.getProductDetails = catchAsyncError (async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if(!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    res.status(200).json({
        success: true,
        product: product,
        productCount: productCount
    })

})

// update product - admin
exports.updateProduct = catchAsyncError (async (req, res, next) => {
    let product = await Product.findById(req.params.id)

    if(!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product: product
    })
})

// delete product 
exports.deleteProduct = catchAsyncError (async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if(!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    await product.remove()

    res.status(200).json({
        success: true,
        message: 'Product Delete Successfully'
    })
})

// create new review or update the review
exports.createProductReview = catchAsyncError (async (req, res, next) => {
    const { rating, comment, productId } = req.body

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    }

    const product = await Product.findById(productId)
        const isReviewed = product.reviews.find(rev => rev.user.toString() === req.user._id.toString())

    if(isReviewed) {
        product.review.forEach(rev => {
            if(rev.user.toString() === req.user._id.toString())
            rev.rating = rating,
            rev.comment = comment
        })
    } else {
        product.reviews.push(review)
        product.numOfReviews = product.reviews.length
    }

    let avg = 0;
    product.reviews.forEach((rev) => {
        avg += rev.rating;
      });
    // 4, 5, 5, 2 = 16 / arr.length
    product.ratings = avg / product.reviews.length;

    await product.save({validateBeforeSave: false})

    res.status(200).json({
        success: true
    })
})

// Get All Reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.id)

    if(!product) {
        return next(new ErrorHandler('Product Not Found', 404))
    }

    res.status(200).json({
        success: true,
        reviews: product.reviews,
    })
})

// Delete Review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);
  
    if (!product) {
      return next(new ErrorHandler('Product not found', 404));
    }
  
    const reviews = product.reviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );
  
    let avg = 0;
  
    reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    let ratings = 0;
  
    if (reviews.length === 0) {
      ratings = 0;
    } else {
      ratings = avg / reviews.length;
    }
  
    const numOfReviews = reviews.length;
  
    await Product.findByIdAndUpdate(
      req.query.productId,
      {
        reviews,
        ratings,
        numOfReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
  
    res.status(200).json({
      success: true,
    });
});
