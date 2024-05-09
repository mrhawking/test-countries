import { useParams } from "react-router-dom"
import CountryItem from "../components/CountryItem";

const CountryPage = () => {
  const { countryId } = useParams();

  return (
    <div className="container text-center">
      <CountryItem countryName={countryId} />
    </div>
  );
};

export default CountryPage;