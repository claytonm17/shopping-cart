import { useRouteError, Link } from "react-router-dom"

function ErrorPage() {

    const error = useRouteError()


    return (
    <>
         <p>Oops, it appears there was an error</p>
         <p>{error.statusText || error.message}</p>
        <Link to="/"><button className="border-gray-700 border-2 p-4">Home</button></Link>
    </>
  )
}

export default ErrorPage