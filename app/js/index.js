/* global Skycons */

const apiKey = ''; // Enter the Dark Sky API secret key here

function setIcon(icon, iconID) {
  const skycons = new Skycons({ color: '#474747' });
  const currentIcon = icon.replace(/-/g, '_').toUpperCase();
  skycons.play();

  return skycons.set(iconID, Skycons[currentIcon]);
}

const loader = document.querySelector('.weather-widget__loader');
const timezone = document.querySelector('.weather-widget__country');
const degree = document.querySelector('.weather-widget__temperature-degree');
const description = document.querySelector('.weather-widget__description');
const error = document.querySelector('.weather-widget__error');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const uri = `${proxy}https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`;

    async function main(api) {
      try {
        const response = await fetch(api);
        const data = await response.json();

        const { temperature, summary, icon } = data.currently;
        const celsius = Math.round((temperature - 32) * (5 / 9));

        timezone.textContent = data.timezone;
        degree.textContent = `${celsius}ºC`;
        description.textContent = summary;

        setIcon(icon, document.querySelector('.weather-widget__temperature-icon'));

        if (response.ok) {
          setTimeout(() => {
            document.querySelector('.weather-widget').classList.add('weather-widget_done');
            loader.classList.add('weather-widget__loader_done');
          }, 500);
        }
      } catch (e) {
        error.textContent = 'An error occurred during the request.';

        loader.classList.add('weather-widget__loader_done');
        error.style.display = 'block';
      }
    }

    main(uri);
  }, e => {
    if (e.PERMISSION_DENIED) {
      error.textContent = 'You must have location enabled.';

      loader.classList.add('weather-widget__loader_done');
      error.style.display = 'block';
    }
  });
} else {
  error.textContent = 'Your browser doesn\'t support location!';

  loader.classList.add('weather-widget__loader_done');
  error.style.display = 'block';
}
