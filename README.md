# Harry Potter Quiz
[View Harry Potter Quiz deployed site here.](https://diane-4p.github.io/harry-potter-quiz/)
-	Mochups with Am I Responsive

****

## Introduction 

I created the Harry Potter quiz because my daughter grew up with the Harry Potter books written by JK Rowlin and then the films of Harry Potter which were based on the books. As Harry Potter as a brand is very well known and there are a lot of fans of both the books and films, I thought a lot of fans would like to take the quiz and test their knowledge against the questions within the quiz.

****

## Table of Contents
-	[User Experience](#user-experience-ux)
-	[Design](#design-choices)
-	[Wireframes](#wireframes)
-	[Features](#features)
-	[Technologies Used](#technologies-used)
-	[Testing](#testing)
-	[Deployment](#deployment)
-	[Credits](#credits-references)
-	[Acknowledgements](#acknowledgements)

****

## User Experience UX
## Strategy

The goals of the quiz was to encourge the young and older generations to take the quiz to see how well they can do at answering the questions. The goal of the quiz is to get at least 8 out of 10 answers correct to be able to advance to the next level. The quiz will help with keeping the mind agile with aiding in retrieval of information. Allows you to gain knowledge and can boost your self esteem and build confidence.

## Scope
-	User Stories
## Structure
-	General Features description

****

## Design choices

## Surface

###	Colour

The colours I chose were from the colours within the Marauders Map. I used the Eye Dropper extension on Google Chrome to give me the Hex and the rgb values so I could use the transparency. I also used [colornamer.robertcooper.me](https://colornamer.robertcooper.me/) to give me the names of the colours chosen. 
    -   Coppery Orange - #7e3f31, rgb(126, 63, 49) - was used for the background colours of the displays.
    -   Desert Temple - #ddcf99, rgb(221, 207, 153) - was used for the buttons and the background of the How to Play instructions.

The colours I for the correct and incorrect answers were the House colours of Harry Potter. These wer chosen so that the user could see whether they were correct or not straight away and they could also see the score at the bottom of the display. Red for the Gryffindor House and green for the Slytherin House.
    -   Endless Possibilities - #e13f3b, rgb(225,63,59) - was used for the incorrect answers.
    -   Primal Green - #14855f, rgb(20, 133, 95) - was used for the correct answers.

### Typography

I have chosen to use the Harry Potter font which was created by Mary GrandPré and found on [DaFont](https://www.dafont.com/) for the game. As everyone knows what the Harry Potter logo looks like I could not find another font that matched it so was glad that I was able to use the original font. As a fallback I am using Angel Wish which I also found on the [DaFont](https://www.dafont.com/) website by [String Labs Creative Studio](https://www.dafont.com/stringlabs-creative-studio.d8082) and if all else fails I am also adding the Serif font. The font colour was black as it was a good contrast against the background colours.

### Imagery

The main background image of the Marauders Map was used as all Harry Potter fans will recognise it. It is one of my favourite images especially when you see the little feet moving on the map in the movies, but unfortunately mine is only a static image. There is also the famous HP logo that is on all the Harry Potter films with my title of Harry Potter Quiz.

The [favicon](https://favicon.io/) icon was created from a wizard hat that I downloaded in svg format from the [fontawesome](https://fontawesome.com/icons/hat-wizard?f=classic&s=solid) website, which was done by using their generators.

****

## Skeleton
## Wireframes 
-	Pages with links

****

## Features 
-	Universal across the site
-	Home 
### Instructions

A modal was created to contain the Instructions of How to Play the game. It opens when you access the game page and you can close it when you have finished reading. It can be closed by either the X or by clicking anywhere outside the How to Play window. You can also open the Instruction at anytime as there is a button in the top left of the screen.
-   ![Instructions How to Play](/readme/images/instructions-how-to-play-modal.png)

### Levels Display

When you have read the instructions and closed down the modal then the levels of the game appear. The instructions modal closes and is shown in the top left of the screen so that you can open them and read them before starting the game. The game display shows the user the levels in years and you are informed to enter Year One to start the quiz. The background of the game is a picture of the Marauders Map with I solemly swear that I am up to no good and the logo of HP and the title Harry Potter Quiz. There is the Coppery Orange background to the display so that you can read the text to start the game and the levels buttons showing Year One, Two and Three in the center of the screen.
-   ![Levels of the Game](/readme/images/levels.png)

### Quiz Display

When you enter year one the user now sees the question about Harry Potter and 4 multiply choice answers with only one being correct. At the bottom of the display you can see how many question you have got right or wrong, with the count increasing as you answer all the questions.
-   ![Quiz Display](/readme/images/quiz-question-answers.png)

If the user answers the question correct they get an immediate visual that they are correct with the button changing colour to green. When the user has chosen a question the buttons are disabled so that the answer cannot be changed. When the answer has been chosed the Correct answers number shows that the user has 1 correct answer and no Incorrect answers. The user can then click the button of the Next Question to be able to see what the next question and answers are.
-   ![Correct Answer](/readme/images/correct-answer.png)

If the user answer the question incorrectly they also get an immediate visual that they have chosen the incorrect answer with the button changing to the colour red. But also it shows the user what the correct answer should have been. The user can also see at the bottom that the Incorrect answers number shows that the user now has 1 incorrect answer as well as 1 correct answer. The user can then click the button of the Next Question to be able to see what the next question and answers are.
-   ![Incorrect Answer](/readme/images/incorrect-answer.png)

### Final Score Display

There are 10 questions per level of the quiz and when the user answers all 10 the display will show how many questions they have got correct. If they get 8 or more out of 10 correct then they can move onto the next level. The display showing "Congratulations! You have scored 8 out of 10." and the Next Level button to take them to Year Two of the quiz.

If the user does not succeed in getting 8 questions correct then the user will need to repeat the level until they get enought right to move on. The display will show "Sorry. You scored 5 out of 10. Please try again" and the Try Again button will take them to the start of the questions level they got wrong again.

-	Features to Implement in the Future

There are 3 levels in the game at the moment but I do intend to increase it to 7 years for the number of books in the Harry Potter series.

****

## Technologies Used
### Languages
-	[HTML5](https://en.wikipedia.org/wiki/HTML5)
-	[CSS3](https://en.wikipedia.org/wiki/CSS)
-	[JavaScript (JS)](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries and Programs used
-	[Visual Studio](https://visualstudio.microsoft.com/)
    -   IDE and code editor used to build the game.
-	[DaFont](https://www.dafont.com/)
    -   The Harry Potter and Angel Wish fonts which were downloaded from DaFont and accessed on the CSS style.css file via the assets folder. Harry Potter being the main font with Angel Wish and Serif as fallbacks.
-	[Font Awesome](https://fontawesome.com/)
    -   To download the wizard hat in svg format to create the favicon for the quiz using the [favicon](https://favicon.io/) generator.
-   [favicon](https://favicon.io/)
    -   To create the favicon wizard hat for the site.

-	Git
-	GitHub
-	Balsamiq
-	jQuery
-	Bootstrap v5.3.3 CDN via jsDelivr
-	Tiny PNG
-	Image Compressor
-	Tiny Wow
-	Convert webp to jpg – an extension on Chrome
-	Beautifier

## Testing
-	W3C Markup validator (HTML)
-	W3C CSS validator (CSS)
-	Am I Responsive
-	Lighthouse tab within Chrome Developer Tools

****

## Testing Performed
-	View TESTME.md file with link

****

## Deployment
### GitHub Pages
The site was deployed to GitHub Pages using the following steps:
1.	Log in to GitHub and locate the GitHub Repository.
2.	Navigate to the "Settings" of the repository, located at the top of the page in the menu.
3.	On the left hand side is a menu, and click on the "Pages" from the Code and Automation section.
4.	Under "Branch" click on the dropdown menu called "None" and select "Main".
5.	On the dropdown menu next to "Main" select "Root" and click the "Save" button.
6.	Navigate to the "Code" of the repository, located at the top of the page in the menu.
7.	On the right hand side is an "About" section and below that is the "Deployments" which shows the GitHub pages thats deployed.
The live link can be found here.
The site is hosted using GitHub pagaes and is deployed via the main branch. The deployed site uses a Version Conrol System to track changes in the source code using the Gitpod terminal to commit messages and push then to GitHub. This will update the repository automatically when GitHub receives these commits in the main branch. The main landing page of the site has to be named index.html in order for the site to be deployed correctly, as the search engines are looking for this document to load the site onto the web.
### Cloning
To run the site locally, you can clone the repository into the code editor of your choice by pasting the git clone https://github.com/Diane-4P/always-healthy.git (using the https) into your terminal. To then stop using the repository and cut ties with it you type 'git remote rm origin' into the terminal.
### Forking
When you fork a GitHub repository you will make a copy of it, which can be put into your own account and you can make changes without affecting the original repository.
1.	Log into GitHub and locate the GitHub Repository you want to fork.
2.	At the top of the repository to the right, under the menu, there is a "Fork" button.
3.	You should have a copy of the original repository in your own GitHub account.

****

## Credits (references)
-	Code 
    -   [W3 Schools](https://www.w3schools.com/howto/howto_css_modals.asp)
        -   This was used to create a modal to show the instructions of how to play the game.
-	Content 
    -   The content was written by the developer. The writing on the Marauders Map of "I solemly swear that I am up to no good" is part of the image. The questions and the correct answer was obtained from the websites I searched and as there was only one answer and I wanted to give users a multiple choice then I added 3 other answers to the questions that have been included.
        -   [Today](https://www.today.com/life/inspiration/harry-potter-trivia-rcna138373)
        -   [Radio Times](https://www.radiotimes.com/tv/sci-fi/pub-quiz-harry-potter/)
        -   [BuzzFeed](https://www.buzzfeed.com/laurafrustaci/harry-potter-trivia-questions-answers)
-	Images 
    -   Favicon image used was created through the favicon generator from an image on the fontawesome website.
    -   On the main page we have the Marauders Map which was downloaded from the [Wallpaper Flare](https://www.wallpaperflare.com/harry-potter-marauders-map-text-movies-paper-backgrounds-wallpaper-ccbmw/download/1920x1080).

****

## Acknowledgements
-	Mentor – Brian Macharia – for his helpful feedback
-	Inspiration for website came from quizzes
## Disclaimer:
This site and content are for educational purposes only.
