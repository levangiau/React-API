import React from "react";

//
class ProductActionPage extends React.Component {

  render() {
 
    return (
    
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        
        <form>
          <div className="form-group">
            <label>Tên sản phẩm:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Giá:</label>
            <input type="number" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Trạng Thái:</label>
            
            <div className="checkbox">
              <label>
                <input type="checkbox"/>
                Còn hàng
              </label>
            </div>
            
          </div>
          <button type="submit" className="btn btn-primary">Lưu</button>
        </form>
        
      </div>
    </div>
    
    );
  }
}
export default ProductActionPage;