//Paso 2 Crear los estados se comienza importa las constantes

import { ALL_PRODUCTS_REQUEST, 
    ALL_PRODUCTS_SUCCESS, 
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS} from "../constans/productConstans";

export const productsReducer = (state ={ products: []}, action)=>{  //Aqui se trae un arreglo de productos
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return{
                loading:true, // 
                productos:[]
            }

        case ALL_PRODUCTS_SUCCESS:
            return{
                loading:false,
                productos: action.payload.productos,
                cantidad: action.payload.cantidad
            }

        case ALL_PRODUCTS_FAIL:
            return{
                loading:false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        

        default:
            return state;
    }
}

//REDUCER PARA TENER TODOS LOS DETALLES
export const productDetailsReducer = (state ={ product: {}}, action)=>{  //Quitamos el areglo de productos y se coloca las llaves porque en el template se maneja con llaves
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{
                ...state,  //devuelve un estado los tres puntos es por si hay demora en la respuesta
                loading:true  // para el cargando..
            }

        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product: action.payload.product,
            }

        case PRODUCT_DETAILS_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        

        default:
            return state;
    }
}