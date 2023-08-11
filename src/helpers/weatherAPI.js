const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const searchUrl = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`;
  try {
    const fetchCitie = await fetch(searchUrl);
    const data = await fetchCitie.json();
    if (data.length === 0) {
      window.alert('Nenhuma cidade encontrada');
    }
    return data;
  } catch (error) {
    throw error.messege;
  }
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
