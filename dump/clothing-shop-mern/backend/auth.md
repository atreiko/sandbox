`User & Password Auth`

validator bcryptjs jsonwebtoken body-parser cookie-parser nodemailer 

nodemailer модуль для отправки писем

backend/models/userModel.js
    mongoose
    validator
    userSchema
    name: {min/max}
    email: {validate: validator.isEmail ...}
    password {min/select:false}
    avatar: {public_id, url}
    role {default: 'user'}
    resPassToken
    resPassExpire

backend/models/userController.js
    import ErrorHandler, catchAsyncErrors, User

    exp.registgerUser = catchAsyncErrors(async(req,res,next) => {
        name, email, password, avatar:{...} = req.body
        user = await User.create({...})
        res.status(201).json({
            success: true,
            user: user
        })
    })

backend/models/userRoute.js
    const express = require('express')
    const { registerUser } = require('../controllers/userController')
    const router = express.Router()
    router.route('/register').post(registerUser)
    module.exports = router

backend/app.js
    const user = require('./routes/userRoute')
    app.use('/api/v1', user)

POSTMAN --> 
    Create Auth Folder
    Create new POST query
    http://localhost:4000/api/v1/register     (body -> raw JSON) Send

backend/models/userModel.js
    import bcrypt from 'bcryptjs'
    userSchema.pre('save', async function(next){
        if(!this.isModified('password')) {
            next()
        }
        this.password = await bcrypt.hash(this.password, 10)
    })

    - JWT TOKEN -
    Add method to userSchema
    const jwt = require('jsonwebtoken')
    userSchema.methods.getJWTToken = function() {
        return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE,
        })
    }

backend/models/userController.js
    const token = user.getJWTToken()
        res.status(201).json({
        success: true,
        token                   - change: u̶s̶e̶r̶ -> token
    })

backend/config/config.env
    JWT_SECRET=BOLODFXCVRYUFJHGVBNCVBXCBXBCXBSFSQWRQRQCODE
    JWT_EXPIRE=5d

POSTMAN POST http://localhost:4000/api/v1/register
    {
        "name": "newBolocode",
        "email": "bolocode@gmail.com",
        "password": "password"
    }
    Send -> {success: true, token: ejKjBun....}

backend/models/userController.js
    Create user login func:
    email, password = req.body
    if !email || !password { new ErrorHandler('Error message', 400) }
    const user = await User.findOne({ email }).select('+password')
    if !user { new ErrorHandler('Error message', 401) }
    const isPasswordMatched = user.comparePassword(password)                  - create in userModel
    if !isPasswordMatched { new ErrorHandler('Error message', 401) }
    const token = user.getJWTToken()
    res.status(200).json({
        success: true,
        token
    })

backend/models/userModel.js
    Create --> comparePassword func
    userSchema.methods.comparePassword = async function(enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password)
    }

backend/models/userRoute.js
    router.route('/login').post(loginUser)

POSTMAN POST http://localhost:4000/api/v1/register
    Save as Register User in Authentication

    Create POST http://localhost:4000/api/v1/login
    Send empty query to check your Errors
    Try to login    (raw, JSON)

backend/utils/jwtToken.js       - create
    const sendToken = (user, statusCode, res) =>
        const token = user.getJWTToken()
        options for cookie: 
        expire: COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
        httpOnly
        res.status(statusCode).cookie('token', token, options).json({
            success: true,
            user,
            token
        })
        export sendToken

backend/config/config.env
    Add -->  COOKIE_EXPIRE=5

backend/models/userController.js
    import sendToken
    Change: 
 ̶ ̶ ̶ ̶c̶o̶n̶s̶t̶ ̶t̶o̶k̶e̶n̶ ̶=̶ ̶u̶s̶e̶r̶.̶g̶e̶t̶J̶W̶T̶T̶o̶k̶e̶n̶(̶)̶
̶ ̶ ̶ ̶ ̶r̶e̶s̶.̶s̶t̶a̶t̶u̶s̶(̶2̶0̶0̶)̶.̶j̶s̶o̶n̶(̶{̶
̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶s̶u̶c̶c̶e̶s̶s̶:̶ ̶t̶r̶u̶e̶,̶
̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶t̶o̶k̶e̶n̶
̶ ̶ ̶ ̶ ̶}̶)̶
    registerUser => sendToken(user, 201, res)
    loginUser => sendToken(user, 200, res)

POSTMAN POST Login User 
    {
        "email": "has already reg",
        "password": "password"
    }
    Send

backend/middleware/auth.js
    import catchAsyncErrors
    exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => 
    const { token } = req.cookies;

backend/app.js
    import cookieParser
    app.use(cookieParser())

backend/routes/productRoute.js
    import isAuthenticatedUser from 'middleware/auth'
    router.route('/products').get(isAuthenticatedUser, getAllProducts)

POSTMAN GET Get All Products -> Send
    auth.js -> log(token) 
    
backend/middleware/auth.js 
    import jwt, User
    isAuthenticatedUser =>
    if !token return next( new ErrorHandler('message', 401 )) 
    const decodedData = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decodedData.id)  
    next()

POSTMAN GET Get All Products Send ->
    Done

backend/models/userController.js
    exports.logout = catchAsyncErrors(async (req, res, next) =>
        res.cookie('token', null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })
        res.status(200).json({
            success: true,
            message: 'Logged Out'
        })

backend/routes/userRoute.js
    import logout
    router.route('/logout').get(logout)

POSTMAN GET http://localhost:4000/api/v1/logout - Send
    : 'message':'Logged Out'
    Get All Products -> Send: { success: false } catch Auth Error
    Login User -> Send
    Get All Products -> Send: { success: true }

backend/routes/productRoute.js
    ADD: isAuthenticatedUser, authorizeRoles('admin')       - create in auth.js
    router.route('/products').get(isAuthenticatedUser, authorizeRoles('admin'), getAllProducts)
    router.route('/product/new').post(isAuthenticatedUser, createProduct)
    router
    .route('/product/:id')
        .put(isAuthenticatedUser, updateProduct)
        .delete(isAuthenticatedUser, deleteProduct)

backend/middleware/auth.js
    exports.authorizeRoles = (...roles) => 
    if !roles.includes(req.user.role) return next(new ErrorHandler('message'), 403)
    next()

POSTMAN --> Get All Products  Send
    'success': false,  'message': 'Role: user is not allowe...
    change Role in DB 'admin' to check this query again
    Get All Products  Send 
    'success': true

backend/routes/productRoute.js
    Update routes:
    router.route('/products').get(getAllProducts)
    router
        .route('/product/new')
        .post(isAuthenticatedUser, authorizeRoles('admin'), createProduct)
    router
        .route('/product/:id')
        .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
        .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct)
        .get(getProductDetails)

backend/models/productModel.js
    Add -->
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },

backend/controllers/productController.js
    Получаем Id пользователя, который создавал продукт в поле user:
    createProduct =>
        req.body.user = req.user.id

POSTMAN POST Create A Product -- adm Send
    Get All Products Send
    Check that ur product created by "user": "user id"

backend/models/userModel.js
    TRY TO HASH:
    https://www.tutorialspoint.com/execute_nodejs_online.php  {    
        const crypto = require("crypto")
        const token = crypto.randomBytes(20).toString("hex")
        console.log(token)
        const tokenCrypto = crypto.createHash("sha256").update(token).digest('hex')
        console.log(tokenCrypto)
    }   :   a45a8acd2d14e32e9ac451942e7436e443fb11df
            3ee6819c02669a1a182fd61b4aec7e3eab268538600099e703ea1f2117d90083
    
    // Generating Password Reset Token:
    userSchema.methods.getResetPasswordToken = function() {
    const resetToken = crypto.randomBytes(20).toString('hex')
    // Hashing and add to userSchema
    this.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex')
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken

backend/controllers/userController.js
    // Forgot Password:
    exports.forgotPassword = catchAsyncErrors(async(req, res, next) => 
    const user = await User.findOne({email: req.body.email})
    if(!user) {
        return next(new ErrorHandler('User not found', 404))
    }
    const resetToken = user.getResetPasswordToken()
    await user.save({validateBeforeSave: false})
    const resetPasswordUrl = 'http://...${resetToken}'
    const message = '...${resetPasswordUrl}'
    try {
        await sendEmail({
            email: user.email,
            subject: 'Clothing Password Recovery',
            message,
        })
        res.status(200).json({
            success: true,
            message: 'Email sent to ${user.email} successfully',
        })
    catch (error) {
        user.getResetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false })
        return next(new ErrorHandler(error.message, 500))
    
    create sendEmail func and import in userController.js

backend/utils/sendEmail.js
    import nodeMailer 
    const sendEmail = async (options) => 
        const transporter = nodeMailer.createTransport({
            service: process.env.SMPT_SERVICE,
            auth: {
                user: process.env.SMPT_MAIL,
                pass: process.env.SMPT_PASSWORD
            }
        })
        const mailOptions = {
            from: process.env.SMPT_MAIL,
            to: options.email,
            subject: options.subject,
            text: options.message
        }
        await transporter.sendMail(mailOptions)
    
backend/config/config.env
    Почта и пароль должны совпадать с учетной записью гугл аккаунта, чтоб отправить письмо
    Чтоб отправить письмо - нужно дать доступ небезопасным приложениям:
    https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4M9r8CeTbTuuR5hCRd8lE6fOuJra5OSDr1cfyKTK3gAaIcDFYp2CAMsYv1qE2wyerOy057pEsxUQ_3lW-N-JwSXImuK0Q
    ( включить, рестарт сервака, а потом отправить )
    SMPT_SERVICE="gmail"
    SMPT_MAIL="tempmailforbolo@gmail.com"
    SMPT_PASSWORD="temppassword"

backend/routes/userRoute.js
    import forgotPassword
    router.route('/password/forgot').post(forgotPassword)

POSTMAN --> POST http://localhost:4000/api/v1/password/forgot  Send 
    raw
    "email": "user email"
    Result:
    "success": true,
    "message": "Email sent to "user email" successfully"
    Можно чекнуть сообщение в "user email"

backend/utils/sendEmail.js
    Используем бесплатный SMTP сервер от Google
    Для этого вводим host и port:
    host: process.env.SMPT_HOST,        - create in config
    port: process.env.SMPT_PORT,

backend/config/config.env
    SMPT_HOST=smtp.gmail.com
    SMPT_PORT=465

POSTMAN --> POST http://localhost:4000/api/v1/password/forgot  Send
    Result:
    {
        "success": true,
        "message": "Email sent to a.treiko92@gmail.com successfully"
    }
    Save query as 'FORGOT PASSWORD'
    Check email ->
    GET link from message:
    http://localhost:4000/password/reset/eaa89cc610e8d9347bde85c82cf056496820d517
    Create GET ->  http://localhost:4000/password/reset/eaa89cc610e8d9347bde85c82cf056496820d517

backend/models/userController.js
    // Reset Password
    import crypto
    exports.resetPassword = catchAsyncErrors(async(req, res, next) =>
        const resetPasswordToken = crypto
            .createHash('sha256')
            .update(req.params.token)
            .digest('hex')
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        })
        if(!user) {
            return next(new ErrorHandler('Reset Password Token is invalid or has been expired', 400))
        }
        if(req.body.password !== req.body.confirmPassword){
            return next(new ErrorHandler('Password does not matched', 400)) 
        }
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save()
        sendToken(user, 200, res)

backend/routes/userRoute.js
    import resetPassword
    router.route('/password/reset/:token').put(resetPassword) (PUT)

POSTMAN -> FORGOT PASSWORD Send
    Open Mail: copy link
    Create PUT -->  http://localhost:4000/password/reset/17083ec62c5e031478dac0765f581cd4add85893
    body.raw:
    {
        "password": "000000000",
        "confirmPassword": "000000000"
    }
    <pre>Cannot PUT /password/reset/07f742e7d2e215a795d3f87134903fff43eb5e6c</pre>
- ! - ! - ! - ! - ! - ! - ! - ! - ! - ! - ! - ! - ! - ! - ! - ! - ! - ! - ! - ! 

backend/middleware/error.js
    // Mongoose duplicate key error
    if(err.code === 11000) {
        const message = 'Duplicate ${Object.keys(err.keyValue)} Entered'
        err = new ErrorHandler(message, 400)
    }
    Try to reg same users in postman to check error
    // Wrong JWT error
    if(err.name === 'JsonWebTokenError') {
        const message = 'Json Web Token is invalid, try again'
        err = new ErrorHandler(message, 400)
    }



