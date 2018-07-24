const View = require("./ttt-view.js");// require appropriate file
const Game = require("../solution/game.js");//require appropriate file

$( () => {
  // Your code here

  const g = new Game();

  const find_container = $("figure.ttt");

  const v = new View(g,find_container);
  // const $lis = find_container.find("li");
  // v.on("click", v.makeMove($lis.eq(0)));
  find_container.append(v.setupBoard());




});
