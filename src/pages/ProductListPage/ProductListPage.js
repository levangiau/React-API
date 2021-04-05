import React from "react";
import ProductList from "./../../components/ProductsList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import {connect} from "react-redux";
//
class ProductListPage extends React.Component {
  showProductItem=(products)=>{
    let result=null;
    if(products.length > 0){
      result = products.map((products,index)=>{
        return(
          <ProductItem
          key={index}
          products={products}
          index={index}
          />
        );
      })
    }
    return result;
  }
  render() {
    let {products}=this.props;
    return (
     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-info mb-10">Thêm Sản Phẩm</button>    
        <ProductList>
          {this.showProductItem(products)}
        </ProductList>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    products:state.products
  }
}
export default connect(mapStateToProps,null)(ProductListPage);