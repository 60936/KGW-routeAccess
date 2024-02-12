const express = require('express');
const controller = require('./1auth');

const router = express.Router();

router.post("/1auth/register", controller.registerUser);

module.exports = router;
