# Simple weather widget
![Screenshot](https://github.com/quertc/weather-widget/blob/master/app/image/img.PNG)

### Description and installation
This project uses a simple Gulp build to compile SASS into CSS.  
**The app works using the [Dark Sky API](https://darksky.net/dev)**

1. Download or clone the repository

	```
	git clone https://github.com/quertc/weather-widget.git
	cd weather-widget
	```
2. Install Dependencies

	```
	npm i
	```
3. Run the app

	```
	npm start
	```
  
After all these steps, you can run the application on [localhost:3000](http://localhost:3000/)

.

_Do not forget that the application worked correctly, you need:_  
In the app/js/index.js on the first line assign a special [Dark Sky API](https://darksky.net/dev) key to the **APIKey** variable
```JavaScript
const APIKey = '';  // Enter the Dark Sky API secret key here
```
