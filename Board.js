function copyNestedArray (target, array) {
  for(let j= 0; j < array.length; j++ ){
    target[j] = [...array];
  }
  return target;
}

export class Board {
  constructor(initialState){
    this.state = initialState;
    this.nextState = copyNestedArray([], initialState);
  }

  update(cellState, [j, i]){
    this.nextState[j][i] = cellState;
  }

  commitChanges() {
    this.state = copyNestedArray([], this.nextState);
  }


  getBoardAsArray() {
    return this.state;
  }
}