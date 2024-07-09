import { Link } from "react-router-dom"

function Shop() {

    return (
      <>
        <h1 className="text-3xl font-bold underline">Shop</h1>
        <Link to="/">Home</Link>
        <Link to="cart">Cart</Link>
      </>
    )
  }
  
  export default Shop
  