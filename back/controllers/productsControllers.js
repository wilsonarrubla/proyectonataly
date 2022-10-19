//req,res,next esto es required - response y Next accio futura serìa el getMappin de java
exports.getProducts=(req,res,next) =>{
    res.status(200).json({
    sucess:true,
    message: "En esta ruta ud va a poder ver todos los productos"})}