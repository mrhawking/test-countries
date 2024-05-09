export const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all?fields=name');

  if (!response.ok) {
    throw new Error('Error fetching countries')
  }

  const data = await response.json();
  return data;
};

export const fetchCountry = async (name) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,languages,capital,flags,population,region`);

  if (response.status == 404) {
    throw new Error('Page not found')
  }

  if (!response.ok) {
    throw new Error('Error fetching country')
  }

  const data = await response.json();
  return data;
};