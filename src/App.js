
import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Products from './components/Products/Products';

import {Products, Navbar} from './components';
const dummyProduct = [
  {id:1, name:'Shoes', description:'running shoes', price:'$5', src:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-female-shoes-on-feet-royalty-free-image-912581410-1563805834.jpg'},
  {id:2, name:'Macbook', description:'Apple macbook', price:'$10', src:'https://www.matichon.co.th/wp-content/uploads/2019/11/macbook-pro.jpg'}
]
function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] =  useState([])

  // const fetchProducts = async () => {
  //   const {data} = await commerce;
  //   setProducts(data)
  // }
  const handleAddToCart = (newItemId, newItemAmount) => {
    var found = false
    const tempCart = []
    var i;
    var amount = 0;
    for(i=0; i<cart.length; i++){
      if(cart[i].id === newItemId){
        amount = cart[i].amount + newItemAmount
        found = true
      }
      else{
        amount = cart[i].amount
      }
      tempCart.push({id:cart[i].id, amount:amount})
    }
    if (!found){
      tempCart.push({id:newItemId, amount:newItemAmount})
    }
    setCart(tempCart)
  }

  // const onAddToCart((newItem)=>{
  //   cart.map((item) => (
  //     if item.id === newItem.id
  //   )
  // })

  useEffect(() =>{
    // fetchProducts();
    setProducts(dummyProduct)
  },[])
  return (
    <div className="App">
      <Navbar />
      <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
  );
}

export default App;
