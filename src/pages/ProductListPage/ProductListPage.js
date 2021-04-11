import React from "react";
import ProductList from "./../../components/ProductsList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import {connect} from "react-redux";
// import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
import {actFetchProductRequest,actDeleteProductRequest} from "./../../action";
//
class ProductListPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      products:[],
    }
  }
  componentDidMount(){
    // callApi("GET","products",null).then(res=>{
    //   // this.setState({
    //   //   products:res.data
    //   // });
    //  
    // })
    this.props.fetchAllProduct();
  
  }
  findIndex=(products,id)=>{
    let result = -1;
    products.forEach((product,index)=>{
      if(product.id === id){
        result = index;
      }
    })
    return result;
  }
  onDelete=(id)=>{
    // let {products} = this.state;
    // callApi("DELETE",'products'+`/${id}`,null).then(res=>{
    //   if(res.status === 200){ //ok
    //     let index = this.findIndex(products,id);
    //     if(index !== -1){
    //       products.splice(index,1);
    //       this.setState({
    //         products
    //       })
    //     }
      
    //   }
    // })
    this.props.onDeleteProduct(id);
  }

  showProductItem=(products)=>{
    let result=null;
    if(products.length > 0){
      result = products.map((products,index)=>{
        return(
          <ProductItem
          key={index}
          products={products}
          index={index}
          onDelete={this.onDelete}
          />
        );
      })
    }
    return result;
  }
 
  render() {
    let {products}=this.props;
    // let {products}=this.state;
    
    return (
     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-info mb-10">
          <Link to="/product/add">
              Thêm Sản Phẩm
          </Link>
        </button>    
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
const mapDispatchToProps=(dispatch,props)=>{
  return{
    fetchAllProduct:()=>{
      dispatch(actFetchProductRequest());
    },
    onDeleteProduct:(id)=>{
      dispatch(actDeleteProductRequest(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);