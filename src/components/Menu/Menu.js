import React from "react";
import {Route,Link} from "react-router-dom";
const menus=[
  {
    name:'Trang Chủ',
    to:'/',
    exact:true,
  },
  {
    name:'Danh Sách Sản Phẩm',
    to:'/product-list',
    exact:false,
  }
];

const MenuLink=({label,to,activeOnlyWhenExact})=>{
 return(
   <Route
   path={to}
   exact={activeOnlyWhenExact}
   children={({match})=>{
     let active = match?'active':'';
     return(
       <li className={`menu-li ${active}`}>
         <Link to={to} >{label}</Link>
       </li>
     );
   }}
   />
 );
};

//
class Menu extends React.Component {
  showMenus=(menus)=>{
    let result=null;
    if(menus.length >0){
      result = menus.map((menu,index)=>{
        return(
          <MenuLink
          key={index}
          label={menu.name}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
          />
        );
      })
    }
    return result;
  }
  render() {
    return (
    <div className="menu">  
      <div className="navbar navbar-default">
        <a className="navbar-brand" href="#a">Call Api</a>
        <ul className="nav navbar-nav">
          {this.showMenus(menus)}
        </ul>
      </div>
    </div>
    );
  }
}
export default Menu;