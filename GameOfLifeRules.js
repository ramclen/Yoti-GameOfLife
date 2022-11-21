export class GameOfLifeRules {
  constructor() {}

  apply(cell, numberOfNeighbours){
    if (cell === 1 ) {
      if ( numberOfNeighbours < 2 ) {
        return -1
      }
      if( numberOfNeighbours == 2 || numberOfNeighbours == 3) {
        return 1
      }

      if( numberOfNeighbours > 3 ) {
        return -1
      }
    } else{
      if (numberOfNeighbours == 3){
        return 1
      }
    } 
  }
}