const APIKey = '';  // Enter the Dark Sky API secret key here

window.addEventListener('DOMContentLoaded', () => {
  let latitude;
  let longitude;
  let degree = document.querySelector('.degree');
  let description = document.querySelector('.description');
  let timezone = document.querySelector('.country');
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {     
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/${APIKey}/${latitude},${longitude}`;

      async function main(api) {
        try {
          let response = await fetch(api);
          let data = await response.json();

          let {temperature, summary, icon} = data.currently;

          let celsius = Math.round((temperature - 32) * (5 / 9));
  
          degree.textContent = `${celsius}ºC`;
          description.textContent = summary;
          timezone.textContent = data.timezone;
          setIcon(icon, document.querySelector('.icon'));

          if (response.ok) {
            setTimeout(() => {
              document.querySelector('.weather-box').classList.add('done');
              document.querySelector('.weather-box .loader').classList.add('done');
            }, 1000); 
          };

        } catch(error) {
          document.querySelector('.weather-box .loader').classList.add('done');
          document.querySelector('.error-log').style.display = 'block';
          console.error(error);
        };
      };

      main(api);
    
    }, error => {
      if(error.PERMISSION_DENIED) {
        document.querySelector('.weather-box .loader').classList.add('done');
        document.querySelector('.error').style.display = 'block';
      };
      
      console.error(error);
    });
  } else {
    alert('Your browser does not support location!');
  };

  function setIcon(icon, iconID) {
    const skycons = new Skycons({color: '#474747'});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  };
});
