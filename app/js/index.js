/* global Skycons */

const APIKey = ''; // Enter the Dark Sky API secret key here

function setIcon(icon, iconID) {
  const skycons = new Skycons({ color: '#474747' });
  const currentIcon = icon.replace(/-/g, '_').toUpperCase();
  skycons.play();

  return skycons.set(iconID, Skycons[currentIcon]);
}

window.addEventListener('load', () => {
  const degree = document.querySelector('.temperature-box__degree');
  const description = document.querySelector('.weather-box__description');
  const timezone = document.querySelector('.weather-box__country');
  const errorText = document.querySelector('.weather-box__error');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const url = `${proxy}https://api.darksky.net/forecast/${APIKey}/${latitude},${longitude}`;

      async function main(api) {
        try {
          const response = await fetch(api);
          const data = await response.json();

          const { temperature, summary, icon } = data.currently;
          const celsius = Math.round((temperature - 32) * (5 / 9));

          degree.textContent = `${celsius}ºC`;
          description.textContent = summary;
          timezone.textContent = data.timezone;

          setIcon(icon, document.querySelector('.temperature-box__icon'));

          if (response.ok) {
            setTimeout(() => {
              document.querySelector('.weather-box').classList.add('done');
              document.querySelector('.weather-box__loader').classList.add('done');
            }, 500);
          }
        } catch (error) {
          errorText.textContent = 'An error occurred during the request.';

          document.querySelector('.weather-box__loader').classList.add('done');
          document.querySelector('.weather-box__error').style.display = 'block';
        }
      }

      main(url);
    }, error => {
      if (error.PERMISSION_DENIED) {
        errorText.textContent = 'You must have location enabled.';

        document.querySelector('.weather-box__loader').classList.add('done');
        document.querySelector('.weather-box__error').style.display = 'block';
      }
    });
  } else {
    errorText.textContent = 'Your browser doesn\'t support location!';

    document.querySelector('.weather-box__loader').classList.add('done');
    document.querySelector('.weather-box__error').style.display = 'block';
  }
});
