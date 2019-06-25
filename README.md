# Simple weather widget
![Screenshot](https://github.com/quertc/weather-widget/blob/master/img.PNG)

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
	npm run start
	```
  
After all these steps, you can run the application on [localhost:3000](http://localhost:3000/)

.

_Do not forget that the application worked correctly, you need:_  
In the app/js/index.js on the third line, set the **APIKey** variable to the value of your special key [Dark Sky API](https://darksky.net/dev)
```JavaScript
const APIKey = '';  // Enter the Dark Sky API secret key here
```
