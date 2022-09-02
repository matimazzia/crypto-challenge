import axios from "axios";
import { type } from "./types";

export function getCoin(ticker){
    return async function(dispatch){
        try{
            var json= await axios.get(`https://api.cryptapi.io/${ticker}/info/`)
            return dispatch({
                type: type.GET_COINS,
                payload: json.data
            })
        }catch(e){
            console.log(e.message)
        }
    }
}

export function addFav(value){
    return async function(dispatch){
        try{
            return dispatch({
                type: type.ADD_FAV,
                payload: value
            })
        }catch(e){
            console.log(e.message)
        }
    }
}
export function deleteFav(value){
    return async function(dispatch){
        try{
            return dispatch({
                type: type.DELETE_FAV,
                payload: value
            })
        }catch(e){
            console.log(e.message)
        }
    }
}
export function openFav(value){
    return async function(dispatch){
        try{
            return dispatch({
                type: type.OPEN_FAV,
                payload: value
            })
        }catch(e){
            console.log(e.message)
        }
    }
}