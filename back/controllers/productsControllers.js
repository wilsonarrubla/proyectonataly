
 // creamos constante que se alimenta del esquema creado
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto=require("../models/productos");
const ErrorHandler = require("../utils/errorHandler");
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpación del require


//Ver la lista de productos //req,res,next esto es required - response y Next accio futura serìa el getMappin de java

//Ver la lista de productos
exports.getProducts=catchAsyncErrors( async (req,res,next) =>{
    const productos= await producto.find();
    if (!productos){
        return next(new ErrorHandler("Información no encontrada",404))        
}
    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
})

//Ver un producto por ID
// Se utiliza catchAsyncErrors para manejo de erorres
exports.getProductById= catchAsyncErrors( async (req, res, next)=>{
    const product= await producto.findById(req.params.id)
    
    if (!product){
            return next(new ErrorHandler("Producto no encontrado",404))        
    }
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentras información sobre tu producto: ",
        product
    })
})

//Crear nuevo producto /api/productos
exports.newProducts=catchAsyncErrors(async(req,res,next)=>{
    req.body.user=req.user.id;  //segun la algoritmia esta linea debe estar primero para poder que se relacione el usuario con el producto
    const product= await producto.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
})


//Update un producto
exports.updateProduct= catchAsyncErrors(async (req,res,next) =>{
    let product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){
        return next(new ErrorHandler("Producto no encontrado",404))        
}
    //Si el objeto si existia, entonces si ejecuto la actualización
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
})
//Eliminar un producto
exports.deleteProduct= catchAsyncErrors( async (req,res,next) =>{
    const product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){
        return next(new ErrorHandler("Producto no encontrado",404))        
}

    await product.remove();//Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
    })
})



//HABLEMOS DE FETCH
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}


//verProductos(); LLamamos al metodo creado para probar la consulta

//Ver por id
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductoPorID('63500f6a9cdfd54789a3dabe'); //Probamos el metodo con un id