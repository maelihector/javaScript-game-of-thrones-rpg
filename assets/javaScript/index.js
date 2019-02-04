// create roles object
const roles = {
  "House Targaryen": {
    name: "House Targaryen",
    imageUrl: "assets/images/targaryen.png",
    history: "House Targaryen of Dragonstone is a Great House of Westeros and are descendants of the Valyrians. Merely shepherds in Essos at the time of their discovery of dragons the Valyrians quickly tamed them and became dragonlords. With their newfound power they were able to establish and rule the Valyrian Freehold, which endured for about 5,000 years before a great volcanic eruption wiped the ruling city of Valyria out. The Targaryens were the only dragonlords to have survived having fled Valyria years before, and about 100 years later, and with three dragons, the Targaryens invaded and conquered most of Westeros (all but Dorne) and ruled it for 300 years. The last Targaryen King of Westeros was Aerys II, and was Daenerys' father, he was killed by Jaime Lannister during the Baratheon Rebellion that resulted in House Baratheon taking the Iron Throne from the Targaryens. Most of the Targaryens except Daenerys and her older brother were killed during the rebellion. Daenerys is the only known dragonlord and believes to be the rightful Targaryen heir to the Iron Throne (her older brother was killed by her late husband Drogo). Aegon Targaryen (currently known as Jon Snow) is the son of Rhaegar Targaryen, King Aerys II eldest son and heir, and is the rightful Targaryen King of Westeros.",
    _healthPoints: 200,
    _attackPower: 5,
    counterAttackPower: 15,
    set healthPoints(newHealthPoints) {
      this._healthPoints = newHealthPoints;
    },
    set attackPower(newAttackPower) {
      this._attackPower = newAttackPower;
    }
  },
  "Night King": {
    name: "Night King",
    imageUrl: "assets/images/nightKing.png",
    history: "The Night King is thousands of years old, descends from the First Men, is the first White Walker, and is the King of the Army of the Dead. The First Men were the original human inhabitants of the continent of Westeros having arrived to Westeros about 12,000 years before the events of the series takes place. To help protect themselves from the invading First Men, The Children of the Forest, who were the intelligent, non-human natives of Westeros, transformed one of the First Men into a White Walker who later became The Night King. The Night King soon turned on the Children of the Forest which then caused an alliance of First Men and the Children of the Forest to help keep the White Walkers at Bay. Since then the Night King has grown his Army of the Dead to hundreds of thousands. The White Walkers can only be killed by dragon glass or fire.",
    _healthPoints: 160,
    _attackPower: 9,
    counterAttackPower: 15,
    set healthPoints(newHealthPoints) {
      this._healthPoints = newHealthPoints;
    },
    set attackPower(newAttackPower) {
      this._attackPower = newAttackPower;
    }
  },
  "House Stark": {
    name: "House Stark",
    imageUrl: "assets/images/stark.png",
    history: "House Stark of Winterfell is a Great House of Westeros and descend from the First Men. The First Men were the original human inhabitants of the continent of Westeros having arrived to Westeros about 12,000 years before the events of the series takes place. The Starks worship the Old Gods of the Forest, which is a learned religion from the Children of the Forest who were the intelligent, non-human natives of Westeros when the First Men arrived. About 4,000 years after the arrival of the First Men, Brandon Stark (better known as Bran the Builder) built the Great Ice Wall, helped fund the Night's Watch, and built Castle Winterfell. Brandon Stark later became the first King in the North. The Stark Heads were one of the seven kings of Westeros as Kings of the North before the Targaryen conquest of Westeros, in which they were afterwards titled The Wardens of the North. Jon Snow is the current Head of House Stark and King in the North. Jon Snow is thought to be Eddard Stark's oldest, albeit illegitimate son, but he is actually the child of Eddard's sister Lyanna, and the last Targaryen King's eldest son and heir Rhaegar.",
    _healthPoints: 180,
    _attackPower: 7,
    counterAttackPower: 20,
    set healthPoints(newHealthPoints) {
      this._healthPoints = newHealthPoints;
    },
    set attackPower(newAttackPower) {
      this._attackPower = newAttackPower;
    }
  },
  "House Baratheon": {
    name: "House Baratheon",
    imageUrl: "assets/images/baratheon.png",
    history: "House Baratheon of Storm's End is a Great House of Westeros and is one of the newest houses having been founded only about 280 years before the events of the series takes place. Its founder is rumored to have been the first Targaryen king's bastard brother Orys Baratheon. Although Orys helped the Targaryens finish conquering the seven kingdoms, his descendant Robert Baratheon would later lead a rebellion against the Targaryens that would end the Targaryen rule over Westeros and result in the Head of the Baratheon House ascending to the iron throne. While Robert was king and married to Cersei, unbeknownst to him he did not father any of Cersei's three children as she often laid with her twin brother Jaime. After Robert's death and the truth of Cersei's bastard children was out, each of Robert's two younger brothers believed that they were his rightful heir. However, Robert had several bastard children, and although Cersei tried to have them all killed, Gendry, one of his bastards survived. Gendry is the last Baratheon known to be alive as both of Robert's younger brothers and their heirs are dead. Gendry was part of the company that went north of the wall with Jon Snow to help capture a wight in order to prove the existence of White Walkers to Cersei.",
    _healthPoints: 120,
    _attackPower: 13,
    counterAttackPower: 5,
    set healthPoints(newHealthPoints) {
      this._healthPoints = newHealthPoints;
    },
    set attackPower(newAttackPower) {
      this._attackPower = newAttackPower;
    }
  },
  "House Lannister": {
    name: "House Lannister",
    imageUrl: "assets/images/lannister.png",
    history: "House Lannister of Casterly Rock is a Great House of Westeros and are descendants of the Andals. The Andals were a race of men who invaded and conquered most of Westeros (all but the North and Dorne) about 6,000 years before Cersei Lannister was born. The Andals came from Andalos in Essos and worship the Seven-Faced God, and claim their god instructed them to come to Westeros. The Lannister Heads were one of the seven kings of Westeros titled King of the Rock before the Targaryen conquest of Westeros, in which they were afterwards titled The Warden of the West. The Lannisters are one of the wealthiest families in Westeros. Current Queen of Westeros is Cersei Lannister. Cersei was the widow of King Robert Baratheon, and became Queen after all three of her children died. Jaime Lannister is currently riding North to join the Targaryen/Stark Houses in battling the White Walkers. Tyrion Lannister is Hand of the Queen to Daenerys Targaryen.",
    _healthPoints: 145,
    _attackPower: 11,
    counterAttackPower: 11,
    set healthPoints(newHealthPoints) {
      this._healthPoints = newHealthPoints;
    },
    set attackPower(newAttackPower) {
      this._attackPower = newAttackPower;
    }
  }
};


// ** Global Variables **

// grab reference to div with id='all-roles' to remove after user chooses their player.
let allRolesdDiv = document.getElementById('all-roles');
// grab reference to area where we want role history to be rendered and save to historyDiv variable
let historyDiv = document.getElementById('history-div');
// grab reference to area where opponent is rendered
let opponentDiv = document.getElementById('opponent');
// grab reference to area where enemies are rendered
let undefeatedCardsDiv = document.getElementById('undefeated');
// grab reference to the area where we want game messages to be rendered and save to gameMessageDiv variable  
let gameMessageDiv = document.getElementById('game-message');
// grab reference to attack-button div.
let attackBtnDiv = document.getElementById('attack-button');
// grab reference to game-stats div.
let gameStatsDiv = document.getElementById('game-stats');
// declare player var to be used in pickRole()
let player;
// save all roles besides player as initial list of enemies
let enemies = [];
// declare opponent var to be used in pickOpponent()
let opponent;
// numAttacks variable helps keep track of player attack power
let numAttacks = 0;
// these declared vars are used for game stats
let playerStartingAttackPower;
let playerStartingHealthPoints;
let updatedPlayerAttackPower;
let updatedPlayerHealthPoints;
let opponentStartingHealthPoints;
let updatedOpponentHealthPoints;
let currentOpponentCounterAttackPower;
let lastOpponent;
let lastNumAttacks;

// Function to render role cards to the DOM.
// Add role and area parameters to re-render cards throughout the game
function renderRoleCards(role, area) {
  // create a div and save to cardDiv variable
  let cardDiv = document.createElement('div');
  // add the following attributes to cardDiv
  setAttributes(cardDiv, {
    'class': 'card',
    // give id the value of role name
    'id': role.name,
  });
  // only if area is 'all-roles', add attribute mouseover so player can see role history before choosing a player role.
  if (area === 'all-roles') {
    setAttributes(cardDiv, {
      // add 'this' as an argument of showHistory() to grab reference to the target of the mousedover event
      'onmouseover': 'showHistory(this)',
      // add attribute onclick event so user can choose their player by calling pickRole() function
      // add 'this' as an argument of pickRoles() to grab reference to the target of the click event
      'onclick': 'pickRole(this)'
    });
  }
  // if area is 'undefeated'
  if (area === 'undefeated') {
    // grab reference to enemies and battleground div
    let enemiesDiv = document.getElementById('enemies');
    let battlegroundDiv = document.getElementById('battle-ground');
    // change attribute style display from none to grid
    enemiesDiv.setAttribute('style', 'display:grid');
    battlegroundDiv.setAttribute('style', 'display:grid');
    // if there is no opponent & player is undefeated,
    if (!opponent && roles[player]._healthPoints > 0) {
      // add attributes onclick() so user can choose their opponent by calling pickOpponent() function
      setAttributes(cardDiv, {
        // add 'this' as an argument of pickRoles() to grab reference to the target of the click event
        'onclick': 'pickOpponent(this)',
        // add curser:pointer 
        'class': 'pointer'
      });
    }
  }
  // create an h3 element and save to h3 variable
  let h3 = document.createElement('h3');
  // insert role name in h3
  h3.innerText = role.name;
  // create an img element and save to img variable
  let img = document.createElement('img');
  // add the following attributes to img
  setAttributes(img, {
    // for correct image diplayed
    'src': role.imageUrl,
    // for screen readers
    'alt': role.name + ' Coat of Arms',
  });
  // create an h4 element and save to h4 variable
  let h4 = document.createElement('h4');
  // insert role healthPoints in h4
  h4.innerText = 'Health Points: ' + role._healthPoints;
  // build role card appropriately by appending h3, img, and h4 in proper order
  cardDiv.append(h3, img, h4);
  // grab reference to the area where we want the role card to be rendered and save to area variable
  let htmlArea = document.getElementById(area);
  // append role card to area.
  htmlArea.prepend(cardDiv);
}

// function to start game by rendering all roles to DOM so user can choose their player.
function startGame() {
  // loop through all roles 
  for (let key in roles) {
    // render each role to DOM to div with id='all-roles'
    renderRoleCards(roles[key], 'all-roles');
  }
  // call gameMessage() to display to player 'Choose Your Player'
  gameMessage();
}
// Call startGame() to initiate game.
startGame();

// function to pick player role
function pickRole(value) {
  // empty historyDiv as role history will only be show while choosing a player
  historyDiv.remove();
  // remove all-roles div as list of enemies will appear elsewhere
  allRolesdDiv.remove();
  // assign clicked value.id to player
  player = value.id;
  // loop through all roles
  for (let key in roles) {
    // if  a role name matches the value.id 
    if (roles[key].name === value.id) {
      // render the card in player div
      renderRoleCards(roles[key], 'player');
    } else {
      // else push roles to enemies array
      enemies.push(roles[key].name);
      // and render role cards to undefeated section
      renderRoleCards(roles[key], 'undefeated');
    }
  }
  // // call gameMessage() to display 'choose Your Opponent'
  gameMessage();
  // // call gameStats() to display 'Stats' title  
  gameStats();
  // save values for globals to use in game stats
  playerStartingAttackPower = roles[player]._attackPower;
  playerStartingHealthPoints = roles[player]._healthPoints;
  updatedPlayerAttackPower = roles[player]._attackPower;
  updatedPlayerHealthPoints = roles[player]._healthPoints;
}

// function to choose an opponent throughout game
function pickOpponent(value) {
  // if event goes off when global opponent is falsey it means that there is no opponent
  if (!opponent) {
    // first empty opponent div
    opponentDiv.innerHTML = "";
    // give opponent value of value.id
    opponent = value.id;
    // find index of opponent in enemies array
    let opponentIndex = enemies.indexOf(opponent);
    // remove opponent from enemies array
    enemies.splice(opponentIndex, 1);
    // empty undefeated cards to re-render updated enemies array
    undefeatedCardsDiv.innerHTML = "";
    // re-render undefeated enemies cards
    for (let i = 0; i < enemies.length; i++) {
      renderRoleCards(roles[enemies[i]], 'undefeated');
    }
    // render the chosen opponent card to opponent section on DOM
    renderRoleCards(roles[opponent], 'opponent');
  }
  // call gameMessage to show 'Attack Opponent'
  gameMessage();
  // call createAttackButton()
  createAttackButton();
  // save values for globals to use in game stats
  opponentStartingHealthPoints = roles[opponent]._healthPoints;
  updatedOpponentHealthPoints = roles[opponent]._healthPoints;
  currentOpponentCounterAttackPower = roles[opponent].counterAttackPower;
  lastOpponent = opponent;
  lastNumAttacks = numAttacks;
  // call gameStats to replace 'End of Battle' stats with 'No stats yet'
  gameStats();
}

// changeScore() function will update player's score after every attack button click
function changeScore() {
  // increase numAttacks to give player more attack power at next attack
  numAttacks++;
  // increase player's attackPower by numAttacks and update playerAttackPower for next attack
  updatedPlayerAttackPower = playerStartingAttackPower * numAttacks;
  // re-value opponentHealthPoints by decreasing by player's attackPower
  updatedOpponentHealthPoints -= updatedPlayerAttackPower;
  // call opponent object healthPoints setter and give argument of updated opponentHealthPoints
  roles[opponent].healthPoints = updatedOpponentHealthPoints;
  // Opponent Counter Attack Power changes for a more chanllenging game
  // if Baratheon defending against Stark, increase Baratheon counterAttackPower
  if (player === roles["House Stark"].name && opponent === roles["House Baratheon"].name) {
    currentOpponentCounterAttackPower = 10;
  }
  // if Targaryen defending against Baratheon, lower Targaryen counterAttackPower
  if (player === roles["House Baratheon"].name && opponent === roles["House Targaryen"].name) {
    currentOpponentCounterAttackPower = 4;
  }
  // decrease player's healthPoints by opponent's counterAttackPower
  updatedPlayerHealthPoints -= currentOpponentCounterAttackPower;
  // call player object healthPoints setter and give argument of new playerHealthPoints
  roles[player].healthPoints = updatedPlayerHealthPoints;
  // call showHPsChangeOnCards for player
  showHPsChangeOnCards();
  // show player stats change
  gameStats();
}

// function to show player stats changes
function gameStats() {
  // first empty gameStatsDiv
  gameStatsDiv.innerHTML = '';
  // create p element
  let p = document.createElement('p');
  // if 0 numAttack OR player has not attacked new opponent
  if (numAttacks === 0 || opponentStartingHealthPoints === updatedOpponentHealthPoints) {
    p.innerText = 'Stats: No Attacks Yet';
    // if opponent HealthPoints are less than or equal to 0, opponent defeated
  } else if (updatedOpponentHealthPoints <= 0) {
    // call opponentExtinction
    opponentExtinction();
  } else if (updatedPlayerHealthPoints <= 0) {
    // call gameOver with 'loser' as string
    gameOver('loser');
  } else {
    // create during battle stata message
    p.innerText = `Last Attack Power: ${updatedPlayerAttackPower}
    New Attack Power: ${updatedPlayerAttackPower + playerStartingAttackPower}
    Opponent's Attack Power: ${currentOpponentCounterAttackPower}
    Opponent Health Points: ${updatedOpponentHealthPoints}
    Your Health Points: ${updatedPlayerHealthPoints}
    `;
  }
  // append message to gameStatsDiv
  gameStatsDiv.appendChild(p);
}

// called when an opponent has > 0 healthPoints from gameStats()
function opponentExtinction() {
  // first empty gameStatsDiv
  gameStatsDiv.innerHTML = '';
  // create p element
  let p = document.createElement('p');
  // make sure that numAttack per battle is a positive # (is negative at first call)
  let numAttacksInBattle = Math.abs(lastNumAttacks - numAttacks)
  // show battle end stats
  p.innerText = `End of Battle Stats:
    
    Total Number of Attacks: 
    ${numAttacksInBattle}
    
    Attack Power Raised To: 
    ${updatedPlayerAttackPower+playerStartingAttackPower}
    From: 
    ${updatedPlayerAttackPower-(playerStartingAttackPower * (numAttacksInBattle -1))}
    
    ${lastOpponent} Reduced Your Health Points By: 
    ${numAttacksInBattle * currentOpponentCounterAttackPower}
    `;
  // append message to gameStatsDiv
  gameStatsDiv.appendChild(p);
  // remove attack button to prevent bugs
  attackBtnDiv.innerHTML = '';
  // push defeated role card to defeated area with all other defeated enemies
  renderRoleCards(roles[opponent], 'defeated');
  // empty opponent div
  opponentDiv.innerHTML = '';
  // then empty opponent variable
  opponent = '';
  // empty undefeated cards div,
  undefeatedCardsDiv.innerHTML = '';
  // and re-render undefeated cards with pickOpponent onClick
  for (let i = 0; i < enemies.length; i++) {
    renderRoleCards(roles[enemies[i]], 'undefeated');
  }
  // get # of defeated enemies to check if game is over or is continuing
  // find 'defeated' element on the DOM
  let defeatedEnemies = document.getElementById('defeated');
  // count element children in defeated section
  let numberDefeatedEnemies = defeatedEnemies.children.length;
  // if all four enemies have are there player has won the game
  if (numberDefeatedEnemies === 4) {
    gameOver('winner');
  }
  // check if player is still alive after last defeat, if so they lost at their last battle
  if (updatedPlayerHealthPoints <= 0) {
    gameOver('depleted');
  }
  // call gameMessage() to show appropriate message of Game Over or Pick Opponent
  gameMessage();
}

// function that delivers end of game message
function gameOver(string) {
  // remove attack button to prevent bugs
  attackBtnDiv.innerHTML = '';
  // empty information div
  gameStatsDiv.innerHTML = '';
  // create p element
  let p = document.createElement('p');
  // declare variable to hold appropriate message
  let messageText;
  // if player health points are > 0
  if (string === 'winner') {
    messageText = "Congratulations, You defeated all of your opponents and are now sitting pretty on the Iron Throne! You attacked a total of " + numAttacks + " times, ended with an attack power of " + updatedPlayerAttackPower + ", and lost " + (playerStartingHealthPoints - updatedPlayerHealthPoints) + " health points. Refresh the page to try again, but next time challange yourself by attempting to beat the game with less total attacks and/or by keeping more of your health points. Good Luck!";
  }
  // if opponent health points > 0
  if (string === 'loser') {
    messageText = "You were defeated by " + lastOpponent + "! Before your untimely defeat you attacked a total of " + numAttacks + " times, and ended with an attack power of " + updatedPlayerAttackPower + ". Refresh the page and try again, but pick the order of your opponents differently next time. Good Luck!";
  }
  // if both player and opponent have < 0 health points
  if (string === 'depleted') {
    messageText = lastOpponent + " decided that they weren't going quietly into the night but rather take you down with them, so it looks like neither of your houses will be sitting on the Iron Throne. Before your untimely defeat you attacked a total of " + numAttacks + " times, and ended with an attack power of " + updatedPlayerAttackPower + ". Refresh the page to try again, but next time get more experience (total number of attacks) before taking on " + lastOpponent + ". Good Luck!";
  }
  gameStatsDiv.append(messageText, p);
}

// Function to decide which game message should be displayed throughout the game
function gameMessage() {
  // empty gameMessageDiv
  gameMessageDiv.innerText = "";
  // if user has not chosen their player role,
  if (!player) {
    // message is following:
    let pickPlayerMessage = 'Choose Your Player';
    gameMessageDiv.append(pickPlayerMessage);
    // if player has yet to choose an opponent & there are still enemies left
  } else if (!opponent && enemies.length > 0) {
    // message is following:
    let pickOpponentMesage = 'Choose Your Opponent';
    gameMessageDiv.append(pickOpponentMesage);
    // else if there is an opponent & player has not been defeated
  } else if (opponent && updatedPlayerHealthPoints > 0) {
    // message is following:
    gameMessageDiv.append('Attack Your Opponent!');
  } else {
    // else message is following:
    gameMessageDiv.append('Game Over');
  }
}

// function to create attack button
function createAttackButton() {
  // create button element
  let attackBtn = document.createElement('button');
  attackBtn.innerText = 'Attack';
  // give attack button onclick event
  setAttributes(attackBtnDiv, {
    'onclick': 'changeScore()'
  });
  // append button element to attackBtn div
  attackBtnDiv.append(attackBtn);
}

// Change Health Points on player and opponent cards
function showHPsChangeOnCards() {
  // grab player and opponent elements
  let playerCard = document.getElementById(player);
  let opponentCard = document.getElementById(opponent);
  // last child of role card is where health points are located (see renderRoleCards())
  let opponentH4 = opponentCard.lastChild;
  let playerH4 = playerCard.lastChild;
  // update role's health points
  opponentH4.innerText = 'Health Points: ' + updatedOpponentHealthPoints;
  playerH4.innerText = 'Health Points: ' + updatedPlayerHealthPoints;

}

// function to toggle game objective information
function toggleObjective() {
  // call toggleElement to reduce code
  toggleElement('game-objective', 'x', 'Open Objective', 'Close Objective');
}

// function for moreInfo display
function displayMoreInfo() {
  // call toggleElement to reduce code
  toggleElement('moreInfo', 'info', 'More Info', 'Less Info');
}

// showHistory() function shows player role history. 
function showHistory(value) {
  // empty historyDiv to avoid more than one role history showing at once
  historyDiv.innerText = "";
  // loop through all keys in roles object
  for (let key in roles) {
    // if the value of the id is equal to role name,
    if (value.id === roles[key].name) {
      // insert role history in historyDiv
      historyDiv.innerText = roles[key].history;
    }
  }
}

// function that toggles elements between open and close.
function toggleElement(elementToToggle, eventElement, stringWhenClosed, stringWhenOpened) {
  // grab element that needs to be toggled from DOM and save to toggledElement var
  let toggledElement = document.getElementById(elementToToggle);
  // grab the element that will trigger the open and closing of the toggledElement and save to triggerElement var
  let triggerElement = document.getElementById(eventElement);
  // empty text inside triggerElement
  triggerElement.innerText = '';
  // grab value of toggledElement's style attribute and save it to currentDisplay
  let currentDisplay = toggledElement.getAttribute('style');
  // if style is display:none -- (**** Note **** Add to in-line style to HTML and not CSS or first click will not trigger event)
  if (currentDisplay === 'display:none') {
    // set attribute to display:block
    toggledElement.setAttribute('style', 'display:block');
    // change innerText that signals click to close
    triggerElement.innerText = stringWhenOpened;
  } else {
    // else set attribute to display:none
    toggledElement.setAttribute('style', 'display:none');
    // change innerText that signals click to open
    triggerElement.innerText = stringWhenClosed;
  }
}

// Function to add several attributes to an element rather than adding one attribute at a time (see toggleObjective()).
function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}