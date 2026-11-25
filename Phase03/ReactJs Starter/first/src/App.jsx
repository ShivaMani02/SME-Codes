import Desc from "./Desc";

function App({ title, desc, price = 0 }) {
  const handleClick = () => {
    console.log(`${title} clicked!`);
  };

  return (
    <main>
      <h2>{title}</h2>
      <p>{desc}</p>
      <p>Price: ₹{price}</p>
      <Desc onAction={handleClick} />
    </main>
  );
}

export default App;
