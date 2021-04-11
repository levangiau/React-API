import React from "react";
import { Link } from "react-router-dom";
import {actCreateProductRequest,actGetProductRequest,actUpdateProductRequest} from "./../../action";
import {connect} from "react-redux";
//
class ProductActionPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      name:'',
      price:'',
      checkbox:false,
    }
  }
  componentDidMount(){
    let {match} = this.props;
    if(match){
      let id = match.params.id;
      // callApi("GET",`products/${id}`,null).then(res=>{
      //   this.setState({
      //     id: res.data.id,
      //     name:res.data.name,
      //     price:res.data.price,
      //     checkbox:res.data.status,
      //   })
      // })
      this.props.onEditProduct(id);
    }
  }
  componentWillReceiveProps(nextprops){
    if(nextprops && nextprops.itemEditing){
      this.setState({
        id:nextprops.itemEditing.id,
        name:nextprops.itemEditing.name,
        price:nextprops.itemEditing.price,
        checkbox:nextprops.itemEditing.status,
      })
    }
  }

  onChange=(event)=>{
    let target = event.target;
    let name = target.name;
    let value = target.type === 'checkbox'? target.checked : target.value;
    this.setState({
      [name]:value
    })
  }
  onSubmit=(event)=>{
    event.preventDefault();
    let {id,name,price,checkbox}= this.state;
    let product={
      id,
      name,
      price,
      status:checkbox
    }
    let {history} = this.props;
    // console.log(this.state);
    if(id){
      // callApi('PUT',`products/${id}`,{
      //   name,
      //   price,
      //   status:checkbox,
      // }).then(res=>{
      //   history.goBack();
      // });
      this.props.onUpdate(product);
      history.goBack();
    }else{
      // callApi('POST','products',{
      //   name,
      //   price,
      //   status:checkbox,
      // }).then(res=>{
      //   history.goBack(); // thuộc tính này dùng để quay trở lại trang trước đó.
      // });
      this.props.onCreate(product);
      history.goBack();
    }
  }
  render() {
    let {name,price,checkbox} =this.state;
    return (
    
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Tên sản phẩm:</label>
            <input 
            type="text" 
            className="form-control" 
            name="name"
            value={name}
            onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá:</label>
            <input 
            type="number" 
            className="form-control" 
            name="price"
            value={price}
            onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trạng Thái:</label>
            
            <div className="checkbox">
              <label>
                <input 
                type="checkbox" 
                name="checkbox"
                value={checkbox}
                 onChange={this.onChange}
                 checked={(checkbox === 'true' || checkbox === true)? true:false}
                />
                Còn hàng
              </label>
            </div>
            
          </div>
          <Link to="/product-list" className="btn btn-danger mr-10">
            Trở lại
          </Link>
          <button type="submit" className="btn btn-primary">Lưu</button>
        </form>
        
      </div>
    </div>
    
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    itemEditing:state.itemEditing
  }
}
const mapDispatchToProps=(dispatch,props)=>{
  return{
    onCreate:(product)=>{
      dispatch(actCreateProductRequest(product))
    },
    onEditProduct:(id)=>{
      dispatch(actGetProductRequest(id))
    },
    onUpdate:(product)=>{
      dispatch(actUpdateProductRequest(product))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);