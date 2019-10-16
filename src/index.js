// Create roles object
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

// Grab reference to DOM game divs
const allRolesdDiv = document.getElementById('all-roles');
const historyDiv = document.getElementById('history-div');
const opponentDiv = document.getElementById('opponent');
const undefeatedCardsDiv = document.getElementById('undefeated');
const gameMessageDiv = document.getElementById('game-message');
const attackBtnDiv = document.getElementById('attack-button');
const gameStatsDiv = document.getElementById('game-stats');

// Declare game variables
let player;
let enemies = [];
let opponent;

// Variables to track of, and update scores
let numAttacks = 0; 
let playerStartingAttackPower;
let playerStartingHealthPoints;
let updatedPlayerAttackPower;
let updatedPlayerHealthPoints;
let opponentStartingHealthPoints;
let updatedOpponentHealthPoints;
let currentOpponentCounterAttackPower;
let lastNumAttacks;
let lastOpponent;

// Function that renders specific role cards to specific game areas on the DOM
function renderRoleCards(role, area) {
  // Create a <div> element, and set attributes
  let cardDiv = document.createElement('div');
  setAttributes(cardDiv, {
    'class': 'card',
    'id': role.name
  });
  // If area is "all-roles", role card should allow for the player to choose it as a role
  if (area === 'all-roles') {
    setAttributes(cardDiv, {
      'onmouseover': 'showHistory(this)',
      'onclick': 'pickRole(this)'
    });
  }
  // If area is "undefeated", role card should allow for the player to choose it as an opponent
  if (area === 'undefeated') {
    const enemiesDiv = document.getElementById('enemies');
    const battlegroundDiv = document.getElementById('battle-ground');
    // change attribute style display from none to grid
    enemiesDiv.setAttribute('style', 'display:grid');
    battlegroundDiv.setAttribute('style', 'display:grid');
    // if there is no opponent & player is undefeated,
    if (!opponent && roles[player]._healthPoints > 0) {
      setAttributes(cardDiv, {
        'onclick': 'pickOpponent(this)',
        'class': 'pointer'
      });
    }
  }
  // Create an <h3> element for role name
  let h3 = document.createElement('h3');
  h3.innerText = role.name;

  // Create <img> element with appropriate attributes
  let img = document.createElement('img');
  setAttributes(img, {
    'src': role.imageUrl,
    'alt': role.name + ' Coat of Arms'
  });

  // Create an <h4> element for role health points
  let h4 = document.createElement('h4');
  h4.innerText = 'Health Points: ' + role._healthPoints;

  // Build role card
  cardDiv.append(h3, img, h4);

  // Grab reference to appropriate DOM area and append the role card
  const htmlArea = document.getElementById(area);
  htmlArea.prepend(cardDiv);
}

// Function that starts game by rendering all roles to DOM so user can choose a player
function startGame() {
  // Loop through all roles in roles object
  for (let key in roles) {
    if(roles.hasOwnProperty(key)){
      // Call `renderRoleCards` function for each role
      renderRoleCards(roles[key], 'all-roles');
    }
  }
  // call gameMessage() to display to player 'Choose Your Player'
  gameMessage();
}

// Call startGame() to initiate game.
startGame();

// Function that picks player role
function pickRole(value) {
  // Remove historyDiv and unchosen roles
  historyDiv.remove();
  allRolesdDiv.remove();

  // Assign clicked value.id to player
  player = value.id;

  // Loop through all roles
  for (let key in roles) {
    // Render the matching role to the DOM
    if (roles[key].name === value.id) {
      renderRoleCards(roles[key], 'player');
    } else {
      // Else push roles to enemies array and render them to their own area on the DOM
      enemies.push(roles[key].name);
      renderRoleCards(roles[key], 'undefeated');
    }
  }
  gameMessage();
  gameStats();

  // Update values for globals to use in game stats
  playerStartingAttackPower = roles[player]._attackPower;
  playerStartingHealthPoints = roles[player]._healthPoints;
  updatedPlayerAttackPower = roles[player]._attackPower;
  updatedPlayerHealthPoints = roles[player]._healthPoints;
}

// Function to choose an opponent throughout game
function pickOpponent(value) {
  // If event goes off when global opponent is falsey it means that there is no opponent
  if (!opponent) {
    // Empty opponent div and set new opponent value
    opponentDiv.innerHTML = "";
    opponent = value.id;
    // Find opponent in enemies array and remove them from it
    let opponentIndex = enemies.indexOf(opponent);
    enemies.splice(opponentIndex, 1);
    // Empty undefeated cards and then re-render updated enemies array
    undefeatedCardsDiv.innerHTML = "";
    for (let i = 0; i < enemies.length; i++) {
      renderRoleCards(roles[enemies[i]], 'undefeated');
    }
    // Render the chosen opponent card to opponent section on the DOM
    renderRoleCards(roles[opponent], 'opponent');
  }
  gameMessage();
  createAttackButton();

  // Update values for globals to use in game stats
  opponentStartingHealthPoints = roles[opponent]._healthPoints;
  updatedOpponentHealthPoints = roles[opponent]._healthPoints;
  currentOpponentCounterAttackPower = roles[opponent].counterAttackPower;
  lastOpponent = opponent;
  lastNumAttacks = numAttacks;
  gameStats();
}

// Function that updates player's score after every attack
function changeScore() {
  // Increase number of attacks, then increase player's attack power by number of attacks to update player attack power for next attack
  numAttacks++;
  updatedPlayerAttackPower = playerStartingAttackPower * numAttacks;
  // Decrease opponent's health points by decreasing it by player's attack power
  updatedOpponentHealthPoints -= updatedPlayerAttackPower;
  // Call opponent object healthPoints setter and give argument of updated opponent healthpoints
  roles[opponent].healthPoints = updatedOpponentHealthPoints;

  // Opponent counter attack powers that change for a more chanllenging game:
  // If Baratheon defending against Stark, increase Baratheon counter attack power
  if (player === roles["House Stark"].name && opponent === roles["House Baratheon"].name) {
    currentOpponentCounterAttackPower = 10;
  }
  // if Targaryen defending against Baratheon, lower Targaryen counter attack power
  if (player === roles["House Baratheon"].name && opponent === roles["House Targaryen"].name) {
    currentOpponentCounterAttackPower = 4;
  }

  // Decrease player's health points by opponent's counter attack power
  updatedPlayerHealthPoints -= currentOpponentCounterAttackPower;
  // Call player object healthPoints setter and give argument of new player health points
  roles[player].healthPoints = updatedPlayerHealthPoints;
  // Show updated health points on role cards
  showHPsChangeOnCards();

  gameStats();
}

// Function that updates player stats
function gameStats() {
  // Empty gameStatsDiv
  gameStatsDiv.innerHTML = '';
  // Create <p> element
  let p = document.createElement('p');
  // If 0 numAttack OR player has not attacked new opponent
  if (numAttacks === 0 || opponentStartingHealthPoints === updatedOpponentHealthPoints) {
    p.innerText = 'Stats: No Attacks Yet';
    // If opponent health points are less than or equal to 0, opponent has been defeated
  } else if (updatedOpponentHealthPoints <= 0) {
    opponentExtinction();
    // If player health points are less than or equal to 0, player has been defeated
  } else if (updatedPlayerHealthPoints <= 0) {
    gameOver('loser');
    // Else battle is in progress
  } else {
    p.innerText = `You attacked with 
                  Attack Power of: ${updatedPlayerAttackPower}
                  Opponent attacked you back with
                  Attack Power of: ${currentOpponentCounterAttackPower}
    `;
  }
  gameStatsDiv.appendChild(p);
  gameMessage();
}

// Function that updates opponent status
function opponentExtinction() {
  // Empty gameStatsDiv
  gameStatsDiv.innerHTML = '';
  // Create <p> element
  let p = document.createElement('p');
  // Make sure that numAttack per battle is a positive # (is negative at first call)
  let numAttacksInBattle = Math.abs(lastNumAttacks - numAttacks);
  // Show battle end stats
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

  gameStatsDiv.appendChild(p);
  // Remove attack button
  attackBtnDiv.innerHTML = '';
  // Place defeated role card to defeated area on the DOM
  renderRoleCards(roles[opponent], 'defeated');
  // Empty opponent div
  opponentDiv.innerHTML = '';
  // Empty opponent variable
  opponent = '';
  // Empty undefeated cards div, and re-render with `pickOpponent` onClick
  undefeatedCardsDiv.innerHTML = '';
  for (let i = 0; i < enemies.length; i++) {
    renderRoleCards(roles[enemies[i]], 'undefeated');
  }
  // Get # of defeated enemies to check if game is over or is continuing
  const defeatedEnemies = document.getElementById('defeated');
  let numberDefeatedEnemies = defeatedEnemies.children.length;
  // If all four enemies are defeated, player has won the game
  if (numberDefeatedEnemies === 4) {
    gameOver('winner');
  }
  // If player's health points are depleted, gameOver()
  if (updatedPlayerHealthPoints <= 0) {
    gameOver('depleted');
  }
  gameMessage();
}

// Function that delivers end of game message
function gameOver(string) {
  // Empty attack button div
  attackBtnDiv.innerHTML = '';
  // Empty information div
  gameStatsDiv.innerHTML = '';
  // Create p element
  let p = document.createElement('p');
  // Declare variable to hold appropriate message
  let messageText;
  // Ff player health points are > 0
  if (string === 'winner') {
    messageText = "Congratulations, You defeated all of your opponents and are now sitting pretty on the Iron Throne! You attacked a total of " + numAttacks + " times, ended with an attack power of " + updatedPlayerAttackPower + ", and lost " + (playerStartingHealthPoints - updatedPlayerHealthPoints) + " health points. Refresh the page to try again, but next time challange yourself by attempting to beat the game with less total attacks and/or by keeping more of your health points. Good Luck!";
  }
  // If opponent health points > 0
  if (string === 'loser') {
    messageText = "You were defeated by " + lastOpponent + "! Before your untimely defeat you attacked a total of " + numAttacks + " times, and ended with an attack power of " + updatedPlayerAttackPower + ". Refresh the page and try again, but pick the order of your opponents differently next time. Good Luck!";
  }
  // If both player and opponent have < 0 health points
  if (string === 'depleted') {
    messageText = lastOpponent + " decided that they weren't going quietly into the night but rather take you down with them, so it looks like neither of your houses will be sitting on the Iron Throne. Before your untimely defeat you attacked a total of " + numAttacks + " times, and ended with an attack power of " + updatedPlayerAttackPower + ". Refresh the page to try again, but next time get more experience (total number of attacks) before taking on " + lastOpponent + ". Good Luck!";
  }
  gameStatsDiv.append(messageText, p);
}

// Function that chooses the game message that is displayed throughout the game
function gameMessage() {
  // Empty gameMessageDiv
  gameMessageDiv.innerText = "";
  gameMessageDiv.setAttribute('style', 'background:#10054abf;');
  // If user has not chosen their player role,
  if (!player) {
    let pickPlayerMessage = 'Choose Your Player';
    gameMessageDiv.append(pickPlayerMessage);
    // If player is still alive and has not defeated current opponent
  } else if (opponent && updatedPlayerHealthPoints > 0) {
    gameMessageDiv.append('Attack Your Opponent!');
    gameMessageDiv.setAttribute('style', 'background:#330303b3;');
    // If player has no points left
  } else if (updatedPlayerHealthPoints <= 0) {
    gameMessageDiv.append('Game Over');
    gameMessageDiv.setAttribute('style', 'background:#330303b3;');
    // If player has yet to choose an opponent & there are still enemies left
  } else if (!opponent && enemies.length > 0) {
    let pickOpponentMesage = 'Choose Your Opponent';
    gameMessageDiv.append(pickOpponentMesage);
    // Else player has won
  } else {
    let playerWinsMessage = "You are the Supreme Ruler of the Seven Kingdoms!";
    gameMessageDiv.append(playerWinsMessage);
  }
}

// Function that creates the attack button and appends it the the DOM
function createAttackButton() {
  // Create button element
  let attackBtn = document.createElement('button');
  attackBtn.innerText = 'Attack';
  // Give attack button onclick event
  setAttributes(attackBtnDiv, {
    'onclick': 'changeScore()',
    'class' : 'attackBtn attackBtnDiv'
  });
  attackBtnDiv.append(attackBtn);
}

// Function that updates healthpoints on player and opponent cards
function showHPsChangeOnCards() {
  // Grab player and opponent elements
  let playerCard = document.getElementById(player);
  let opponentCard = document.getElementById(opponent);
  // Last child of role card is where health points are located
  let opponentH4 = opponentCard.lastChild;
  let playerH4 = playerCard.lastChild;
  // Update role's health points
  opponentH4.innerText = 'Health Points: ' + updatedOpponentHealthPoints;
  playerH4.innerText = 'Health Points: ' + updatedPlayerHealthPoints;

}

// Function that shows player history before player chooses a role
function showHistory(value) {
  historyDiv.setAttribute('style', 'background-color: #000000bf;');
  // Empty historyDiv to avoid more than one role history showing at once
  historyDiv.innerText = "";
  // Loop through all keys in roles object to get and display appropriate role history
  for (let key in roles) {
    if (value.id === roles[key].name) {
      historyDiv.innerText = roles[key].history;
    }
  }
}

// Function that toggles game objective information
function toggleObjective() {
  toggleElement('game-objective', 'x', 'Open', 'Close');
}

// Function that toggles webpage information
function displayMoreInfo() {
  toggleElement('moreInfo', 'info', 'More Info', 'Less Info');
}

// ** HELPER FUNCTIONS **

// Function that toggles elements between open and close.
function toggleElement(elementToToggle, eventElement, stringWhenClosed, stringWhenOpened) {
  // Grab element to toggle
  const toggledElement = document.getElementById(elementToToggle);
  // Grab element that triggers each toggle
  const triggerElement = document.getElementById(eventElement);
  // Empty text inside trigger element
  triggerElement.innerText = '';
  // Grab display style of element to toggle
  let currentDisplay = toggledElement.getAttribute('style');
  // If display is 'none', set display to 'block', else set to display 'none'
  if (currentDisplay === 'display:none') {
    toggledElement.setAttribute('style', 'display:block');
    triggerElement.innerText = stringWhenOpened;
  } else {
    toggledElement.setAttribute('style', 'display:none');
    triggerElement.innerText = stringWhenClosed;
  }
}

// Function to add several attributes to an element rather than adding one attribute at a time
function setAttributes(el, attrs) {
  for (let key in attrs) {
    if(attrs.hasOwnProperty(key)){
      el.setAttribute(key, attrs[key]);
    }
  }
}