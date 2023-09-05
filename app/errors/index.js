const CustomAPIError = require('./costum-api-error');
const BadRequestError = require('./bad-request');
const NotFoundError = require('./not-found');
const UnauthorizedError = require('./unauthorized');
const UnauthenticatedError = require('./unauthenticated');

module.exports = {
	CustomAPIError,
	BadRequestError,
	NotFoundError,
	UnauthorizedError,
	UnauthenticatedError,
};