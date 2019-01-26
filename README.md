# friendFinder

The fiendFinder app is designed to be a match making site like tinder but for friends. Ever move to a new area, start a new job or just plain out looking to meet new people? The FriendFinder app is for you!

FriendFinder has a form that the user completes where they can add their name, upload a photo of themselves and answer 10 personality based questions to determine similarities between other friends. Once the form is completed, the answers to the questions (with a given rating of 1 - 5, where 5 is "strongly agree" and 1 is "strongly disagree") the app compares the results of other users that are stored. It takes the difference between each question, adds them up and the friend with the lowest score is matched. 


How does the app works from a technical perspective?

Front End 
The front end of the app was written in bootstrap. There is an initial landing page with a button that links to the survey and a few hyperlinks at the bottom for the source code and API data of the pre-populated friends. Once the survey button is clicked, the user is brought to the main part of the application

The survey page has a form that takes in user input for name, a picture and 10 dropdown boxes associated with 10 personality based questions. The submit button at the bottom has a click handler that records the answers, name field and picture fields with jQuery methods. There's also an ajax post call to grab the data from the final array and to pop up the modal. 

Back End
The backend has a html based routes page that basically call the local home & survey html files and route the user to the pages according to their browser. (/survey for the survey page and / for the homepage)

The main logic for the app is handled in the api routes file. 
First there is a double for loop to loop through each of the friends stored and to compare it against the new friend total score. The differences are then compared against each other to get the lowest value and that friend is passed to the front end modal for display.
