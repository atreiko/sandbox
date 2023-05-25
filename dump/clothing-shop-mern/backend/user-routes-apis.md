`User Routes APIs`

backend/controllers/userController.js
    // Get User Detail
    getUserDetails = catchAsyncErrors(async(req, res, next) =>
        const user = await User.findById(req.user.id)
        res.status(200).json({
            success: true,
            user
        })

backend/routes/userRoute.js
    import getUserDetails
    import isAuthenticatedUser
    router.route('/me').get(isAuthenticatedUser, getUserDetails)

POSTMAN GET http://localhost:4000/api/v1/me  --> Send
    "success": true,
    "user": {....}
    Logout User --> Send
    Try api/v1/me   again
    "message": "Error: Please Login to access this resource
    Login User --> Send
    "success": true
    Save Get User Details

backend/controllers/userController.js
    // Update User Profile
    updatePassword = catchAsyncErrors(async(req, res, next) => 
    const user = await User.findById(req.user.id).select('+password')
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword)
    if(!isPasswordMatched) {
        return next(new ErrorHandler('Old password is incorrect', 400))
    }
    if(req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler('Password does not match', 400))
    }
    user.password = req.body.newPassword;
    await user.save()
    sendToken(user, 200, res)
    r̶e̶s̶.̶s̶t̶a̶t̶u̶s̶(̶2̶0̶0̶)̶.̶j̶s̶o̶n̶(̶{̶
    s̶u̶c̶c̶e̶s̶s̶:̶ ̶t̶r̶u̶e̶,̶
     ̶ ̶ ̶ ̶u̶s̶e̶r̶
    }̶)̶

backend/routes/userRoute.js
    router.route('/password/update').put(isAuthenticatedUser, updatePassword)

POSTMAN PUT http://localhost:4000/api/v1/password/update --> Send
    Body.raw
    {
        "oldPassword": "password",
        "newPassword": "00000000",
        "confirmPassword": "00000000"
    }
    Result -->
    "success": true,
    Save as Update/ Change Password
    Try Logout and Login with new password

backend/controllers/userController.js
    // Update User Profile
    updatePassword = catchAsyncErrors(async(req, res, next) => 
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    }
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })
    res.status(200).json({
        success: true
    })

backend/routes/userRoute.js
    import updateProfile
    router.route('/me/update').put(isAuthenticatedUser, updateProfile)

POSTMAN PUT http://localhost:4000/api/v1/me/update  Send -->
    {
        "email": "a.treiko92@gmail.com",
        "name": "arte"
    }
    Result -->
    "success": true
    Save as Update Profile

backend/routes/productRoute.js
    Delete:
    router.route('/admin/product/:id') ̶.̶g̶e̶t̶(̶g̶e̶t̶P̶r̶o̶d̶u̶c̶t̶D̶e̶t̶a̶i̶l̶s̶)̶
    Use:
    router.route('/product/:id').get(getProductDetails)

backend/controllers/userController.js
    // Get all users (admin)
    getAllUsers = catchAsyncErrors(async(req, res, next) => 
        users = await User.find()
        res.status(200).json({
            success: true,
            users
        })
    // Get single user (admin)
    getSingleUser = catchAsyncErrors(async(req, res, next) => {
        user = await User.findById(req.params.id)
        if(!user) {
            return next(new ErrorHandler('User does not exist with Id: ${req.params.id}'))
        }
        res.status(200).json({
            success: true,
            user
        })

backend/routes/userRoute.js
    router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), getAllUsers)
    router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getSingleUser)

POSTMAN GET --> http://localhost:4000/api/v1/admin/users Send
    "success": true,
    "users": ...
    Save as Get All Users -- Admin
        GET --> http://localhost:4000/api/v1/admin/user/61925f348fe058d2889432d5 <-- (user._id)
    "success": true,
    "user": ...
    Save as Get Single User -- Admin

backend/controllers/userController.js
    // Update User Role -- Admin
    updateUserRole = catchAsyncErrors(async(req, res, next) => 
        newUserData = {
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
        }
        const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
        res.status(200).json({
            success: true
        })
    // Delete User -- Admin
    deleteUser = catchAsyncErrors(async(req, res, next) => 
        user = await User.findById(req.params.id)
        // We will remove cloudinary later
        if(!user) {
            return next(new ErrorHandler('User does not exist with Id: ${req.params.id}', 400))
        }
        await user.remove()
        res.status(200).json({
            success: true,
            message: 'User Deleted Successfully'
        })

backend/routes/userRoute.js
    import updateUserRole
    deleteUser
    router.route('/admin/user/:id')
        .put(isAuthenticatedUser, authorizeRoles('admin'), updateUserRole)
        .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser)

POSTMAN PUT -->  http://localhost:4000/api/v1/admin/user/61925f348fe058d2889432d5 (user._id) Send -->
    Body.raw:
    {
        "email": "temp1@gmail.com",
        "name": "temp",
        "role": "admin"
    }
    Result -->
    "success": true
    Save as Update User -- Admin
        DELETE --> http://localhost:4000/api/v1/admin/user/619693a4ac67dad9879f92e1 (user._id) Send -->
    "success": true
    Save as Delete User -- Admin

backend/controllers/productController.js
    const { rating, comment, productId } = req.body
    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    }
    const product = await Product.findById(productId)
        const isReviewed = product.reviews.find(rev => rev.user.toString() === req.user._id.toString())
    // Create New Review or Update the Review
    createProductReview = catchAsyncError (async (req, res, next) => 
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
    product.ratings = avg / product.reviews.length;
    await product.save({validateBeforeSave: false})
    res.status(200).json({
        success: true
    })

backend/routes/productRoute.js
    import createProductReview
    router.route('/review').put(isAuthenticatedUser, createProductReview)

POSTMAN Get All Products --> Send
    Create A Product -- Admin --> Send
    COPY product._id  
    Create PUT --> http://localhost:4000/api/v1/review      Send --> 
    Body.raw:
    {
        "productId": "6197b1507c51cbceca58a1d7",
        "comment": "just okay product",
        "rating": 4
    }
    Result -->
    "success": true
    Get All Products Again on page: last page
    to check reviews.rating in created product
    Create Folder for User Routes
    Save as Create / Update Review
    Transfer: Get User Details
              Get Single User -- Admin
              Delete User
              Update/Change Password
              Update USer -- Admin
              Get All Users -- Admin
              Update Profile
    to  : User Routes

backend/controllers/productController.js
    // Get All Reviews of a product
    getProductReviews = catchAsyncErrors(async(req, res, next) => 
    product = await Product.findById(req.query.id)
    if(!product) {
        return next(new ErrorHandler('Product Not Found', 404))
    }
    res.status(200).json({
        success: true,
        reviews: product.reviews,
    })
    // Delete Review
    deleteReview = catchAsyncErrors(async (req, res, next) => 
    const product = await Product.findById(req.query.productId)
    if(!product) {
        return next(new ErrorHandler('Product Not Found', 404))
    }
    const reviews = product.reviews.filter(
        (rev) => rev._id.toString() !== req.query.id.toString()
    )
    let avg = 0;
    reviews.forEach((rev) => {
        avg += rev.rating;
    })
    const rating = avg / reviews.length
    const numOfReviews = reviews.length
    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numOfReviews,
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
    })

backend/routes/productRoute.js
    import getProductReviews, deleteReview
    router
    .route('/reviews')
    .get(getProductReviews)
    .delete(isAuthenticatedUser, deleteReview)

POSTAMAN GET --> http://localhost:4000/api/v1/reviews/productId=6197b1507c51cbceca58a1d7   Send --> 
    key: id, value: product._id
    Result -->
    "success": true,
    "reviews": [...
    Save as Get All Reviews
         DELETE --> http://localhost:4000/api/v1/reviews/?id=6197b1507c51cbceca58a1d7       Send -->
         key: productId, value: product._id
         key: id, value: review._id
    Result -->
    "success": true
    Save as Delete Product Review

