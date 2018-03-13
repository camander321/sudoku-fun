// var Puzzle = require('./../src/puzzle.js').puzzleModule;
import { Puzzle } from './../src/puzzle.js';


describe('Puzzle', function() {
  var solution1 = [
    [1,7,5,2,9,4,8,3,6],
    [6,2,3,1,8,7,9,4,5],
    [8,9,4,5,6,3,2,7,1],
    [5,1,9,7,3,2,4,6,8],
    [3,4,7,8,5,6,1,2,9],
    [2,8,6,9,4,1,7,5,3],
    [9,3,8,4,2,5,6,1,7],
    [4,6,1,3,7,9,5,8,2],
    [7,5,2,6,1,8,3,9,4]
    [[1],[7],[5],[2],[9],[4],[8],[3],[6]],
    [[6],[2],[3],[1],[8],[7],[9],[4],[5]],
    [[8],[9],[4],[5],[6],[3],[2],[7],[1]],
    [[5],[1],[9],[7],[3],[2],[4],[6],[8]],
    [[3],[4],[7],[8],[5],[6],[1],[2],[9]],
    [[2],[8],[6],[9],[4],[1],[7],[5],[3]],
    [[9],[3],[8],[4],[2],[5],[6],[1],[7]],
    [[4],[6],[1],[3],[7],[9],[5],[8],[2]],
    [[7],[5],[2],[6],[1],[8],[3],[9],[4]]
  ];
  var board1 = [
    ["",7,5,"",9,"","","",6],
    ["",2,3,"",8,"","",4,""],
    [8,"","","","",3,"","",1],
    [5,"","",7,"",2,"","",""],
    ["",4,"",8,"",6,"",2,""],
    ["","","",9,"",1,"","",3],
    [9,"","",4,"","","","",7],
    ["",6,"","",7,"",5,8,""],
    [7,"","","",1,"",3,9,""]
  ];

  // beforeEach(function() {
  //
  // });

  it('should test board is loaded correctly', function() {
    var puzzle = new Puzzle();
    puzzle.loadBoard(board1);
    expect(puzzle.board[0][1][0]).toEqual(board1[0][1]);
    expect(puzzle.board[0][2][0]).toEqual(board1[0][2]);
  });

  it('should update possible number array for given cell', function() {
    var puzzle = new Puzzle();
    puzzle.loadBoard(board1);
    // expect(puzzle.board[2][1].length).toEqual(9);
    puzzle.updateCell(2, 1);
    expect(puzzle.board[2][1][0]).toEqual(9);
    // expect(puzzle.board[2][1].length).toEqual(1);
  });

  it('should update solve puzzle', function() {
    var puzzle = new Puzzle();
    puzzle.loadBoard(board1);
    puzzle.solve();
    expect(puzzle.board).toEqual(solution1);
    // expect(puzzle.board[2][1].length).toEqual(1);
  });
});
