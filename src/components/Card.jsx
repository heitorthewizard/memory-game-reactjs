import './styles/Card.css'

function Card({item, id, handleOnClick}) {
  const itemClass = item.status ? " active " + item.status : ""
  return (
    <div className={"card" + itemClass} onClick={() => handleOnClick(id)}>
        <img src={item.img} />
    </div>
  )
}

export default Card