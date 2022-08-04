# techBlog
## Description
### Project purpose was to create a tech blog where tech professionals can write their own posts about techs they love and enjoy. We were tasked to create a back-end and connect it ot eh front-end of the site and use node, sequelize, and handlebars together to create this site.
## User
### User should be able to view a page with tech posts on the dashboard. User can login/signup and once they have done so, can post their own tech posts on the site. User should also be able to delete or edit their post and site should remember their login once they exit out of the page.
## Technologies
### GitHub was used to clone a new repository onto a computer and was also used to deploy the website when edits where finished and final version needed to be deployed. Visual Studio Code was used to create JS, SQL, handlebar files and code from scratch. GitBash Terminal was used to git add/commit/push edits made from local repository onto GitHub to update respository.
## Setup
### Tools needed are GitHub to name and clone repository onto local computer/repository. GitBash Terminal should be installed and one can clone repository with either an SSH key or the HTML URL and with the command-git clone-and copying in the URL or SSH key, upload to Terminal-making sure they are not within another folder but in the main branch-and using the commands git add . (press enter) then git commit -m "detailed description of your edits" (press enter) then git push (press enter) and entering their SSH key if promted. 
### A new folder should be created and once Visual Studio Code is installed, open the new folder in VS and make new JS, SQL, and handlebar files if there is no starter code provided. Starter code folders should be copied onto your own repository. Run the commands npm init -y to get additional files needed (such as package.jon, gitignore, etc). Run npm i sequalize, and npm i express, npm i bcrypt, npm i connect-session-sequelize, npm i dotenv, npm i express-handlebars, npm i express-session and npm i mysql2 package from the mysql docs and once installed, run the command mysql -u root -p and enter your password once prompted. Afterward, in the terminal where mysql is loaded, initalize the database by running SOURCE db/schema.sql and then you can exit and return to the server.js where you can run node "name of your file".js to view data in the local port by going to your web browser and typing it "localhost:3000" or "3001" followed by a "/". Once all is installed, start coding and view all changes and progress made in the "Open Terminal" when you right click on the JS file and run node.
### GitBash Terminal is once again needed to updload edits made in your local repository onto GitHub-using the same commands of git add ./git commit -m/git push in order for the changes to be displayedyed and final push to be on heroku.
### Heroku was used to do a final deploy.
## Screenshot
### <img width="1128" alt="2022-08-04" src="https://user-images.githubusercontent.com/104933717/182972785-80be4a2e-d44f-49d9-817e-84c72370aeb4.png">
### <img width="1128" alt="2022-08-04 (1)" src="https://user-images.githubusercontent.com/104933717/182972811-f1484697-a6b3-4744-8bc7-75deefd591f1.png">
### <img width="1128" alt="2022-08-04 (2)" src="https://user-images.githubusercontent.com/104933717/182972829-1b4f5835-e7e0-4c2e-af30-beeadbd6c5b5.png">
## Deployed Link
### https://fathomless-oasis-95725.herokuapp.com/
## Status 
### techBlog is able to successfully display the dashboard with posts and is able to successfully login/sign up new and returnign users. Users are able to add their own posts and view it on the dashboard but unfortunetly, users are not able to update or delete their posts yet. techBlog is also not meeting the style requirments/mock up with navigation links/formatting and along with the delete/update, could be worked on in future work.
## Credits/Sources 
### Tutoring, WW3 Schools, TA's, Stack Overflow, Slack AskBot
