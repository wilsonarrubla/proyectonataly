const ErrorHandler = require ('../utils/errorHandler')

module.exports = (err, req, res, next ) =>{
    err.statusCode = err.statusCode || 500;
    EvalError.message =err.message || "Intenal Server Error"
    res.status(err.statusCode).json({
        success:false,
        message:err.stack //El stack me da más información del error
    })
    //Error de clave duplicada en mongoose personalizados diferentes a los de defecto
    if (err.code=== 11000){
        const message=`Clave duplicada ${Object.keys(err.keyValue)}`
        error= new ErrorHandler(message, 400) //error personalizado 
    }

    //Error en JWT token
    if (err.name==="JsonWebTokenError"){
        const message= "Token de Json Web es invalido, intentalo de nuevo!"
        error= new ErrorHandler(message, 400)//error personalizado 
    }

    //JWT token expirado
    if (err.name==="TokenExpiredError"){
        const message= "El token de JWT es vencido. Ya expiró. Intentalo de nuevo!"
        error= new ErrorHandler(message, 400)//error personalizado 
    }
}