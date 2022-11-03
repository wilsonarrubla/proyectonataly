const ErrorHandler = require ('../utils/errorHandler')

module.exports = (err, req, res, next ) =>{
    err.statusCode = err.statusCode || 500;
    EvalError.message =err.message || "Intenal Server Error"
    res.status(err.statusCode).json({
        success:false,
        message:err.stack //El stack me da más información del error
    })
}