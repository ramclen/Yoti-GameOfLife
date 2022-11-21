import {Board} from './Board.js'
import {Game} from './Game.js'
import {GameOfLifeRules} from './GameOfLifeRules.js'

function main() {
  const board = new Board([
    [0, 0, 0, -1, 1],
    [0, 0, 0,  1, 1],
    [1, 1, 0,  0, 0],
    [1, 1, 0,  1, 1],
    [1, 1, 0,  0, 0],
  ]);
  const rules = new GameOfLifeRules();
  const game = new Game(board, rules);

  // setInterval(()=>{
    game.showBoard(console.log);

    game.nextTurn();
    game.showBoard(console.log);
  // }, 1000)
}

main();
