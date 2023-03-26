import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'


const Item = ({ info }) => {

  return (
    
    <Link to={`/detail/${info.id}`} className='producto'>
      <img style={{width: '20rem', margin: '.5rem'}} src={info.Imagen} alt="" />
      <p style={{fontFamily: 'Kanit , sans-serif', fontSize: '15px', marginLeft: '10px', marginTop: '5px'}}>{info.title}</p>
    
    </Link>
 
    
      
    
  )
}

export default Item
