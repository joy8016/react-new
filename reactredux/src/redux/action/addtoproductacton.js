import ADD_PRODUCT, { INCREMENT } from "../../constants/productConstantss"

export const addtoproduct = (details)=>{
   return{
    type:ADD_PRODUCT,
    payload:details
   }
}
export const increment = ()=>{
   return{
    type:INCREMENT,
    
   }
}