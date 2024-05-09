import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingIndicator from "./UI/LoadingIndicator";
import { fetchCountry } from "../http";

const CountryItem = ({ countryName }) => {
  const [country, setCountry] = useState(null);
  const [fetchingError, setFetchingError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSingleCountry = async () => {
      setIsLoading(true);
      setFetchingError('')
      try {
        const countryData = await fetchCountry(countryName);
        const { name, capital, flags, population, region } = countryData[0];
        setCountry({
          population,
          region,
          name: name.common,
          capital: capital[0],
          img: flags.png,
        })
        setIsLoading(false)

      } catch (error) {
        setFetchingError(error?.message || 'Fetching error')
        setIsLoading(false);
      }
    }
    fetchSingleCountry();
  }, [countryName])

  return (
    <>
      {isLoading && <LoadingIndicator />}
      {!isLoading && fetchingError && <h2 className="title">{fetchingError}</h2>}
      {!isLoading && !fetchingError && country && (
        <div className="p-8 border-2 rounded-2xl border-sky-700 mb-5">
          <h2 className="title">{country.name}</h2>
          <div className="h-[176px] mb-5">
            <img className="block m-auto max-h-full object-contain" src={country.img} alt={country.name} />
          </div>
          <dl>
            <dt className="subtitle">Capital</dt>
            <dd className="text">{country.capital}</dd>
            <dt className="subtitle">Region</dt>
            <dd className="text">{country.region}</dd>
            <dt className="subtitle">Population</dt>
            <dd className="text">{country.population} people</dd>
          </dl>
        </div>
      )}
      {!isLoading && <Link to="/countries" className="linkBtn text-xl">Back to list of countries</Link>}
    </>
  );
};

export default CountryItem;