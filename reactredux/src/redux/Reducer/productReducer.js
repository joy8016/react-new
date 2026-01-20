const initialState = {
    products:[],
    count:0
}

export const productReducer = (state=initialState, action)=>{
    if(action.type === 'ADD_PRODUCT'){
   
        return {
            products: [...state.products, action.payload]
            
        };

    }
    else if(action.type=== 'INCREMENT'){
        
        return{
            ...state,
            count: state.count+1
        }
    }
    else{
        return state;
    }

}
