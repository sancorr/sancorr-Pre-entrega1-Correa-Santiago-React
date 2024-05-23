import { useEffect, useState } from 'react';
import getProducts from '../../data/data';
import ItemList from './ItemList';
import Loading from '../loaderComponent/Loading';
import { useParams } from 'react-router-dom';

import './itemlistcontainer.css'

const Itemlistcontainer = () => {
  
  
  const [ products, setProducts ] = useState([])

  const [ loading, setLoading ] = useState(false)

  const { idCategory } = useParams()
  

  useEffect(() => {
    //mostrar loading
    setLoading(true)
    //consumir la promesa
    getProducts()
    .then((respuesta)=>{
      if (idCategory) {
        const productsFilter = respuesta.filter( (productRes) => productRes.category === idCategory )
        setProducts(productsFilter);
      } else {
        setProducts(respuesta);
      }
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{
      //ocultar loading
      setLoading(false)
      console.log("Finalizo la promesa");
    })

  }, [ idCategory ])

  return (
    <div className="itemListContainer" >
     
      <h1 className="titleListContainer">{ idCategory ? `${idCategory}` : 'Bienvenidos a mi ecommerce'}</h1>
            
      {
        loading ? <Loading /> : <ItemList products = {products} />
      }
      
      
    </div>
  )
}

export default Itemlistcontainer
