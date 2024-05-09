import { useEffect, useState } from "react";
import LoadingIndicator from "./UI/LoadingIndicator";
import CountriesListItem from "./CountriesListItem";
import { fetchCountries } from "../http";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [fetchingError, setFetchingError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllCountries = async () => {
      setIsLoading(true);
      setFetchingError('')
      try {
        const countriesData = await fetchCountries();
        setCountries(countriesData);
        setIsLoading(false)
      } catch (error) {
        setFetchingError(error?.message || 'Fetching error')
        setIsLoading(false);
      }
    }
    fetchAllCountries();
  }, [])

  return (
    <>
      {isLoading && <LoadingIndicator />}
      {!isLoading && fetchingError && <h2>{fetchingError}</h2>}
      {!isLoading && !fetchingError && countries.length === 0 && (<h2>Список пуст</h2>)}
      {!isLoading && !fetchingError && countries.length > 0 && (
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-2">
          {countries.map(country => (
            <CountriesListItem key={country.name.common} countryName={country.name.common} />
          ))}
        </ul>
      )}
    </>
  );
};

export default CountriesList;