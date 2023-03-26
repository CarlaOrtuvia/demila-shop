import React, {useState} from 'react'
import { useCartContext } from '../../context/CartContext'
import './ItemDetail.css'
import ItemCount from '../ItemCount/Index'
import {Link} from 'react-router-dom'

const ItemDetail = ({ data }) => {

    const[goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext()

    const onAdd = (quantity) => {
        setGoToCart(true)
        addProduct(data, quantity)

    }

  return (
    <div className='container'style={{backgroundColor:'#f6e3c5'}}>
        <div className='detail'>
            <img className='image-detail' style={{width: '500px', marginLeft:'250px'}} src={data.Imagen} alt="" />
        </div>
        <div className='title-datail' style={{marginLeft: '270px'}}>
            <h1 style={{fontFamily:'Kanit, sans-serif', fontSize:'30px', color:'#4cacbc', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{data.title }</h1>
        </div>
        <div className='categories-detail'>
            <h4 style={{fontFamily:'Kanit, sans-serif', fontSize:'20px' }} >{data.category}</h4>
        </div>
        <div className='description-datail'>
            <h4 style={{fontFamily:'Kanit, sans-serif', fontSize:'15px'}}>{data.description}</h4>
        </div>
        <div className='price-detail'>
            <h5 style={{fontFamily:'Kanit, sans-serif', fontSize:'15px'}}>Precio:{data.price}</h5>
        </div>
        <div className='stock-detail'>
            <h5 style={{fontFamily:'Kanit, sans-serif', fontSize:'15px'}}>Stock:{data.stock}</h5>
        </div>
        <div>
            {
               goToCart
               ? <Link to='/cart'style={{fontFamily:'Kanit, sans-serif', fontSize:'28px', color:'#4cacbc', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} >FINALIZAR COMPRA</Link> 
               :<ItemCount initial={3} stock={5} onAdd={onAdd} /> 
            }
          
        </div>
    </div>
  )
}

export default ItemDetail