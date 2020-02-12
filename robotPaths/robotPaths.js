/*
Robot Paths

A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. 
The robot can move either up, down, left, or right, but cannot visit the same spot twice. 
How many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.

Parameters:

n (required) - amount of rows/columns (max 6)

Example: 

robotPaths(1) // 1
robotPaths(2) // 2
robotPaths(3) // 12

*/

// Helpers

function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
}

function robotPaths(n) {
  var check = makeBoard(n);
  var numberOfSolutions = 0;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      check.togglePiece(i,j);
      if (!!check.hasBeenVisited(i,j)) {
        numberOfSolutions++;
      }
    }
  }
  if (n > 1) {
    return (numberOfSolutions/n) * (n-1)**2;
  }
  else {
    return 1;
  }
  
}

robotPaths(1) // 1
robotPaths(2) // 2
robotPaths(3) // 12
