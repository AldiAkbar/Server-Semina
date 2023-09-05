const { signin } = require('../../../services/mongoose/auth');

const { StatusCodes } = require('http-status-codes');

const signinCms = async (req, res, next) => {
    try {
        const result = await signin(req);
console.log(result)
        res.status(StatusCodes.CREATED).json({
            data: { token: result },
        });
    } catch (err) {
        next(err);
    }
};
module.exports = { signinCms };