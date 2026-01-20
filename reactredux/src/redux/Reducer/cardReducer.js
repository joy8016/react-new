const initialstate = {
    cart:[],
    
}

export const cardReducer = (state=initialstate, action)=>{
    if(action.type === "ADD_TO_CART"){
        return state
    }
    else{
        return state;
    }
}