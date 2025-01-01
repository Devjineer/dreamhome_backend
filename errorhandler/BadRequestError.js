const CustomAPIError = require('./CustomApiError')
const {StatusCodes} = require('http-status-codes')

class BadRequestError extends CustomAPIError{
  constructor(message){
    super(message);
    this.status = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequestError