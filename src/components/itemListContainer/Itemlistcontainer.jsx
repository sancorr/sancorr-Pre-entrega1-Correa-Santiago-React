import './itemlistcontainer.css'

const Itemlistcontainer = (prop) => {
    const { greeting } = prop
  return (
    <div>
      <h1 className="titleListContainer">{greeting}</h1>
    </div>
  )
}

export default Itemlistcontainer
