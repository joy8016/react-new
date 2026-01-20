import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cardReducer } from "./cardReducer";

export const rootReducer = combineReducers({
    productReducer,
    cardReducer,
})

