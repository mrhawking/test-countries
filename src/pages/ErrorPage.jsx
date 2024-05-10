import Button from "../components/UI/Button";

const ErrorPage = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <p className="title">Oooops! It seems you are lost!</p>
      <Button url='/'>Home</Button>
    </div>
  );
};

export default ErrorPage;