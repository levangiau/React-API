import React from "react";
import ProductList from "./../../components/ProductsList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
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
    let products=[];
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
export default ProductListPage;