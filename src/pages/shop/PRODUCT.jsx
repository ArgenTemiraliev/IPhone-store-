import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context/Shop-context'

function PRODUCT(shopProduct) {
    const {id,productName, price,productImag} = shopProduct.data
    
    const { addToCort } = useContext(ShopContext)

  return (
    <div className='product'>
      <h3>ProductID {id}</h3>
        <img src={productImag.img} alt="" />
       <div className="discreption">
         <p>
            <b>{productName}</b>
        </p>
            <div className='informationProduct' >
                <span>
                       {/* <del>$1200</del> */}
                       <a className=' '>${price}</a>
                </span>
            </div>
       </div>
       <button className='addToCard' onClick={() => addToCort(id)} >add to card</button>
    </div>
  )
}

export default PRODUCT