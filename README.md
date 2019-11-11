# Game of Thrones RPG 

## What is Game of Thrones RPG ?

Game of Thrones RPG (role playing game) is a [JavaScript](https://en.wikipedia.org/wiki/JavaScript) game application that runs on the browser.

A player chooses one of five characters as their player while the remaining four characters become the player's enemies to defeat. 

The object of the game is for the player to attack and defeat all four enemies before losing all of their health points. 

## How does Game of Thrones RPG work?

Game of Thrones RPG uses JavaScript ES6 to power the game, and uses some event handlers defined on the [GlobalEventHandlers](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers) mixin and implemented by [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document).

- `onmousever` 
- `onclick` 

Using several [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)  methods to get and/or set the HTML within the specified element, the game is able to keep the player updated with the game's progression. 

## What does Game of Thrones RPG do?

Upon loading, the user is asked to pick a `playerRole` out of five possible roles. Once chosen, the user is asked to pick their first `currentOpponent` out of the four remaining roles. When an opponent is chosen, an attack button is displayed. The player then clicks on the attack button and watches how their scores updates to either defeat or get defeated by their opponent. If they defeat the opponent, the player then chooses the next `currentOpponent` out of the remaining enemies until none are left.

Each of the five roles have varying number of `healthPoints`, `attackPower`, and `counterAttackPower`, although the player is only able to see the `healthPoints` of each role.

The player's `attackPower` multiplies by the number of attacks the player has accumulated throughout the game therefore increasing their chances of winning after each attack. 

Some roles have their `counterAttackPower` altered depending on the `playerRole` in order to add difficulty to the game, although **the player is able to defeat all four enemies no matter which `playerRole` they choose**, as each role is able to defeat the four remaining roles given the order the player chooses to attack the enemies is *correct*.

The game ends:

1. If the player defeats all four enemies while keeping `healthPoints > 0`.
2. If the player reaches `healthPoints < 0` before defeating all four enemies.
3. If the player and the opponent both reach `healthPoints < 0`  during an attack (*A player's attack and the opponent's counter-attack are evaluated simultaneously*).



## Technologies Used

HTML

CSS

JavaScript



## Credits

[Meyerweb](http://meyerweb.com/eric/tools/css/reset/) CSS reset 

[Google Fonts](https://fonts.google.com/specimen/UnifrakturMaguntia)

[Pixaby](https://fonts.google.com/specimen/UnifrakturMaguntia) images

> Written with [StackEdit](https://stackedit.io/)
