export async function getCountries() {
  try {
    const listCountries = await fetch("https://restcountries.com/v3.1/all");

    const countries = await listCountries.json();
    return countries;
  } catch (error) {
    return [];
  }
}

export async function getCountry(name) {
  try {
    const listCountry = await fetch(`https://restcountries.com/v3.1/name/${name}`);

    const country = await listCountry.json();
    return country;
  } catch (error) {
    return [];
  }
}