import Desc from "./Desc"

function App({title, desc, price = 0}) {
  function clicker(){
    console.log("clicked")
  }
  return (
    <>
      <div style={}>
        <div>
          {title}
        </div>
        <div>
          {desc}
        </div>
        <div>
          {price}
        </div>
      </div>

      <Desc clicker = {clicker}/>
      
      <br />
      <br />
      <br />
     
    </>
  )
}

export default App
