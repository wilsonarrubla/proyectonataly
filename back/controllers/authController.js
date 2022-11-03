const User = require("../models/auth")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

//Registrar nuevo usuario ruta /api/usuario/registro
exports.registroUsuario= catchAsyncErrors(async (req, res, next) =>{
    const{nombre,email, password} = req.body; // se crean constantes con los atributos necesarios del modelo y se toman del body

    //creamos objeto de tipo usuario

    const user = await User.create({//El User se definio con las caracteristicas del modelo y se pueden usar los metodos para crear nuevo user
        nombre,
        email,
        password,
        avatar:{
            public_id:"ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp=CAU"
        }

        })

    //Respuesta que todo salio bien        
        res.status(201).json({
            success:true,
            user

    }) 

})