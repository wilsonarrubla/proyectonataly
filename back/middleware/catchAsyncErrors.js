//cuerpo respuesta y segunda acció hacer Atrapa los errores de las promesas en todo el proyecto
module.exports = func => (req, res, next) =>
    Promise.resolve(func(req, res, next))
    .catch(next)

