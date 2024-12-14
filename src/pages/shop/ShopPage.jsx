import React, { useEffect, useState } from 'react'
import  './shop.css'
import PRODUCT from './PRODUCT'

const URL = "http://localhost:8000/products"


export default function ShopPage() {
    const [product, setProduct] = useState([])




      async function getproducts() {
        const response = await fetch(URL)
        const information = await response.json()
        setProduct(information)
    }

    
     

      useEffect(() => {
        getproducts()
      },[])

      
      return (
        <div className='shop'>
        <div className='shopTitle'>
            <h1>Argen IPhone by shop</h1>
        </div>
        <div className='products'>{product.map((product) => {          
          return <PRODUCT key={product.id} data={product} /> 
        } )}

        </div>
    </div>
  )
}
