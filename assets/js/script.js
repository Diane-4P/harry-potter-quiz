/**
 * Modal of instructions of how to play
 * Code from W3 schools https://www.w3schools.com/howto/howto_css_modals.asp
 */
// Get open, modal and close elements
let openInstruction = document.getElementById("openInstruction");
let instructions = document.getElementById("instructions");
let closeInstructions = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the instructions
openInstruction.addEventListener("click", function () {
    instructions.style.display = "block";
})

// When the user clicks on the close button (x), close the instructions
closeInstructions.addEventListener("click", function() {
    instructions.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close the instructions
window.addEventListener("click", function(e) {
    if (e.target === instructions) {
        instructions.style.display = "none";
    }
})

/**
 * Questions and Answers
 */
/**
 * Year One
 */

/**
 * Year Two
 */

/**
 * Year Three
 */

/**
 * Wait for the DOM to finish loading before running the game
 * Inspiration from the Love Maths project
 * Add event to select level
 */

/**
 * Removes the levels to show the questions and answers for the level chosen
 * 
 */

/**
 * Increase correct or incorrect score based on answer
 * Go to next question
 */

/**
 * Increasing the correct and incorrect score
 */