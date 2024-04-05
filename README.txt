This application is meant to keep track of the expiry dates for your company or your own parishable goods.

To build this application we used React.js, Firebase, and Bootstrap 5

npm packages installed:
    - npm i firebase
    - npm i react-router-dom
    - npm i date-fns
    - npm i quagga
    - npm i react-firebase-hooks
    - npm i react-modal


------------------------------------------------------------------
    Date Modified: April 05, 2024
------------------------------------------------------------------
- installed neccessary packages for this project
- created the skeleton of the project

This project will have the following Database Structure for product freshness management

STOCK DATABASE
--------------
--> has all products the store holds




STORE DATABASE
--------------
--> items that the store has in stock
	--> each product document has a nested DB with QTY, EXPIRY_DATE 