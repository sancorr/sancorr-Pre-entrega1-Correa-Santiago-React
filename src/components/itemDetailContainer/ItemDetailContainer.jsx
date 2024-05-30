import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../db/db.js';
import Loading from '../loaderComponent/Loading.jsx';



const ItemDetailContainer = () => {

  const [ product, setProduct ] = useState({})
  const [ loading, setLoading ] = useState(false)
  
  const { idProduct }= useParams()

  const getProduct = () => {
    const productRef = doc(db, "products", idProduct)
    setLoading(true)
    getDoc(productRef)
     .then((productDb)=> {
      const data = {id:productDb.id, ...productDb.data()}
      setProduct(data)
     })
     //informar este error para que no muestre algo que no existe
     .catch((err)=>console.log(err))
     .finally((productDb)=>setLoading(false))

  }

  useEffect( () => {

    getProduct() 
  }, [idProduct] )

  return (
    loading ? <Loading /> : <ItemDetail  {...product} />   
  )
}

export default ItemDetailContainer
