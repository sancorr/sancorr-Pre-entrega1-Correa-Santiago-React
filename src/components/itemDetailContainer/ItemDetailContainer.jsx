import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../db/db.js';
import Loading from '../loaderComponent/Loading.jsx';
import { Link } from 'react-router-dom';




const ItemDetailContainer = () => {

  const [ product, setProduct ] = useState({})
  const [ loading, setLoading ] = useState(false)
  //manejo de error en URL o al no encontrar producto
  const [error, setError] = useState(null);
  
  const { idProduct }= useParams()

  const getProduct = () => {
    const productRef = doc(db, "products", idProduct)
    setLoading(true)
    setError(null)

    getDoc(productRef)
     .then((productDb)=> {
      //manejo de error en URL o al no encontrar producto
      if(productDb.exists()){

        const data = {id:productDb.id, ...productDb.data()}
        setProduct(data)
      } else{
        throw new Error("Ups... Producto no encontrado")
      }
     })
     //manejo de error en URL o al no encontrar producto
     .catch((err)=>setError(err.message))
     .finally((productDb)=>setLoading(false))

  }

  useEffect( () => {

    getProduct() 
  }, [idProduct] )

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <div>
          <h2>
           {error}
          </h2>
          <Link to="/">Volver al home</Link>
        </div>
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
      
  )
}

export default ItemDetailContainer
