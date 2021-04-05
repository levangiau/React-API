import React from "react";
//
class ProductList extends React.Component {
  render() {
    return (
      <div className="product-list">  
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Danh sách sản phẩm</h3>
          </div>
          <div className="panel-body"> 
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã Sản Phẩm</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Giá</th>
                  <th>Trạng Thái</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
               {this.props.children}
              </tbody>
            </table>       
          </div>
        </div>
      </div>
    );
  }
}
export default ProductList;