import { Puzzle } from './../src/puzzle.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  var table = $('#table');

  for (var i = 0; i < 9; i++) {
    table.append("<tr>");
    for (var j = 0; j < 9; j++) {
      table.append("<td><input type='number' id='" + i + "-" + j + "'>");
    }
    table.append("</tr>");
  }


  $('#solve-button').click(function(event) {
    event.preventDefault();
    var puzzle = new Puzzle();
    puzzle.makeBoard();
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var id = i + "-" + j;
        var input = $("#" + id).val();
        if (input != "") puzzle.board[i][j] = [parseInt(input)];
      }
    }
    if (puzzle.solvable()) {
      puzzle.solve();
      for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
          id = i + "-" + j;
          $("#" + id).val(puzzle.board[i][j][0]);
        }
      }
    }
  });

  $('#load-button').click(function(event) {
    event.preventDefault();
    var solution1 = [
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
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var id = i + "-" + j;
        $("#" + id).val(solution1[i][j]);
      }
    }
  });

  $('#clear-button').click(function(event) {
    event.preventDefault();
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var id = i + "-" + j;
        $("#" + id).val("");
      }
    }
  });

});
