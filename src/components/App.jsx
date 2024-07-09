import { Link } from "react-router-dom"

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">Homepage</h1>
      <Link to="shop">Shop</Link>
      <Link to="cart">Cart</Link>
    </>
  )
}

export default App
