var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto"
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alerts user theyre starting the round
    window.alert("Welcome to Robot Gladiators");

    //Subtract the value of 'playerAttack' from value of 'enemyHealth' use result to update value in 'enemyHealth' var
enemyHealth= enemyHealth - playerAttack;
    //Log a resulting message to console to verify it worked
console.log(
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
);

//Check enemy health
if (enemyHealth<= 0){
    window.alert(enemyName + " has died! ");
}
else{
    window.alert(enemyName + " still has " + enemyHealth + " health left ");
}

    //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use results to update value in 'playerHealth' variable
playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console to verify it worked.
    console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. ");

//Check player health
if (playerHealth<=0) {
    window.alert(playerName+" has died! ");
}

else{
    window.alert (playerName+" still has " +playerHealth+" health left. ");
}
};


fight();