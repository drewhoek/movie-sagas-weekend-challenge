# React

Description
Duration: 3 days

This project is a React feedback submission form. It allows a user to submit feedback similar to how us current EDA students do in the assignment portal. This app uses React RouterDOM to navigate through the different pages of the feedback form. The app begins on the start page which will lead to the beginning of the form once start is clicked. The user can then submit there feedback in the form of a number and press next to get to the next form. The current version of the app requires a value in the inputs to move on besides the comments portion. However a user can press the start over button and be brought back to the start page to submit their answers again.

Once all of the feedback is gathered you are able to review your choices on the review page. When clicking submit a POST request will send the data to the database. This will redirect you to a page that says the data has been submitted correctly and users have the option to click the add more feedback button to restart the process once again.

Prerequisites
Node.js
Express
App to run your database, Postico was used for this project
React
Installation
Run npm install
Run the command npm server and the server will start
Run the command npm run client and the client will boot up and bring you to the page
Usage
At the start page select start to begin giving feedback
Enter all needed information and select next once finished
Once at the review page, review choices and select submit if done or start over if you would like to edit the info
Data is sent to the database and stored
Built With
Javascript
React
Node.js
Express
HTML
CSS
SQL for database
Acknowledgement
Thanks to Blaine and Mason for the great instruction on React this week!
