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

## Browser Compatibility

When testing the site on multiple browsers (Chrome, Firefox, Edge and Duck Duck Go) the game performed well by showing the instructions, right and wrong answers, going from one question to the next and going from one level to the next, but there was a white edge around the buttons on the Firefox browser and on the Duck Duck Go the Instructions seemed to be larger than the screen size so showed the slider bar on the right. This will need to be checked out to see what I can do so that it doesn't happen on future projects. All the browsers seem to have a slight height difference than the browser which I will also need to look into more.

## Responsiveness

During the testing on multiple mobile devices (iPone 5(SE), iPhone 12 Pro, iPad mini, Galaxy S20 ultra) there was a good response on these devices within the **Chrome Developer Tools** but I found that the iPhone 5(SE) had too small a screen in height so you needed to scroll while playing the game. As this phone is nearly 10 years old there may not be as many in circulation today, but I will need to make sure that I include a smaller screen size in height than I am currently using when accommodating for the small mobile screens.

Within Chrome Developer Tools I also tested on the larger screens of 4K screen of 2560px and the iMac Pro of 5120px with the site taking up 45%-50% of the screen size. The game had a good response on these too but still showed the scroll bar for the slight difference in screen height.

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

By adding these notes (/* jshint esversion: 6 */, /* jshint -W033 */) at the top of the script file, the missing semicolons, let and const warning were removed. The warnings and erros were deleted as were not necessary to the running of the function. The function above was left in, as it was not causing a problem and was being used within the game.



##  Page Speed 
I had tried using Lighthouse in Chrome developer tools but was having problems so I used Page Speed.
-   Mobile
![Performance per mobile](/readme/testing/mobile-performance.png)
-   Desktop
![Performance per desktop](/readme/testing/desktop-performance.png)
-   Link to full results
https://pagespeed.web.dev/analysis/https-diane-4p-github-io-harry-potter-quiz/8uszp3zxp4?form_factor=mobile

## Testing user defined stories from the UX section of READMe.md

## Manual Testing and Functionality on each page

## Further Testing

## Known bugs discovered
