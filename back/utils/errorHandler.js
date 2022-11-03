class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode= statusCode

        Error.captureStackTrace(this, this.constructor) /* capture la trazabilidad */
    }
}
module.exports=ErrorHandler   //Se exporta el manejador de errores mensaje y código