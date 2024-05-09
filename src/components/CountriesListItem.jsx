import { Link } from "react-router-dom";

const CountriesListItem = ({ countryName }) => {
  return (
    <li className="border rounded-md border-sky-700">
      <Link to={countryName} className="p-5 text-lg font-medium w-full hover:bg-sky-100 focus-visible:bg-sky-100 active:bg-sky-200">{countryName}</Link>
    </li>
  );
};

export default CountriesListItem;