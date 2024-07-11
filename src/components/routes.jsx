import App from '../components/App'
import Shop from '../components/Store'
import Cart from '../components/Cart'
import ErrorPage from '../components/ErrorPage'

const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
    {
      path: "cart",
      element: <Cart />
    }
]

export default routes