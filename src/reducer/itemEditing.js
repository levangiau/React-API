import * as Types from "./../constant/ActionType";

let initialState={};

const itemEditing=(state=initialState,action)=>{
    switch(action.type){
        case Types.EDIT_PRODUCT:
            state=action.product;
        return state;
        default:
            return state;
    }
}
export default itemEditing;