const express=require("express")
const router=express.Router();

const {getProducts, newProducts, getProductById, updateProduct, deleteProduct} = require("../controllers/productsControllers") //Traemos la respuesta json desde el controlador
router.route('/productos').get(getProducts); //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProducts); //Ruta Método post Establecemois la ruta
router.route('/producto/:id').get(getProductById); //Ruta para consultar por id
router.route('/producto/:id').put(updateProduct);//Creación ruta de actualización
router.route('/producto/:id').delete(deleteProduct); //Ruta para eliminar por ID




module.exports=router;