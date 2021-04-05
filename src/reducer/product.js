const initialState=[
    {
        id:1,
        name:"IPhone  6 Plus",
        price:500,
        status:false,
    },
    {
        id:2,
        name:"Sam Sung Galaxy7",
        price:400,
        status:true,
    },
    {
        id:3,
        name:"Oppo mini 6",
        price:300,
        status:true,
    }
];
const products = (state=initialState,action)=>{
    switch (action.type) {
       
        default:
           return [...state];
    }
};
export default products;