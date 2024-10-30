let getrandomnumber = Math.floor(Math.random() * 10) + 1;
let getchancesthree = 3;

function Guess() {
    let getuserinput = parseInt(document.getElementById("userinput").value);
    let getwinorloss = document.getElementById("winorloss");
    let getlowhigher = document.getElementById("loworhigher");
    let getleftnumbers = document.getElementById("leftnumbers");

    if (getchancesthree > 0) {
        if (getrandomnumber === getuserinput) {
            getwinorloss.innerHTML = "YOU WIN THE GAME!";
            getlowhigher.innerHTML = "Guessing number is correct...!";
        } else {
            getchancesthree--;
            getleftnumbers.innerHTML = "Chances left: " + getchancesthree;
            if (getrandomnumber > getuserinput) {
                getlowhigher.innerHTML = "Your number is too low";
            } else {
                getlowhigher.innerHTML = "Your number is too high";
            }
        }
        
        if (getchancesthree === 0 && getrandomnumber !== getuserinput) {
            getwinorloss.innerHTML = "GAME OVER! You've run out of chances.";
            
        }
    }
}