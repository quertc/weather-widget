# Simple weather widget
![Screenshot](https://github.com/quertc/weather-widget/blob/master/img.PNG)

## Description
This small project uses Gulp to compile SASS into CSS.  
**The application uses the [Dark Sky API](https://darksky.net/dev)**

### Installing
Download or clone the repository and run
```
npm install
npm run start
```

_After these commands, you can go to [localhost:3000](http://localhost:3000/) and test the application. But don't forget in app/js/index.js on the third line assign the value of the secret [Dark Sky API](https://darksky.net/dev) key to the **APIKey** variable, to make the application work correctly_
```JavaScript
const APIKey = '';  // Enter the Dark Sky API secret key here
```
