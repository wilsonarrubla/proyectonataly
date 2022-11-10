const express=require("express");
const { registroUsuario, loginUser, logOut, resetPassword, forgotPassword } = require("../controllers/authController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router= express.Router();

router.route('/usuario/registro').post(registroUsuario)
router.route('/login').get(loginUser)
router.route('/logout').get(isAuthenticatedUser, logOut) //isAuthenticatedUser quien esta logueado puede cerrar sesión
router.route("/forgotPassword").post(forgotPassword)
router.route('/resetPassword/:token').post(resetPassword)
module.exports= router