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


// function to hide game objective when user clicks the X on it
function hideObjective() {
  // grab game-objective div from the DOM
  let objective = document.getElementById('game-objective');
  objective.setAttribute('style', 'display:none');
}

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
      'onmouseover': 'showHistory(this)'
    });
  }
  // create an h3 element and save to h3 variable
  let h3 = document.createElement('h3');
  // insert role name inside h3 via .innerText
  h3.innerText = role.name;
  // create an img element and save to img variable
  let img = document.createElement('img');
  // add the following attributes to img
  setAttributes(img, {
    'src': role.imageUrl,
    'alt': role.name + ' Coat of Arms',
  });
  // create an h4 element and save to h4 variable
  let h4 = document.createElement('h4');
  // insert role _healthPoints inside h4 via .innerText
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
  for (let key in roles) {
    renderRoleCards(roles[key], 'all-roles');
  }
}
// Call startGame() to initiate game.
startGame();

// grab reference to the area where we want role history to be rendered and save to gameMessageDiv variable  
let gameMessageDiv = document.getElementById('game-message');
// showHistory() function shows player role history. 
function showHistory(value) {
  // empty gameMessageDiv to avoid more than one role history showing at once
  gameMessageDiv.innerHTML = "";
  // loop through all keys in roles object
  for (let key in roles) {
    // if the value of the id is equal to role name,
    if (value.id === roles[key].name) {
      // create a p element and save it to historyParagraph variable,
      let historyParagraph = document.createElement('p');
      // append historyParagraph as child node of gameMessageDiv
      gameMessageDiv.appendChild(historyParagraph);
      // append role history to historyParagraph
      historyParagraph.append(roles[key].history);
    }
  }
}

// Function to add several attributes to an element rather than adding one attribute at a time (see hideObjective()).
function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}


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