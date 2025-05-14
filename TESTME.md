# Harry Potter Quiz – Testing Details

[View README.md file.](/README.md)

[View Harry Potter Quiz deployed site here.](https://diane-4p.github.io/harry-potter-quiz/)

## Testing 

## Table of Contents

-	[Browser Compatibility](#browser-compatibility)
-	[Responsiveness](#responsiveness)
-	[Validators](#validators)
-	[Page Speed](#page-speed)
-	[Testing User Stories](#testing-user-defined-stories-from-the-ux-section-of-readmemd)
-	[Manual Testing and Functionality](#manual-testing-and-functionality-on-each-page)
-	[Known Bugs](#known-bugs-discovered)

****

## Browser Compatibility

When testing the site on multiple browsers (Chrome, Firefox, Edge and Duck Duck Go) the game performed well by showing the instructions, right and wrong answers, going from one question to the next and going from one level to the next, but there was a white edge around the buttons on the Firefox browser and on the Duck Duck Go the Instructions seemed to be larger than the screen size so showed the slider bar on the right. This will need to be checked out to see what I can do so that it doesn't happen on future projects. All the browsers seem to have a slight height difference than the browser, which I will also need to look into more.

****

## Responsiveness

During the testing on multiple mobile devices (iPone 5(SE), iPhone 12 Pro, iPad mini, Galaxy S20 ultra) there was a good response on these devices within the **Chrome Developer Tools** but I found that the iPhone 5(SE) had too small a screen in height so you needed to scroll while playing the game. As this phone is nearly 10 years old there may not be as many in circulation today, but I will need to make sure that I include a smaller screen size in height than I am currently using when accommodating for the small mobile screens.

Within Chrome Developer Tools I also tested on the larger screens of 4K screen of 2560px and the iMac Pro of 5120px with the site taking up 45%-50% of the screen size. The game had a good response on these too but still showed the scroll bar for the slight difference in screen height.

****

## Validators
-	[W3C Markup validator](https://validator.w3.org/)

    -   ### index.html
![Results of html checker showing no errors or warnings](/readme/testing/index-html-validator-no-errors.png)

-	[W3C CSS validator](https://jigsaw.w3.org/css-validator/)

    -   ### style.css
![Results of css checker showing no errors or warnings](/readme/testing/style-css-validator-no-errors.png)

-   [JS Hint](https://jshint.com/)

    -   ### script.js
![Results after adjustments were made](/readme/testing/script-jshint-warning.png)

When I put my JavaScript through JS Hint to validate my coding there were the following warnings and errors found:

-   38 warnings which included - missing semicolons, unnecessary semicolons, let and const is available in ES6 (use 'esversion: 6) or Mozilla JS extensions (use moz).
-   2 undefined variables - global variable declared but not used and an internal variable declared and not used.
-   2 functions used - function to show that the user was elegible for the next year and function declared within loops referencing an outer scoped variable may lead to confusing semantics (currentYear, yearQuestions, startGame) on line 316.

By adding these notes (/* jshint esversion: 6 */, /* jshint -W033 */) at the top of the script file, the missing semicolons, let and const warning were removed. The warnings and erros were deleted as were not necessary to the running of the function. The one warning function in the image above was left in, as it was not causing a problem and was being used within the game.

****

##  Page Speed 
I had tried using Lighthouse in Chrome developer tools but was having problems so I used Page Speed.
-   Mobile
![Performance per mobile](/readme/testing/mobile-performance.png)
-   Desktop
![Performance per desktop](/readme/testing/desktop-performance.png)
-   Link to full results
https://pagespeed.web.dev/analysis/https-diane-4p-github-io-harry-potter-quiz/8uszp3zxp4?form_factor=mobile

****

## Testing user defined stories from the UX section of READMe.md

-   As a first time user to the site, I want to be able to see the instructions on how to play the game.
    -   When the user lands on the site the instructions on how to play the game are the first thing that the user sees (see image below).

-	As a first time user to the site, I want to know what the site is about and see if it something that I want to use.
    -   From the instructions the user can see that it is a game (How to Play).
    -   From the instructions it shows that there are questions with multiple choice answers.
    -   From the instructions the user can see that if you get enough right you can navigate to the next level.
    ![Instructions](/readme/images/us-instructions.png)
    -   When the user closes the instructions you can see that it is questions based on Harry Potter.
    ![Harry Potter Quiz](/readme/images/harry-potter-quiz-start-game.png)

-   As a user of the quiz, I want to be able to navigate the game with ease.
    -   From the instructions screen it can easily be closed either by using the 'X' to close it, or click outside the How to Play box.
    -   The levels screen shows to enter year one to start the game by clicking on the call to action button.
    ![Level buttons](/readme/images/us-level-buttons.png)
    -   When answering the questions the user can then click on your chosen answer which then brings up the 'Next Question' call to action button.

    ![Next Question button](/readme/images/next-question-button.png)
    -   When the user has finished answering questions for that year, the next screen shows the number of questions the user got correct or incorrect and then another call to action button which will either take the user to the next level or to repeat the level that the user is on by trying again.

    ![Next level](/readme/images/us-next-level.png)
    ![Try Again](/readme/images/try-again.png)
    -   When all levels are completed then the user is then asked if they want to play the game again.
    ![Play Again](/readme/images/play-again.png)
    
-   As a user of the quiz, I want to be able to see if my answer is correct or not.
    -   When the user answers a question correct the background colour of the answer button turns green.
    -   When the user answers a question incorrect the background colour of the answer button turns red.
    -   When the user answers the question incorrectly the background colour of the answer button turns red and the background colour of the correct answer button turns green simultaneously.

    ![Correct or Incorrect](/readme/images/us-correct-incorrect.png)
    -   When the user answers the question correctly then the correct answers total at the bottom increases accordingly (see image below). 
    -   When the user answers the question incorrectly then the incorrect answers total at the bottom increases accordingly (see image below).

-   As a user of the quiz, I want to know how many of the questions I got correct.
    -   As the user answers the questions the correct and incorrect totals increase accordingly at the bottom.
    ![Answers correct](/readme/images/us-answers-correct-not.png)
    -   When all 10 questions are answered if you get enough correct then the next screen says 'Congratulations! You scored 8 out of 10.'.
    -   When all 10 questions are answered and you don't answer enough correctly then the next screen says 'Sorry. You scored 4 out of 10.'.

-   As a user of the quiz, I want to know if I can go to the next level or not.
    -   When all 10 questions are answered and if you get enough correct then the next screen says 'Congratulations! You scored 8 out of 10.' and the call to action button says 'Next Level'.

    ![Next level](/readme/images/us-next-level.png)
    -   When all 10 questions are answered and you don't answer enough correctly then the next screen says 'Sorry. You scored 4 out of 10.' and the call to action button says 'Try Again'.

-   As a user of the quiz, I want to know my total score over all the levels.
    -   An overall score will be implemented in the future.

-   As a user of the quiz, I want to go against other people taking the quiz.
    -   User names to be stored for a leaders board will be implemented in the future.
    -   User total scores to be stored and included in the leaders board will be implemented in the future.

****

## Manual Testing and Functionality on each screen

-   Instructions
    -   Clicked on the 'X' to close the instructions on how to play the game.
    -   Clicked on the outside the area of the 'How to Play' instructions to close the modal.
    -   Clicked on the 'See Instructions' button (when closed) to open the instructions on how to play the game.
    -   Verify the responsiveness on mobiles, tablets, laptops, 4K and 5K screens on Chrome's developer tools.

-   Levels
    -   Clicked on each year level (Year One, Year Two, Year Three) to verify it goes to the correct question and answers.
    -   Verify the responsiveness on mobiles, tablets, laptops, 4K and 5K screens on Chrome's developer tools. 
    -   Clicked on the 'See Instructions' button (when closed) to open the instructions on how to play the game.

-   Quiz
    -   Clicked on each answer button to verify that it changes to either red or green or both.
    -   Clicked on the 'Next Question' button to verify it goes to the next question within its current year.
    -   Verify that the correct answer total increases with a correct answer selected.
    -   Verify that the incorrect answer total increases with an incorrect answer selected.
    -   Verify when the last question is answered and the user has answered enough correct that the 'Next Level' button appears.
    -   Clicked on the 'Next Level' button to verify it goes to the next year level from the current year.
    -   Verify when the last question is answered and the user has answered enough incorrect that the 'Try Again' button appears.
    -   Clicked on the 'Try Again' button to verify it goes back to the current year.
    -   Verify when the last question is answered and the user has answered enough correct that the 'Congratulation! You scored 8 out of 10.' appears.
    -   Verify when the last question is answered and the user has answered enough incorrect that the 'Sorry. You scored 4 out of 10.' appears.
    -   Verify the responsiveness on mobiles, tablets, laptops, 4K and 5K screens on Chrome's developer tools. 

-   Next Level
    -   Verify the user goes from year level one to year level two and from year level two to year level three.
    -   Verify the responsiveness on mobiles, tablets, laptops, 4K and 5K screens on Chrome's developer tools. 

-   Try Again
    -   Verify the user goes from year level one and back to level one to try again.
    -   Verify the user goes from year level Two and back to level Two to try again.
    -   Verify the user goes from year level Three and back to level Three to try again.
    -   Verify the responsiveness on mobiles, tablets, laptops, 4K and 5K screens on Chrome's developer tools. 

-   End Quiz
    -   Verify when the last question is answered and the user has answered enough correct that the 'Play Again' button appears.
    -   Verify when the last question is answered and the user has answered enough correct that the 'Congratulation! Mischief Managed!.' appears.
    -   Clicked on 'Play Again' button and verify it goes to the Levels to play again.
    -   Verify the responsiveness on mobiles, tablets, laptops, 4K and 5K screens on Chrome's developer tools. 

## Further Testing

-   I viewed the game on my own mobile (Huawei P30 Pro: Chrome) and the height of the game was longer than my screen so I have the same problem as the iPone 5(SE) and my phone is a lot newer, so I will have to look into and making sure that future projects are more responsive. I also noticed that when it came to the question with the longest answers the answer buttons were not central on the background but the 'Next Question' button was central. All the button styles are being picked up by both the answers buttons and the 'Next Question' button and the only difference is that the height of the answer buttons is bigger, so I will need to look into this more to find out what the bug is.

****

## Known bugs discovered

-   Within the startGame function the idea was to play the current year and if you got 8 or more answers correct you could go to the next year level but if you got less than 8 then you were to repeat the year, but I was getting the following error. 
```
I had the parameters of the game reset but I had used 'let' to declare them, so the game was not proceeding to the next year.
script.js:371 Uncaught TypeError: Cannot read properties of undefined (reading 'question')
at showQuestions (script.js:371:46)
at startGame (script.js:353:5)
at HTMLButtonElement.<anonymous> (script.js:518:13)
```
When I put the question up on slack Simon Thornes (4P) answered my query and told me that I hadn't reset my currentQuestionIndex to 0, which I included but it was still causing the same problem. Then he told me that I should remove the let assignment in front of the statement as I was creating a local variable and I needed to change the global variable, which put things into perspective. Then I had the problem that the scores were not reseting to 0, but when I added this code (below) to each year then it worked as it should.
```
document.getElementById("correct-answers").innerText = 0;
document.getElementById("incorrect-answers").innerText = 0;
```

-   The height of the game is longer than the view screen on the iPone 5(SE) and the Huawei P30 Pro which still needs looking into.
-   In year level three where the answers to the questions is the longest, there is no centralisation of the answer buttons as they are all showing on the left of the background colour, but the 'Next Question' button is in the center. This will also need looking into further.