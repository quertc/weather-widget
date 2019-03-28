# Simple weather widget

![Screenshot](https://github.com/quertc/weather-widget/blob/master/app/image/img.PNG)

## Description and installation

The project uses a simple **Gulp** build with a minimum of plugins as well as **SASS**.

**This project uses the [Dark Sky API](https://darksky.net/dev)**

Clone the repository and run the application:
```shell
npm i
npm start
```
After all these steps, you can run the application on [localhost:3000](http://localhost:3000/)


_Do not forget that the application worked correctly, you need:_

In the app/js/index.js on the first line assign a special [Dark Sky API](https://darksky.net/dev) key to the **APIKey** variable
```JavaScript
const APIKey = '';  // Enter the Dark Sky API secret key here
```