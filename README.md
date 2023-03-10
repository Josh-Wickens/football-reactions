# **Football Reactions**

### [Click here to see deployed project](https://football-reactions-uk.herokuapp.com/) 
___

- Deployed API [link](https://football-reactions.herokuapp.com/)
- Deployed Frontend [link](https://football-reactions-uk.herokuapp.com/)
- API Backend [repository](https://github.com/Josh-Wickens/fr-drf-api)
- API Frontend [repository](https://github.com/Josh-Wickens/football-reactions)
- [User Story board](https://github.com/users/Josh-Wickens/projects/4)

Football Reactions is the perfect place for football fans to come together on one platform and speak exclusively about football. Users can state whether they are a fan or a club, and then create posts or join in conversations regarding certain football topics. They can also communicate together and share their opinions through the like and comment functionality. This repository is the frontend of Football Reactions.

![Responsive image](/src/assets/responsive.png)

# Contents

1. [UX](#UX)
2. [Design](#design)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Bugs and Fixes](#bugs-and-fixes)
6. [Testing](#Testing)
7. [Deployment](#deployment)
8. [Credits and Acknowledgements](#credits)
___
# UX

## Purpose
___

- The purpose of this site is to create a social platform for football fans to communicate exclusively about football and its surrounding topics. Usually, on social media platforms, users are required to search for certain groups to discuss their favourite football topics, whereas Football Reactions is a site that users can visit to solely discuss this. They no longer need to search and filter for their football conversations, they can just sign in and interact immediately.

## Site Goals
___

- The site goal is to create a space where football fans can visit and have in-depth discussions surrounding their favourite football topics. They have the option to post themselves, as well as interact with posts from other users. It's a platform to exclusively discuss football whilst avoiding other topics altogether.

## Current User Goals
___

- Current users are able to post their thoughts on the site for all users to see, so that other current users can comment back and discuss their thoughts or questions. They can also set a profile to describe the fan or club that they are so that users can decipher who everyone is and their football interests. Current users are able to what is currently trending in the football world by having access to everyones posts on the homepage.

## New User Goals
___

- New users goals are to encourage users to sign up and feel like they are in a safe space to talk anything football as that is the sole purpose of the site. 

## Future Goals
___

- To implement a direct messaging service so that users can have private conversations with other users.
- To add more topics based on popular subjects users are discussing or bringing up.
- An area for clubs only to access and discuss things with other clubs and vice versa with fans.
- An area for transfer listings so that clubs can see who clubs have up for sale. This will be especially useful for clubs who are lower down in the divisions and don't have the resources for scouting.

## Audience
___

The target audience for Football Reactions are:

- Football lovers.
- Football clubs, players and fans.
- Football club owners who want to hear the opinion of their fans.
- People who enjoy talking about football online.
- People who like stating their football opinions and join in debates.

## User Stories
___
- Here is a link to my user stories project on GitHub [Link](https://github.com/users/Josh-Wickens/projects/4)

- I also used a website called Asana to do my User Stories. I found the platform easier to work with and to stay on track, as it provides a schedule with due dates.

![Asana Start of Project](/src/assets/asana-start.png)
![mock diagram and ideas 1](/src/assets/asana-middle.png)
![mock diagram and ideas 1](/src/assets/asana-end.png)
___
# Design

## Ideas and Mock diagrams
___

- Below are a couple of my initial design and thoughts regarding the planning of my project. I did not proceed with all of these ideas or mocks, but helped me with the initial planning and design aspect.

![mock diagram and ideas 1](/src/assets/planning-1.png)
![mock diagram and ideas 2](/src/assets/planning-2.jpg)

## Wireframes
___

- My wireframes was done using Justinmind. Screenshots can be seen below. Some modifications were made during development as extra features were added and some features were taken away due to knowledge scope and time scope.

![wireframe - home image](/src/assets/wf-home.png)
![wireframe - search](/src/assets/wf-search.png)
![wireframe - profile](/src/assets/wf-profile.png)
![wireframe - topics](/src/assets/wf-topics.png)
![wireframe - signin](/src/assets/wf-signin.png)
![wireframe - signup](/src/assets/wf-signup.png)

## Colour Schemes and Fonts
___

As I am not very artisic, I went online to find colour schemes and fonts which pair up well together.

- I have used a darker colour scheme before in one of my projects and the feedback given was that a lighter and friendlier colour scheme would have made the website more appealing. So afer searching online I came across a colour scheme (which I went through a focus group with friends) which provided a friendly pairing. Although football wasn't on one of the suggested reasons on the website, it was the most popular with my focus group. I went with 2 majority colours as football kits are generally made up of 2 colours. So to align with the football theme, I choose the two. 

- Link to where I found my chosen colours - Royal Blue #234E70, Pale Yellow #FBF8BE [link](https://webflow.com/blog/best-color-combinations?utm_source=google&utm_medium=search&utm_campaign=Google-Search-Dynamic-Search-Ads-Core-BBSS&utm_term=aud-936979376121:dsa-1636392160939___585305490212___ss_paid-bb&gclid=Cj0KCQiA_bieBhDSARIsADU4zLd8UiEJGoywkUJzpuVrWoxYV5WxU8xRJd9mcOKWncj35uAywy7iCVcaAq7mEALw_wcB)

![chosen colour scheme](/src/assets/colour-scheme.png)

- I also looked up my fonts online. The scheme given was suggested for the same type of industry/website ideas. After going through a selection with a focus group of friends, the most popular was the combination below. These fonts provided a professional look to the website which was the way I decided to go. I was on the fence regarding a unsual style to stand out, but after my focus group, a professional look was suggested as the desired look.

![chosen colour scheme](/src/assets/chosen-fonts.png)

Link to where I found my chosen fonts League Gothic & PT Serif [link](https://elementor.com/blog/font-pairing/)

# Features

## Navigation

- A navigation bar is displayed at the top of every page to give users an easy way of navigating the website. 
- On smaller screens this is changed to a burger for easier access to links to pages rather than reduce the size of the text. The current active page will be indicated by the white font so that users know where in the website they currently are. 
- The nav bar links change depending on whether the user is logged in or not. If the user is logged in, then they have access to all of the pages of the website. If the user is not logged in, then they only have access to the home, login, or signup pages on the navbar (although they will still have access to pages such as profiles, posts etc. So that if another user wants to share a link to their profile or a specific post on another website then they have the option to share it and others are still able to see the content of that page).

![chosen colour scheme](/src/assets/navbar.png)

## Sign in page

- This contains a login form so that the user can log into the site and access all of the content provided.

## Log in page

- This contains the signup form so that users can register for an account with Football Reactions, and thus be able to login once registered to access all the pages and features provided.

## Home Page

- The home page features the most followed profiles so that a user can see who other people are following and access profiles which are populer with others.
- Most active profiles is a feature to allow other users to see which the most active profiles are, so that they can follow them to have content in their feed which is more regular than other profiles.
- Contains general posts from everybody. For new users this will provide an insight as to what other users regularly post about (this helps with the new user goal), and for current users they can see what is currently trending (current user goal).

![Home Page](/src/assets/homepage.png)

## My Feed Page

- This contains all of the posts from other users that the user has followed. This will filter out posts from anyone the user isn't following.

## Post Page (Create a post)

- This page contains the feature to write a post. The post will be displayed for all other users to see. It contains a form which the user can insert an image and post text for the post.

![Post Page](/src/assets/create-post.png)

## Topics Page

- This contains posts which are seperate to the standard posts. These posts are categorised into specific topics. The user can decide which topics to see by using the filter bar at the top. This allows the user to decide on the content they wish to see or post about. All posts on the topics page are labelled by the topic which the post is about, so that the user knows what they are talking about. 
- The page also contains a button for users to create a topic post, so that they can choose which topic specifically they want to discuss. 

![Topics Page](/src/assets/topics.png)

## Topics Post (Create a topics post)

- Image upload so that users can add an image to their post so that the post is more appealing to passing users. It also sets an instant idea as to what the post is about (example being a club logo so that users know the post is regarding a certain club.)
- A dropdown menu for users to pick a topic. This helps the user figure out what their topic is regarding so that topics are limited to certain topics to prevent topics being hard to find or to pick.
- A text input so that users can type out the post or question they wish to write.

![Create Topics Post ](/src/assets/topics-post.png)
![Topics Post Dropdown](/src/assets/topic-dropdown.png)

## Search Page

- A search bar lets the user search for other users. The results display the name of the profile, their avatar, if they are a club or a fan and who they support. This lets the user figure out information regarding the user without having to go into their profile to find out more. 
- The search bar filters out everything but profiles so that the user can find only user profiles.

![Search Page](/src/assets/search.png)

## Profile Page

- Contains details regarding the profile. It contains details such as how many posts the user has made so that other users can see how active they are. How many followers they have so that users can see how popular the profile is. 
- Contains all their posts (not including post to topics as these could be seen out of context with other posts at the time which could confuse other users).
- A request offical status button, so that users can request the official tag which will show on their profile so that other users know that the profile is the official profile of a club or player. This feature opens an email with information as to what to write in the email aswell as a prepopulated email address to the website and the subject. This makes the request more user friendly by guiding the user with required information or details.

![Profile Page](/src/assets/profile.png)

## Not Found Page

- A not found page was created if the user tries to access an incorrect url on the site. The navbar remains in view so that the user can redirect themself to where they would like to go.

## Buttons

- The buttons were stylised with css to make them more user friendly, such as changing colour when highlighted.
- There is a request official status button which is a different colour to the rest of the buttons. I have given it a grey background to demonstrate to users that this contains unique functionality. The button opens up an email for the user with prepopulated details to make it easier to write the email.
- The follow button changes text and colour when it has been clicked. This is more user friendly because it will indicate if the user is following the user or not.

## Other features

- An error message will display to users when they try to like their own comments or posts. This will be shown by a red overlaytrigger when hovered over to let them know why.
- A error message will display to non authenticated users when they try to like a post or comment. This will be shown by a red overlaytrigger when hovered over to let them know why.
- The official request tag request can be accepted by the admin and changed on the backend site so that the User then carries the officail tag when a user searches for them or opens their profile page.


## Edit and Delete

- The user has been given accessibility to profiles and posts which they can edit or delete. 
- This is consistently done with 3 dots so that it is consistent across the site. This will make it easier for users to spot when a feature can be edited.

![Edit and Delete dropdown](/src/assets/edit-delete-dropdown.png)

## Future Features
___

- A wider range of topics based on popular subjects users are discussing or bringing up.
- An area for "clubs only" to discuss things with other clubs and vice versa with fans.
- Direct messages between users.
- The ability to bookmark posts so the user can easily access a post they wish to continue commenting about.
- The ability to post videos and gifs.

## Components

- Components were set up throughout the project and was reused throughout.
1. MoreDropdown.js
    - A dropdown menu to allow users to edit and delete their own content.
2. AxiosDefault.js
    - Helped with communication with the backend API.
3. Asset.js
    - Is used for the loading spinner throughout the site for when the site is waiting for data to be sent from the API.
4. Avatar.js
    - Used for the users avatar throughout the site.
5. CurrentUserContext.js
    - Confirm users authenticated status to determine what functionality is available to that user.
6. ProfileDataContext.js
    - Used for following and unfollowing users.
7. useRedirect.js
    - Redirects the user to another page if the user is not authorised to access the page. 
8. utils.js
    - This allows Infinite Scroll to be used across the website where needed.
9. NotFound.js
    - Used to display content to a user if they have tried to access a non existent url in the website.
10. NavBar.js
    - A navbar for the website which allows the user to easily navigate throughout the website.
11. PostTopic.js
    - Creates a button which allows the user to click to create a topic post. This is used on the create topic page. If more versions of the topic page is made, then this button can be used multiple times.
12. BackButton.js
    - This provides a button which will take the user to the previous page. This is much more user friendly than using the back button in the browser.

# Technologies Used

## Main Languages
___

- HTML5
- CSS
- Python
- Javascript

### Frameworks, libraries, and programmes
___

- Django
    - Frameworks used to build the backend of the project.
- ElephantSQL
    - Database used to store data once deployed
- Justinmind 
    - For the wireframes
- Git
    - For version control, committing and pushing to Github
- Github
    - For storing the repository, files and images pushed from Gitpod
- Gitpod
    - IDE used to code project
- Heroku
    - Used to deploy the application
- Django
    - Used to build the backend database, that serves as an API for the front end part of the  project
- ReactJS
    - To build components that collectively form the front end of the application.
- React-Bootstrap
    - The styling side of the front end application used as it was introduced during the walkthrough project.
- SQLite
    - Used to run local database test.
- Google fonts
    - Used for selecting fonts for project.
- FontAwesome
    - For the use of icons.
    - Used to store all images
- Amiresponsive
    - Used for testing responsiveness and providing screenshots in different sizes.

___
# Bugs and Fixes


### Fixed

- I had a bug that would not allow the user to logout. It would throw an error in the console stating that the request had failed. I fixed this bug with the help of Oisin in tutor support. We located the return response was missing from my API views. Once the return response was keyed, the user was able to log out. 

![Log out error](/src/assets/sign-out-bug.png)
![Bug spot](/src/assets/log-out-bug.png)
![Bug fix](/src/assets/log-out-fix.png)

- I had a bug when the user went into a topic post and when they would click the like button, it would not do anything. I could see that it was registering because the id was setting in the console. When I would click it again it would say possible duplicate. This meant that the page was not rerendering which meant there must be a problem with the set state. I found that setTopicPost was missing an s on the end, so it was not refreshing the component once clicked. 


### Not fixed
- No other known bugs.

___
# Testing

## URLS

- All urls are working when clicked. 
- When a url is not identified, the not found page is displayed.

## Images

- All images are working and displaying properly.

## Sign in page

- I have tested the sign in page by keying incorrect login details. This threw an error and prevented the user from logging in. 
- I have tested leaving the login fields on the form blank. This throws an error and instructs the user that fields must not be left blank.
- Link to the Sign up page works underneath log in form.

![Test Login](/src/assets/test-login.png)

## Sign up page

- I have tested the sign up page by leaving the details blank. This prevents login and instructs user to not leave inputs blank.
- I have tested using non matching passwords. This prevents sign up.
- The link underneath the sign up form to the sign in page works.

## Home Page

- I have tested that the most active profiles are in order by changing who has the most posts. This amended the order of the profiles.
- I have tested that the most followed profiles are in order by changing who has the most followers. This amended the order of the profiles.
- The button for follow changes to unfollow when a user is followed.

## Log in or Out NavBar

- I have tested that the navbar changes links depending on if you are logged in or out. 
- I have tested all the links in the nav bar when not logged in and they work as expected.

## NavBar

- I have tested all the links in the NavBar when you are logged in and they work as expected.

## My Feed Page

- I have tested my feed page and all posts are displaying properly and only displaying posts by users who are being followed. I have unfollowed all users and this shows no posts.

## Topics Page

- The create a topic post button works and takes you to the topics/create page.
- The filter bar works and finds topic posts only with the corresponding topic name.
- The "all" on the topics filter displays all the topic posts.
- The topic post displays the topic type on the post itself.

## Search Page

- The search page displays a search bar at the top and when the user keys letters into the bar, it will search profiles with the corresponding letters.
- The search bar only return profiles.
- If no profiles are found then a Not found image will be shown and a message asking user to amend search. 

![Search displaying nothing](/src/assets/nothing-search.png)



## Back Button

- The back button component is working and sends the user to the previous page they were on.

## Profile Page

- Back button works on Profile Page.
- The amount of posts and followers/profiles followed increases when posts have been created or when other users have been followed.
- Button to request official status tag works and opens an email externally. Email address, subject and email body is prepopulated.
- Posts made by the user display under the profile details.

## CRUD

### Posts

- Only authenticated users can create posts. 
- A user can only edit their own posts and not any posts made by other users.
- A user can only delete their own posts and not any posts made by other users.
- A non authenticated user can read other users posts but can't edit or delete them.
- Blank posts can't be created.
- Posts without images can't be created.

### Comments

- Only authenticated users can create comments. 
- A user can only edit their own comment and not any comments made by other users.
- A user can only delete their own comments and not any comments made by other users.
- A non authenticated user can read other users comments but can't edit or delete them.
- Blank comments can't be created.

### Topic Posts

- Only authenticated users can create topic posts. 
- A user can only edit their own topic posts and not any topic posts made by other users.
- A user can only delete their own topic posts and not any topic posts made by other users.
- A non authenticated user can read other users topic posts but can't edit or delete them.
- Blank topic posts can't be created.
- Posts without images can't be created.

### Topic Posts Comments

- Only authenticated users can create comments. 
- A user can only edit their own comment and not any comments made by other users.
- A user can only delete their own comments and not any comments made by other users.
- A non authenticated user can read other users comments but can't edit or delete them.
- Blank comments can't be created.

### Likes

- Only authenticated users can like posts, topic posts, comments, topic comments.
- Only authenticated users remove their like on a post, topic posts, comments, topic comments.
- This can all be done via the posts page or the post page.

### Profile

- Only authenticated users can create a profile.
- Only authenticated users can edit their profile. 
- Authenticated users can edit - name, fan or club, bio, profile image and who do you support.
- Only an authenticated user can edit their username or password.

### Validation

All CSS was put thought the jigsaw. No errors.
ESLint was installed. No errors.
Lighthouse validation passed.

![css Validation](/src/assets/css-validation.png)
![Lighthouse Validation](/src/assets/lighthouse.png)

### Responsive Design
- I have tested my site for mobile use. Using [Am I Responsive](https://ui.dev/amiresponsive), I have successfully managed to be able use all features on the site, and css styling amends to the phone size.

![Responsive image](/src/assets/responsive.png)

# Deployment

## Project Setup

1. Create a new repository in Github and use the 'gitpod' button at the top to create workspace

2. Create the React app by running the terminal command:
```
npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm
```
Enter y to confirm installing the create-react-app package

3. Enter npm start in the terminal to test if the app is working.

4. The browser should be showing you the React logo.

5. Go to heroku and create a new app with a name and nearby location for the frontend.

6. In the deploy tab got to deployment method and select Github.

7. Search for the github repository you want to connect to.

8. Select manual deploy.

9. Select the open App button to make sure it has deployed successfully.

## Final Deployment

1. Push all your code to github with git add, git commit -m "your commit", git push.

2. On heroku for your front end project select manual deploy in the deploy tab.

3. Click open app and make sure app is working.

# Credits

- I used Code Institute Moments Project as a guide to my code. I adapted my own code from the tutorial as my confidence, knowledge and practice grew.

- Images were from pngaaa - [Link](https://www.pngaaa.com/)

___
# Acknowledgements

- I would like to thank Ger at the tutor suppor for all his help throughout all my projects.

- My mentor for his help on my final project.

- Especially to my partner for being so patient with me throughout this entire journey.
