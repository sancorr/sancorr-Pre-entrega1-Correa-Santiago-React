import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Loading from '../loaderComponent/Loading';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import BreadCrumb from './BreadCrumb.jsx';
import db from '../../db/db.js';


import './itemlistcontainer.css'

const Itemlistcontainer = () => {
  
  
  const [ products, setProducts ] = useState([])

  const [ loading, setLoading ] = useState(false)

  const { idCategory } = useParams()

  //funcion para mostrar el objeto apropiadamente desde la base de datos (itemListContainer)
 const showObject = (arr)=> {

  const data = arr.docs.map((product)=>{
    //se le da formato a la dat recibida de la base de datos
    return { id: product.id, ...product.data()}
  })
  setProducts(data)
}
 

  const getProducts = ()=>{
    const productsRef = collection(db,"products")
    setLoading(true)
    getDocs(productsRef)
     .then((productsDb)=> {
      showObject(productsDb)
     })
     //Esto deberia informar al usuario
     .catch((err)=> console.log(err))
     .finally(()=>setLoading(false))

  }

  const getProductsByCategory = ()=>  {
    const productsRef = collection(db,"products")
    setLoading(true)
    const q = query(productsRef, where("category", "==", idCategory))
    getDocs(q)
     .then((productsDb)=> {
      //se le da formato a la dat recibida de la base de datos
      showObject(productsDb)
     })
     //esto deberia informar al usuario
     .catch((err)=> console.log(err))
     .finally(()=> setLoading(false))
  }

  useEffect(() => {
    
    if (idCategory) {
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [ idCategory ]);

  return (
    <div className="itemListContainer" >
     
      <h1 className="titleListContainer">{ idCategory ? `${idCategory}` : 'Bienvenidos!'}</h1>
            
      {
        loading ? <Loading /> : <ItemList products = {products}/>
      }
      
      
    </div>
  )
}

export default Itemlistcontainer
