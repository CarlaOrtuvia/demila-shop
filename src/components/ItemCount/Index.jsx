import React, {useState, useEffect} from 'react'
import './ItemCount.css'

const ItemCount = ({ initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial))
const decrease = () => {
    setCount(count - 1)
}
const increase = () => {
    setCount(count + 1)
}
useEffect(() => {
    setCount(parseInt(initial))
}, [initial])

  return (
    <div className='counter'>
        <button className='btn btn-success' disabled = {count <= 1} onClick={decrease}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success' disabled = {count >= stock} onClick={increase}>+</button>
        <div>
            <button disabled= {stock <= 0} onClick= {() => onAdd(count)} style={{fontFamily:'Kanit, sans-serif', fontSize:'25px', color: '#6cc4a1'}} >Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount