const { StatusCodes } = require('http-status-codes');
const { default: mongoose } = require('mongoose');
const errorHandlerMiddleware = (err, req, res, next) => {
    // console.log('err');
    // console.log(err.message);
    // console.log(err.errors);
    let customError = {
        // set default 
        StatusCode: err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong try again later',
    };
    // error validation dari mongoose 
    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.errors)
        .map ((item) => item.message)
        .join(',');
        customError.StatusCode = 400;
    }
    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate velue entered for ${Object.keys(err.keyValue
            )} field, please choose another value`;
            customError.StatusCode = 400 ;
    }
    if (err.name === 'CastError') {
        customError.msg = `No item found with id : ${err.value}`;
        customError.StatusCode = 404;
    }

    return res.status(customError.StatusCode).json({ msg: customError.msg});
}

module.exports = errorHandlerMiddleware;