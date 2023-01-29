# **Football Reactions**

### [Click here to see deployed project](https://football-reactions-uk.herokuapp.com/) 
___

- Deployed API [link](https://football-reactions.herokuapp.com/)
- Deployed Frontend [link](https://football-reactions-uk.herokuapp.com/)
- API Backend [repository](https://github.com/Josh-Wickens/fr-drf-api)
- API Frontend [repository](https://github.com/Josh-Wickens/football-reactions)
- [User Story board](https://github.com/users/Josh-Wickens/projects/4)

Football Reactions is the perfect place for football fans to come together on one platform and speak just about football. Football reaction gives users the chance to state if they are a fan or if they are a club. They can make posts or join in conversations regarding certain topics and communicate together and share opinions. This repository is the frontend of Football Reactions using React Framework.

![Responsive image](/src/assets/responsive.png)

# Contents

1. [UX](#UX)
2. [Design](#design)


___
# UX

## Purpose
___

- The purpose of this site is to create a social platform for lovers of football to communicate about football and just football. Many people on social media platforms have to search for or go to certain groups to discuss their favourite football topice, whereas Football Reactions contain that, and just that. So more search and filtering to find football talk, just sign in and find all the football topics you want.

## Site Goals
___

- The site goal is to provide a platform which users can talk about football and find specific topics they would like to talk about. Users will be given the platform to voice their football opinions. It provides a safe space for football lovers to post and not annoy other users about always posting about football as the purpose and goal of this site is to provide a platform which everyone wants to hear your footballing opinions and thoughts.

## Current User Goals
___

- Current users are able to post their thoughts on the site for all users to see, so that other current users can comment back and discuss their thoughts or questions. They can also set a profile to describe the fan or club that they are so that users can decipher who everyone is and their football interests.

## New User Goals
___

- New users goals are to encourage users to sign up and feel like they are in a safe space to talk anything football as that is what everyone is doing on the site. 

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
- I have put user stories as issues as part of agile development you can find the link [here](https://github.com/Mrst12/pp5-frontend-react-appy-families/issues)

- I have also linked my user stories to a kanban board to make them easier to work on you can find the link [here](https://github.com/users/Josh-Wickens/projects/4)

- I also used a website called Asana to do my User Stories as I found the platform easier to work with and helps provides a schedule as it lets you provide due dates to keep you on schedule.
___
# Design

## Ideas and Mock diagrams
___

- Below are a couple of my initial design and thoughts regarding the planning of my project. I did not proceed with all of these ideas or mocks, but helped me with the initial planning and design aspect.

![mock diagram and ideas 1](/src/assets/planning-1.png)
![mock diagram and ideas 2](/src/assets/planning-1.png)

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

- I have used a darker colour scheme before in one of my projects and the feedback given was that a lighter and friendlier colour scheme would have made the website more appealing. So afer searching online I came across a colour scheme (which I went through a focus group with friends) which provided a friendly pairing. Although football wasn't on one of the suggested reasons on the website, it was the most popular with my focus group. I went with 2 majority colours as football kits are generaly made up of 2 colours. So to fit in with the football theme I choose the two. 

- Link to where I found my chosen colours - Royal Blue #234E70, Pale Yellow #FBF8BE [link](https://webflow.com/blog/best-color-combinations?utm_source=google&utm_medium=search&utm_campaign=Google-Search-Dynamic-Search-Ads-Core-BBSS&utm_term=aud-936979376121:dsa-1636392160939___585305490212___ss_paid-bb&gclid=Cj0KCQiA_bieBhDSARIsADU4zLd8UiEJGoywkUJzpuVrWoxYV5WxU8xRJd9mcOKWncj35uAywy7iCVcaAq7mEALw_wcB)

![chosen colour scheme](/src/assets/colour-scheme.png)

- I also looked up my fonts online. The scheme given was suggested for the same type of industry/website ideas. After going through a selection with a focus group of friends, the most popular was the combination below. These fonts provided a professional look to the website which was the way I decided to go. I was on the fence regarding a unsual style to stand out, but after my focus group, a professional look was suggested as the desired look.

![chosen colour scheme](/src/assets/chosen-fonts.png)

Link to where I found my chosen fonts League Gothic & PT Serif [link](https://elementor.com/blog/font-pairing/)

# Features

## Navigation

- A navigation bar is displaye at the top of every page to give users an easy way of navigating the website. 
- On smaller screens this is changed to a burger for easier access to links to pages rather than reduce the size of the text. The current active page will be indicated by the white font so that users know where in the website they currently are. 
- The nav bar links change depending on whether the user is logged in or not. If the user is logged in, then they have access to all of the pages of the website. If the user is not logged in, then they only have access to the home, login, or signup pages on the navbar (although they will still have access to pages such as profiles, posts etc. So that if another user wants to share a link to their profile or a specific post on another website then they have the option to share it and others are still able to see the content of that page).

![chosen colour scheme](/src/assets/navbar.png)

## Sign in page

- This contains a login form so that the user can log into the site and access all of the content provided.

## Log in page

- This contains the signup form so that users can register for an account with Football Reactions, and thus be able to login once registered to access all the pages and features provided.

## Home Page

- The home page features the most followed profiles so that a user can see who other people are following and access profiles which are populer with others.
- Most active profiles so that users can see who the most active profiles are so that they can follow them to have content in their feed which is more regular than other profiles.
- Contains general posts from everybody so that they can see what everyone is posting.

![Home Page](/src/assets/homepage.png)

## My Feed Page

- This contains all of the posts from other users that the user has followed. This will filter out posts from anyone the user isn't following.

## Post Page (Create a post)

- This page contains the feature to write a post. The post will be displayed for all other users to see. It contains a form which the user can insert an image and post text for the post.

![Post Page](/src/assets/create-post.png)

## Topics Page

- This contains posts which are seperate to the standard posts. These posts are categorised into specific topics. The user can decide which topics to see by using the filter bar at the top. This allows the user to decide on the content they wish to see or post about. All posts on the topics page are labelled by the topic which the post is about, so that the user knows what they are talking about.

![Topics Page](/src/assets/topics.png)







EDITING AND DELETING!!!XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
