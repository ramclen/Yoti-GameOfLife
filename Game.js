export class Game {
  constructor(board, rules){
    this.board = board;
    this.rules = rules;
    
  }

  isInsideBoundaries(array, [j,i]){
    return (j >= 0 && j-1 < array[0].length-1) 
    && (i >= 0 && i-1 < array.length-1);
  }

  isCellAliveInPos(array, [j, i]) {
    if(this.isInsideBoundaries(array, [j, i])){
      console.log('isInside bounderies')
      console.log({array})
      const neighbour = array[j][i];
      console.log({neighbour})
      return neighbour === 1;
    }
    return false;
  }

  generateNeighboursPositions(j, i) {
    return [
        [j-1, i-1], [j-1, i], [j-1, i+1],
        [j, i-1], [j, i+1], 
        [j+1, i-1], [j+1, i], [j+1, i+1]
      ]
    
  }

  getAliveNeighbours(array, [j, i]){
    let neighboursCount = 0;

    this.generateNeighboursPositions(j, i)
      .forEach(([j, i])=>{
        console.log([j,i])
        if(this.isCellAliveInPos(array, [j, i])){
          console.log("is alive");
          neighboursCount++;
        }
      })

    return neighboursCount;
  }

  nextTurn(){
    const array = this.board.getBoardAsArray();
    
    for(let j= 0; j < array.length; j++ ){
      for(let i= 0; i < array[0].length; i++){
        
        const isNotEmpty = array[j][i] !== 0
        if(isNotEmpty){ 
          const numberOfNeighbours = this.getAliveNeighbours(array, [j,i]);
          
          console.log([j, i],numberOfNeighbours)
          let nextStateCell = this.rules.apply(array[j][i], numberOfNeighbours);
          this.board.update(nextStateCell, [j, i])
          console.log(nextStateCell);
        }
      }
    }
    this.board.commitChanges();
  }

  showBoard(screenAdapter) {
    screenAdapter(this.board.getBoardAsArray());
  }
}