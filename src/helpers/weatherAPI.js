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

export const getWeatherByCity = async (cityURL) => {
  const searchUrl = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`;
  const urlFinded = await fetch(searchUrl);
  const data = await urlFinded.json();
  return {
    name: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    url: cityURL,
  };
};

export const getWeatherByWeek = async (cityURL) => {
  const searchUrl = `http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${token}&q=${cityURL}&days=7`;
  const weekUrl = await fetch(searchUrl);
  const resWeek = await weekUrl.json();
  const findForecast = resWeek.forecast.forecastday;
  const objWeekDays = await findForecast.map((elem) => {
    return {
      date: elem.date,
      minTemp: elem.day.mintemp_c,
      maxTemp: elem.day.maxtemp_c,
      condition: elem.day.condition.text,
      icon: elem.day.condition.icon,
    };
  });
  return objWeekDays;
};
