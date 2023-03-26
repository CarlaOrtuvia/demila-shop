import React, {useState, useEffect} from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import Title from '../Title/Index'

import ItemList from '../ItemList/Index'
import { useParams } from 'react-router-dom'




export const ItemListContainer = ({ texto }) => {

    const [data, setData] = useState([])

    const {categoriaId} = useParams()

    useEffect(() => {
     const querydb = getFirestore()
     const queryCollection  = collection(querydb, 'items')
    
    
      if(categoriaId){
     const queryFilter = query(queryCollection, where('category', '==', categoriaId))
    getDocs(queryFilter)
    .then(res => setData(res.docs.map(item =>({id: item.id, ...item.data() }))))
      }else{
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(item =>({id: item.id, ...item.data() }))))
       
      }
          
     
    }, [categoriaId])
    

   
  return (
    <>
     <Title greeting={texto}/>
   
    <ItemList data={data}/>
    
    </>
   
  )
}

export default ItemListContainer