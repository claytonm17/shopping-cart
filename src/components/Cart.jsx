import { Link } from "react-router-dom"

function Cart() {

    return (
      <>
        <h1 className="text-3xl font-bold underline">Cart</h1>
        <Link to="/">Home</Link>
        <Link to="store">Store</Link>
      </>
    )
  }
  
  export default Cart
