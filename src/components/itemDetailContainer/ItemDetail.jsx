import ItemCount from "../itemCount/ItemCount";

import "./itemDetail.css";

const ItemDetail = ({ name, description, price, category, image }) => {
  return (
    <div className="detailContenedor">
      <article className="articleContenedor">
        <div className="articleImage">
          <img src={image} alt={name} />
        </div>

        <section className="sectionContenedor">
          <header className="productTitle">
            <h3>{name}</h3>
          </header>

          <div className="sectionParrafo">
           <p>{category}</p>
           <p>{description}</p>
           <p>$ {price}</p>
          </div>

          <footer className="footerCount">
            <ItemCount stock={10} />
          </footer>
        </section>
      </article>
    </div>
  );
};

export default ItemDetail;
