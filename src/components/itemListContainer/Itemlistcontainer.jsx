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
  const [error, setError] = useState(null);

  const [ loading, setLoading ] = useState(false)

  const { idCategory } = useParams()


  const getProducts = ()=>{
    const productsRef = collection(db,"products")
    setLoading(true)
    setError(null)

    getDocs(productsRef)
    //Error simulado para comprobar su manejo.
     //Promise.reject(new Error(error))
     .then((productsDb)=> {
      const data = productsDb.docs.map((product)=>{
        //se le da formato a la dat recibida de la base de datos
        return { id: product.id, ...product.data()}
      })
      setProducts(data)
     })
     .catch((err) => {
      console.error("Error fetching products:", err);
      setError("Ha ocurrido un error mientras intentamos mostrarle los productos. Por favor, intente de nuevo más tarde.")
    })
     .finally(()=>setLoading(false))

  }

  const getProductsByCategory = ()=>  {
    const productsRef = collection(db,"products")
    setLoading(true)
    setError(null)

    const q = query(productsRef, where("category", "==", idCategory))
    getDocs(q)
     .then((productsDb)=> {
      //se le da formato a la dat recibida de la base de datos
      const data = productsDb.docs.map((product)=>{
        //se le da formato a la dat recibida de la base de datos
        return { id: product.id, ...product.data()}
      })
      setProducts(data)
     })
     //esto deberia informar al usuario
     .catch((err) => {
      console.error("Error fetching products by category:", err)
      setError("Ha ocurrido un error mientras intentamos mostrarle los productos. Por favor, intente de nuevo más tarde.")
    })
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
    <div className="itemListContainer">
      <h1 className="titleListContainer">
        {idCategory ? <BreadCrumb idCategory={idCategory} /> : 'Bienvenidos!'}
      </h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <div> {error}</div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  )
}

export default Itemlistcontainer
