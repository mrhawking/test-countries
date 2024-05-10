import Button from "../components/UI/Button";

const HomePage = () => {
  return (
    <div className="bg-bg-map-water bg-no-repeat bg-cover bg-center">
      <div className="container min-h-screen flex items-center justify-center">
        <Button url="countries" className="opacity-90">Load list of countries</Button>
      </div>
    </div>
  );
};

export default HomePage;