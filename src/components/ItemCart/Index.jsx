import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './ItemCart.css'

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext()
  return (
    <div className='itemCart'>
        <img src={product.Imagen} alt={product.title} />
        <div>
            <p style={{fontFamily: 'Kanit, sans-serif'}}>Titulo: {product.title}</p>
            <p style={{fontFamily: 'Kanit, sans-serif'}} >Cantidad: {product.quantity}</p>
            <p style={{fontFamily: 'Kanit, sans-serif'}} >Precio u.: {product.price}</p>
            <p style={{fontFamily: 'Kanit, sans-serif'}} >Subtotal:${product.quantity * product.price}</p>
            <button className='btn btn-success'style={{fontFamily: 'Kanit, sans-serif'}} onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart