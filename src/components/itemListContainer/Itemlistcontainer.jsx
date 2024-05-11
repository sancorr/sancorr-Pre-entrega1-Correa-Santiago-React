import { useEffect, useState } from 'react';
import getProducts from '../../data/data';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

import './itemlistcontainer.css'

const Itemlistcontainer = (prop) => {
  const { greeting } = prop
  
  const [ products, setProducts ] = useState([])

  const { idCategory } = useParams()
  

  useEffect(() => {
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
      console.log("Finalizo la promesa");
    })

  }, [ idCategory ])

  return (
    <div className="itemListContainer" >
      <h1 className="titleListContainer">{greeting}</h1>
      <ItemList products = {products} />
      
    </div>
  )
}

export default Itemlistcontainer
