const express = require('express');
const router = express.Router();
const userRouter = require('../users/userRouter');
const authRouter = require('../auth/authRouter');

router.use('/auth', authRouter);

module.exports = router;