import * as Types from "./../constant/ActionType";
import callApi from "./../utils/apiCaller";
// lấy dữ liệu
export const actFetchProductRequest=()=>{
    return (dispatch)=>{
        return callApi('GET','products',null).then(res=>{
            dispatch(actFetchProduct(res.data))
        })
    }
}
export const actFetchProduct=(product)=>{
    return{
        type:Types.FECTH_PRODUCT,
        product,
    }
}
//xóa dữ liệu
export const actDeleteProductRequest=(id)=>{
    return dispatch=>{
        return callApi('DELETE',`products/${id}`,null).then(res=>{
            dispatch(actDeleteProduct(id));
        })
    }
}
export const actDeleteProduct=(id)=>{
    return{
        type:Types.DELETE_PRODUCT,
        id
    }
}
//thêm dữ liệu
export const actCreateProductRequest=(product)=>{
    return dispatch=>{
        return callApi('POST',`products`,product).then(res=>{
            dispatch(actCreateProduct(res.data));
        })
    }
}

export const actCreateProduct=(product)=>{
    return{
        type:Types.ADD_PRODUDCT,
        product
    }
}
//lay du lieu theo id
export const actGetProductRequest=(id)=>{
    return dispatch=>{
        return callApi('GET',`products/${id}`,null).then(res=>{
            dispatch(actGetProduct(res.data))
        })
    }
}
export const actGetProduct=(product)=>{
    return{
        type: Types.EDIT_PRODUCT,
        product
    }
}
// update du lieu
export const actUpdateProductRequest=(product)=>{
    return dispatch=>{
        return callApi('PUT',`products/${product.id}`,product).then(res=>{
            dispatch(actUpdateProduct(res.data))
        })
    }
}
export const actUpdateProduct=(product)=>{
    return{
        type:Types.UPDATE_PRODUCT,
        product,
    }
}