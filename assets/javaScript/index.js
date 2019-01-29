// Game of Thrones RPG with JavaScript Pseudocode


// CHOOSING A ROLE

// 1. Allow player to choose role. 

//    Each role will have differing 'Health Points', 'Attack Power', and 'Counter Attack Power', 
//    The player will only be shown Health Points.

//    Once chosen, the Battle Section appears
//    Move chosen role to Player section (disable player card)
//    Move unchosen roles to Enemies undefeated-roles section (do not disable cards)

// CHOOSING AN OPPONENT 

//    Allow player to choose an opponent

//     Once chosen, move chosen enemy to Opponent section in Battle Section
//     Disable Opponent Card
//     Temporarily disable undefeated-roles cards (until current opponent is defeated)

// BATTLE BEGINS

//      Show Attack button.
//      At each click trigger and event to change player and opponent scores
//      Change scores depending on role attack power and opponent counter attack power
//      Show player score changes

// DETERMINE BATTLE VICTOR

//      if opponent Health Points <= 0 player wins battle and is able to choose next opponent
//      if player Health Points <= 0  player loses game
//      if Enemies.length === 0 player beats the whole game
