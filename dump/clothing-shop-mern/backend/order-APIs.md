`Making Order APIs`

backend/models/orderModel.js
    import mongoose
    orderSchema = new mongoose.Schema({
        shippingInfo
            address
            city
            state
            country
            pinCode
            phoneNo
        orderItems
            name
            price
            quantity
            image
            product:{ type: mongoose.Schema.ObjectId,
        product
        user:{ type: mongoose.Schema.ObjectId,
        paymentInfo
            id
            status
        paidAt
        itemsPrice
        taxPrice
        shippingPrice
        totalPrice
        orderStatus
        deliveredAt

backend/controllers/orderController.js
    // Create New Order
    import Order, Product, ErrorHandler, catchAsyncErrors
    newOrder = catchAsyncErrors(async (req, res, next) => 
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;
    order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    res.status(201).json({
        success: true,
        order,

backend/routes/orderRoute.js
    import express 
    { newOrder } 'models/orderModel'
    router = express.Router()
    { isAuthenticatedUser, authorizeRoles } 'middleware/auth'
    router.route('/order/new').post(isAuthenticatedUser, newOrder)
    module.exports = router

backend/app.js
    const order = require('./routes/orderRoute')
    app.use('/app/v1', order)

POSTMAN Create Order Folder
    POST --> http://localhost:4000/api/v1/order/new

4:20