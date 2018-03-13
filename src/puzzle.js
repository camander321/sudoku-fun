export function Puzzle() {
  this.board = [];

  this.loadBoard = function(inputBoard) {
    var board = this.board;
    inputBoard.forEach(function(inputCol, x) {
      board.push([]);
      inputCol.forEach(function(inputCell) {
        if (inputCell < 1)
          board[x].push([1,2,3,4,5,6,7,8,9]);
        else
          board[x].push([inputCell]);
      });
    });
  };

  this.makeBoard = function() {
    for (var x = 0; x < 9; x++) {
      this.board.push([]);
      for (var y = 0; y < 9; y++) {
        this.board[x].push([1,2,3,4,5,6,7,8,9]);
      }
    }
  };

  this.rowNeighbor = function(x, y) {
    var rowNeighbors = [];
    for (var rowX = 0; rowX < 9; rowX++) {
      var neighbor = this.board[rowX][y];
      if (neighbor.length == 1 && rowX != x) rowNeighbors.push(neighbor[0]);
    }
    return rowNeighbors;
  };

  this.colNeighbor = function(x, y) {
    var colNeighbors = [];
    for (var colY = 0; colY < 9; colY++) {
      var neighbor = this.board[x][colY];
      if (neighbor.length == 1 && colY != y) colNeighbors.push(neighbor[0]);
    }
    return colNeighbors;
  };

  this.boxNeighbor = function(x, y) {
    var boxNeighbors = [];
    var startX = x - (x % 3);
    var startY = y - (y % 3);
    for (var boxX = startX; boxX < startX + 3; boxX++) {
      for (var boxY = startY; boxY < startY + 3; boxY++) {
        var neighbor = this.board[boxX][boxY];
        if (neighbor.length == 1 && !(boxY == y && boxX == x)) boxNeighbors.push(neighbor[0]);
      }
    }
    return boxNeighbors;
  };

  this.updateCell = function(x, y) {
    var cell = this.board[x][y];
    if (cell.length == 1) return false;
    var neighborhood = this.rowNeighbor(x, y);
    neighborhood = neighborhood.concat(this.colNeighbor(x, y));
    neighborhood = neighborhood.concat(this.boxNeighbor(x, y));
    // debugger;

    // var neighborhood = [];
    // var neighbor;
    // for (var rowX = 0; rowX < 9; rowX++) {
    //   neighbor = this.board[rowX][y];
    //   if (neighbor.length == 1) neighborhood.push(neighbor[0]);
    // }
    // for (var colY = 0; colY < 9; colY++) {
    //   neighbor = this.board[x][colY];
    //   if (neighbor.length == 1) neighborhood.push(neighbor[0]);
    // }

    // var startX = x - (x % 3);
    // var startY = y - (y % 3);
    // for (var boxX = startX; boxX < startX + 3; boxX++) {
    //   for (var boxY = startY; boxY < startY + 3; boxY++) {
    //     neighbor = this.board[boxX][boxY];
    //     if (neighbor.length == 1) neighborhood.push(neighbor[0]);
    //   }
    // }
    // var possibilities = this.board[x][y].length;
    // this.board[x][y] = this.board[x][y].filter(num => !neighborhood.includes(num));
    // return possibilities != this.board[x][y].length;
    var newCell = cell.filter(cellNum => !neighborhood.includes(cellNum));

    if (newCell.length == cell.length) return false;
    this.board[x][y] = newCell;
    return true;
  };

  this.updateBoard = function() {
    var changed = false;
    for (var x = 0; x < 9; x++) {
      for (var y = 0; y < 9; y++) {
        changed = changed || this.updateCell(x, y);
      }
    }
    return changed;
  };

  this.solvable = function() {
    var solvable = true;
    for (var x = 0; x < 9; x++) {
      for (var y = 0; y < 9; y++) {
        var cell = this.board[x][y];
        if (cell.length == 1) {
          var neighborhood = this.rowNeighbor(x, y);
          neighborhood = neighborhood.concat(this.colNeighbor(x, y));
          neighborhood = neighborhood.concat(this.boxNeighbor(x, y));
          solvable = solvable && !neighborhood.includes(cell[0]);
        }
      }
    }
    return solvable;
  };
  this.solve = function() {
    while (this.updateBoard());
  };
}
