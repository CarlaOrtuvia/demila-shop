import React from 'react'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import ItemCart from '../ItemCart/Index'
import { getFirestore, addDoc, collection } from 'firebase/firestore'

const Cart = () => {
  const { cart, totalPrice } = useCartContext()

  const order = {
    buyer: {
      name:'Carla',
      email:'carlitaortivia@gmail.com',
      phone: '324232526',
      address: 'cerro tolosa 1254'
    },
    items: cart.map(product=> ({ id: product.id, title: product.title, price: product.quantity })) ,
    total: totalPrice() ,
  }

  const handleClick = () => {
  const db = getFirestore()
  const ordersCollection = collection(db, 'orders')
  addDoc(ordersCollection, order)
  .then(({ id }) => console.log(id))
  }


  if(cart.length === 0){
    return(
      <>
      <p style={{fontFamily:'Kanit, sans-serif', fontSize:'30px', color:'#4cacbc', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} >No hay elementos en el carrito</p>
      <Link to='/'style={{fontFamily:'Kanit, sans-serif', fontSize:'30px', color:'#4cacbc', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Ir a Comprar</Link>
      </>
    )
  }
  return (
    <>
    {
      cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <p style={{fontFamily: 'Kanit, sans-serif', fontSize:'30px', color:'#4cacbc', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
      Total: $ {totalPrice()}
    </p>
    <button className='btn btn-success'style={{fontFamily: 'Kanit, sans-serif'}} onClick={handleClick}>Generar Compra</button>
    </>
  )
}

export default Cart