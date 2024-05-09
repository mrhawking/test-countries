import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <p className="title">Oooops! It seems you are lost!</p>
      <Link to='/' className="linkBtn">Home</Link>
    </div>
  )
};

export default ErrorPage;