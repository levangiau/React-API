import React from "react";

//
class ProductItem extends React.Component {
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
        <button type="button" className="btn btn-info mr-10">Sửa</button>
        <button type="button" className="btn btn-danger">Xóa</button>
        </td>
      </tr>       
    );
  }
}
export default ProductItem;