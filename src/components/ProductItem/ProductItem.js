import React from "react";
import { Link } from "react-router-dom";

//
class ProductItem extends React.Component {
  onDelete=(id)=>{
    if(confirm('Bạn muốn xóa?')){//eslint-disable-line
     this.props.onDelete(id);
    }
  }
  render() {
    let {products,index} = this.props;
    let statusName = products.status?"còn hàng":"hết hàng";
    let statusClass = products.status?"info":"warning"
    return (
      <tr>
        <td>{index+1}</td>
        <td>{products.id}</td>
        <td>{products.name}</td>
        <td>{products.price}</td>
        <td>
        <span className={`label label-${statusClass}`}>
        {statusName}
        </span>
        </td>
        <td>
          <Link 
          to={`/product/${products.id}/edit`}
          type="button" 
          className="btn btn-info mr-10"
          >
          Sửa
          </Link>
          <button 
          type="button" 
          className="btn btn-danger"
          onClick={()=>this.onDelete(products.id)}
          >
            Xóa
          </button>
        </td>
      </tr>       
    );
  }
}
export default ProductItem;