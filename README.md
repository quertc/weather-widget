# Simple weather widget

![Screenshot](https://github.com/quertc/weather-widget/blob/master/preview.PNG)

## Description

The application uses the [Dark Sky API](https://darksky.net/dev) and Gulp to compile SASS into CSS with the addition of vendor prefixes.

### Installing

Download or clone the repository and run

```bash
npm install
npm run start
```

_After these commands, the application will be available at [localhost:3000](http://localhost:3000/), but don't forget in app/js/index.js on the 3rd line to assign the value of the [Dark Sky API](https://darksky.net/dev) secret key to the variable "APIKey"._

```JavaScript
const APIKey = '';  // Enter the Dark Sky API secret key here
```
