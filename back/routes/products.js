const express=require("express")
const router=express.Router();

const {getProducts, newProducts, getProductById, updateProduct, deleteProduct} = require("../controllers/productsControllers"); //Traemos la respuesta json desde el controlador
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

//isAuthenticatedUser, authorizeRoles("admin"), lo utilizamos para aplicar la seguridad de accesoo al rool admin
router.route('/productos').get(getProducts)  //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin"),newProducts); //Ruta Método post Establecemois la ruta
router.route('/producto/:id').get(getProductById); //Ruta para consultar por id
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin"),updateProduct);//Creación ruta de actualización
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin"),deleteProduct); //Ruta para eliminar por ID




module.exports=router;