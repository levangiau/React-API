import * as Types from "./../constant/ActionType";
const initialState=[];

const findIndex=(products,id)=>{
    let result=-1;
    if(products.length >0){
        products.forEach((product,index)=>{
            if(product.id === id){
                result = index;
            }
        })
    }
    return result;
}
const products = (state=initialState,action)=>{
    switch (action.type) {
       case Types.FECTH_PRODUCT:
           state = action.product;
           return [...state];
        case Types.DELETE_PRODUCT:
            let index = findIndex(state,action.id);
            state.splice(index,1);
            return [...state];
        case Types.ADD_PRODUDCT:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            let indexs = findIndex(state,action.product.id);
            state[indexs]=action.product
            return [...state]
        default:
           return [...state];
    }
};
export default products;