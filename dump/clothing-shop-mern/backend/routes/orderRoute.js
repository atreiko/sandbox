const express = require('express');
const newOrder = require('../models/orderModel');
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')

router.route('/order/new').post(isAuthenticatedUser, newOrder);

module.exports = router;