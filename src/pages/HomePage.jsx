import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="bg-bg-map-water bg-no-repeat bg-cover bg-center">
      <div className="container min-h-screen flex items-center justify-center">
        <Link className="linkBtn opacity-90" to='countries'>Load list of countries</Link>
      </div>
    </div>
  );
};

export default HomePage;