import CountriesList from "../components/CountriesList";

const CountriesPage = () => {
  return (
    <section>
      <div className="container text-center">
        <h1 className="title">List of countries</h1>
        <CountriesList />
      </div>
    </section>
  );
};

export default CountriesPage;