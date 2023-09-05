// import http-status-code
const { StatusCodes } = require('http-status-codes');
// import costum-api 
const CustomAPIError = require('./costum-api-error');

class BadRequest extends CustomAPIError {
    constructor(massage) {
        super(massage);
        // memberikan statusCode bad request 
        this.StatusCode = StatusCodes.BAD_REQUEST;
    }
}
module.exports = BadRequest;