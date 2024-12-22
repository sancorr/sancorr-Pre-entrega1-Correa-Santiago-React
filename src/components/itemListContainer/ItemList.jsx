import Item from "./Item"
/* import './itemList.css' */
const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="col-12 col-sm-6 col-lg-3 mb-4">
          <Item product={product} />
        </div>
      ))}
    </>
  );
};

export default ItemList
