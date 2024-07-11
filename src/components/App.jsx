import { Link } from "react-router-dom"
import Card from "./Card"

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">Homepage</h1>
      <Link to="store"><button className="border-gray-700 border-2 px-4 py-1">Store</button></Link>
      <Link to="cart"><button className="border-gray-700 border-2 px-4 py-1">Cart</button></Link>
      <br />
      <Card />
    </>
  )
}

export default App
