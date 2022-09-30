const myButton = document.querySelector(`.btn`)

myButton.addEventListener(`click`, generate)

function generate(e){
        // User choice

        const div = document.createElement('div')
        const userChoice = prompt("Do you choose rock, paper or scissors?");

        if (! userChoice) {
            // User choice was undefined
            document.write("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
        } else {
            // Display user choice
            document.write("<p>Player 1:" + " " + userChoice + "</p>");
        }

        // Computer choice
        let computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }

        // Display computer choice
        document.write("<p>Computer:" + " " + computerChoice + "</p>");

        // Compare user choice vs computer choice
        const compare = function(choice1,choice2) {
            if (choice1 === choice2) {
                return "It's a tie! Refresh the page please.";
            }
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    return "You win! Refresh the page please.";
                } else {
                    return "You lose! Try again. Refresh the page please. ";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    return "You win! Refresh the page please.";
                } else {
                    return "You lose! Try again. Refresh the page please.";
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    return "You lose! Try again. Refresh the page please. ";
                } else {
                    return "You win! Refresh the page please.";
                }
            }
        };

        // Run the compare function
        var results = compare(userChoice,computerChoice);

        // Display results
        document.write("<br><hr><br>" + results);

}
        
        document.getElementById('main').appendChild(div)





