import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskreducer from "./action";


export default configureStore({
    reducer:{
        task:taskreducer,
        
    }
})

