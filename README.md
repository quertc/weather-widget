# Simple weather widget

![Screenshot](https://github.com/quertc/weather-widget/blob/master/preview.png)

## Description

The application uses the [Dark Sky API](https://darksky.net/dev) and Gulp to compile SASS into CSS with the addition of vendor prefixes. As well as ESLint for analyzing the code for errors.

### Installing

Download or clone the repository and run:

```cmd
npm i
npm start
```

_After that, the application will be available at [localhost:3000](http://localhost:3000/). Don't forget to specify the [Dark Sky API](https://darksky.net/dev/account) secret key in app/js/index.js on line 3:_

```javascript
const apiKey = ''; // Enter the Dark Sky API secret key here
```
