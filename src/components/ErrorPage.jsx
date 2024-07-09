import { useRouteError, Link } from "react-router-dom"

function ErrorPage() {

    const error = useRouteError()


    return (
    <>
         <p>Oops, it appears there was an error</p>
         <p>{error.statusText || error.message}</p>
        <Link to="/">Home</Link>
    </>
  )
}

export default ErrorPage