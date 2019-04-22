# mTravel
This website is designed to privide the user with the posibility to search for holiday destinations. Here, the users will find
their desired city, and will have the posibility to view their wanted points of interest.

#### CUSTOMER REQUEST

1. The customer wants the users to be able to find holiday destinations and points of interest. The search should be limited
to five countries:          
- **JAPAN**
- **USA**
- **BRASIL**
- **UK**
- **SOUTH AFRICA**

also, the user should be able to search for different countries, and for this the `All` option has been introduced.

2. The customer wants the user to be able to display points of interests individually:
- **HOTELS**
- **RESTAURANTS**
- **MUSEUMS**

3. The customer wants the users to be able to contact them if they have a request.

4. The customer wants the users to find some recommendations on the page.


## UX

This website is friendly, easy-to-use, and is made with responsive approach to provide the users with the best experience.

- as a user, I want to be able to search for destinations, and display them on a map for better visualisation
- as a user, I want to be able to display the results by category
- as a user, I want to be able to contact the company if a have any requirements
- as a user, I want to be able to find informations/ suggestions about a few destinations for better experience

## FEATURES

##### EXISTING FEATURES

- **_Searching on the map_** - allow users to search for their desired place.
- **_Autocomplete_** - allow user to receive predictions when they search for places, for a better experience.
- **_Country restriction_** - allow users to select a destination country before searching for a city. This is made to restrict predictions to the selected country, for a better experiece. Also, the user have the option to search for a place everywhere in the world by selecting `All`.
- **_Results by place type_** - allow user to filter the results by selecting the place type (e.g. `hotel`, `restaurant`, `museum`).
- **_Info window_** - allow users to find details about a place by selecting it.
- **_Contact form_** - allow users to contact the company for any information needed.
- **_Info buttons_** - allow users to find informations about five suggested cities.


#### FEATURES LEFT TO IMPLEMENT

- **_Live chat_** - this will allow the user to contact the company on much efficient way.
- **_Social websites_** - this will allow the user to see updates, offers, etc.
- **_Shop_** - this will allow the user to buy their holiday direct on the website.
- **_Flights_** - this will allow the user to search and book the flight for their holiday.


#### TECHNOLOGIES USED
  
**_[HTML5](https://en.wikipedia.org/wiki/HTML5)_** was used for structure![HTML5](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png) | **_[CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)_** was used to style the page ![CSS3](https://static.javatpoint.com/csspages/images/css-tutorial.png)  
---------------- | -------------   
**_[JavaScript](https://en.wikipedia.org/wiki/JavaScript)_** **was used for functionality**![JavaScript](http://res.cloudinary.com/vishnupadmanabhan/image/upload/v1488592010/js.jpg) | **_[jQuery](https://en.wikipedia.org/wiki/JQuery)_** **was used for DOM tree manipulation** ![jQuery](https://media.licdn.com/dms/image/C4D0BAQFQ7n6XOOr7_A/company-logo_200_200/0?e=2159024400&v=beta&t=3VwbFblPAIVV72trzOK_YXfMkkaACpgzg1rCxgG4J6Y)
**_[Bootstrap](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework))_** **was used for responsivity**![Bootstrap](http://nia.ecsu.edu/ur/1617/teams/mmt/imgs/bootstrap.png) | **_[Google Maps API](https://en.wikipedia.org/wiki/Google_Maps)_** **was used to create the map**   ![Google Maps](data:image/png;base64,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)
**_[Emailjs](http://www.emailjs.com/)_** **was used for the contact service**![emailjs](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5Gm29aHgBEFHXAwFS2RRi4sOyBFKDA49aouFDMnwiKd5sSHh) | **_[Jasmine](https://jasmine.github.io/)_** **was used for atomated tests**![jasmine](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZ02PvLmW4pjHVzmmUx2bHvf4jpGMfkGgJ1yaGh9ubqKohqsZ)

#### TESING

This project has been tested both manually and automatic:   
- manually:   
    - `search` field - click on the search field - type the desired place - press enter
    - `autocomplete` - click on the search field - start typing the desired place - it will start giving predictions - choose the desired one and press enter (or just click on it)
    > NOTE: by default, the map will get results only for USA. 
    
    - `change the country search` - click on the country selector - click on the desired contry or select `All` to search all around the world
    - `getting results` - once the steps mentioned above has been done, the map will start dropping markers - implicit for hotels
    - `switching to restaurants` - after the steps above check the `restaurant` button - it will change the markers on the map according to the requested button
    - `switching to museums` - after the steps above check the `museum` button - it will change the markers on the map according to the requested button
    - `getting place informations` - once the map display the markers, click on any of them - it will display informations ablut that place
    - `information buttons` - the website provides five buttons which gives some informations about the five selected cities - in order to see those informations simply hover the mouse over the button
    - `contact form` - click on the `contact`, on the navbar - it will display the contact form - try to submit an empty form - it won't work untill all fields are filled accordingly

- automated:
    - `Jasmine testing framework` was used to test the sendMail function

###### BROWSERS:

BROWSER | VERSION | COMPATIBILITY   
------------------- | ----------------- | ------
GOOGLE CHROME | _LATEST_ | **100%**
SAFARI | _LATEST_ | **100%**
MOZILLA FIREFOX | _LATEST_ | **100%**
SAFARI (mobile) | _LATEST_ | **90%**
ANDROID | _LATEST_ | **90%**


