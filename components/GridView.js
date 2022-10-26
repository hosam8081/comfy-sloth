import React from 'react'
import Product from './Product';
const GridView = ({products}) => {
  return (
    <div className='items-start md:flex mt-5 flex-wrap'>
      {
        products.map((product) => {
          return <Product key={product.id} {...product} />;
        })
      }
    </div>
  )
}

export default GridView