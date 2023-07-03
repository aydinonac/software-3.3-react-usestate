import { useState } from 'react';
import React from 'react';

function refreshPage() { 
  window.location.reload(false);
}

function Counter() {
  const [product, setProduct] = useState({
    name: 'My Fruits order',
    count: 0,
    discount: 0,
    col: 'pink',
  });
  
  const handlerPlus = () => {
    setProduct(prev => {
      if (prev.count >= 5 && prev.count < 10) {
         prev.discount = 'Special 10'
         prev.col = 'yellow'
      };
      if (prev.count >= 10) {
          prev.discount = 'Star customer: 20'
          prev.col = '#ff66ff'
      };
      return {
        ...product,
        count:prev.count + 1,        
      };
      
    })
  }

  const handlerMinus = () => {
    setProduct(prev => {
      if (prev.count <= 11 && prev.count > 6) {
          prev.discount = 'Special 10'
          prev.col = 'yellow'
      };
      if (prev.count <= 6) {
          prev.discount = 0
          prev.col = 'pink'
      };
      if (prev.count < 1) {
          prev.name = 'Cannot be negative! Please try again'
          setTimeout(() => {refreshPage()}, 1500);
      }
      return {
        ...product,
        count:prev.count - 1
      };
    })
  }

    if (product.count < 0) {
      return (
        <h2 style={{color: 'red', background: '#eeeeee',
        padding: 20}}>{product.name}</h2>
      )
    }

    return (
    <>
      <h2 style={{
         background: '#eee', padding: 10,
         marginRight: 150, marginLeft: 150}}>
         {product.name}</h2>
      <img src = {require('./watermelons.png')}
      style={{width: 520, height: 60}}></img>
      <br/>
      <button onClick={handlerMinus}>-</button>
      <span >{product.count}</span>
      <button onClick={handlerPlus}>+</button>
      <button style={{
        width: 300, fontSize: 20, background: product.col
      }}>{product.discount} % discount</button>
      <br/>
      <button style={{
        width: 200, fontSize: 20, background: '#eee'}} 
        onClick={refreshPage}>Click to restart!</button>
    </>
  );
}
export default Counter;