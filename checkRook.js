/* 
Loop through matrix
When I find 'R' I will take note of row and col index
make function that calls 4 checkDirection functions
Use recession for each function
*/
const checkRook = ( board ) =>{
    for(let row = 0; row < board.length; row += 1){
        for(let col = 0; col < board.length; col += 1){
            if(board[row][col] === 'R'){
                return check(row, col, board);
            }
        }
    }
}

const check = (row, rowIndex, board) => {
  const checkRight = ( row, rowIndex ) => {
    let target = board[row][rowIndex + 1];
        if(target === 'p'){
            return 1;
        }
            if(target === 'B'){
                return 0;
            }
                if(!target){
                    return 0;
                }
                return checkRight(row, rowIndex + 1);
    }
  )
}
const checkLeft = ( row, rowIndex ) => {
    let target = board[row][rowIndex - 1];
        if(target === 'p'){
            return 1;
        }
            if(target === 'B'){
                return 0;
            }
                if(!target){
                    return 0;
                }
                return checkLeft(row, rowIndex - 1);
    }

  const checkUp = ( row, rowIndex ) => {
      if(board[row - 1]){
    let target = board[row-1][rowIndex];
        if(target === 'p'){
            return 1;
        }
            if(target === 'B'){
                return 0;
            } 
                return checkUp( row -1 , rowIndex);
                }
                return 0;
    }

    const checkDown = ( row, rowIndex ) => {
        if(board[row + 1]{
      let target = board[row + 1][ rowIndex ];
          if(target === 'p'){
              return 1;
          }
              if(target === 'B'){
                  return 0;
              } 
                  return checkDown(row - 1, rowIndex);
                  }
                  return 0;
      }

     return   checkLeft(row, rowIndex) + 
             checkRight(row, rowIndex) +
             checkUp(row, rowIndex) +
             checkDown(row, rowIndex)
            ;
    }









 
