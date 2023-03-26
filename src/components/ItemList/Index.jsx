import React from 'react'
import Item from '../Item/Index'

const ItemList = ({data = []}) => {
  return (
    data.map(mila => <Item key={mila.id} info={mila}/>)
  )
}

export default ItemList