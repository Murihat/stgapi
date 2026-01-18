function successResponse(res, {code = 200, message = 'Success', data = {}}) {
  const response = {
    status: true,
    code,
    message,
    data
  }
  res.locals.responseBody = response;
  return res.status(code).json(response)
  }
  
  function errorResponse(res,{code = 200, message = 'Internal Server Error', data = {}}) {
    const response = {
      status: false,
      code,
      message,
      data
    }
    res.locals.responseBody = response;

    return res.status(code).json(response)
  }
  
module.exports = { successResponse, errorResponse }
  