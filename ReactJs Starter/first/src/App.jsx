import Desc from './Desc.jsx'

function App({ title, description, price = 0 }) {
  function handleClick() {
    console.log(`${title} selected`)
  }

  return (
    <article className="product-card">
      <h2>{title}</h2>
      <Desc description={description} />
      <p className="price">₹{Number(price).toLocaleString('en-IN')}</p>
      <button type="button" onClick={handleClick}>View product</button>
    </article>
  )
}

export default App
