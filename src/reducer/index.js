import {combineReducers} from "redux";
import products from "./product";
import itemEditing from "./itemEditing";
const reducer = combineReducers({
    products,
    itemEditing
});
export default reducer;