//paso 4 se crean los metodos de consultas al back 
import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constans/productConstans';


export const getProducts = () => async(dispatch)=>{
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST})

        const {data} = await axios.get('api/productos')

        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch (error){
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

//VER DETALLE DEL PRODUCTO
export const getProductDetails = (id) => async(dispatch)=>{ //Metodos consulta por id
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`api/producto/:${id}`) //tener en cuenta los : para poder que funcione

        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    }catch (error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}


//clear error
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}