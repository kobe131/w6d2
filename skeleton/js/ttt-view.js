class View {
  constructor(game, $el) {
    this.game = game;
    this.container = $el;
    this.bindEvents();
  }

  bindEvents() {
    this.container.on("click", "li", ((ele)=>{
      this.makeMove($(ele.currentTarget));
    }));

  }

  makeMove($square) {

    const pos = $square.data("position");
    if (this.game.board.isEmptyPos(pos) && !this.game.isOver()){
      $square.addClass(this.game.currentPlayer);
      this.game.playMove(pos);
      if (this.game.isOver() && this.game.winner()) {
          const $h2 = $("h2").addClass("won");
          $h2.text(`You win,${this.game.winner()}`);
        }else if (this.game.isOver() && !this.game.winner()){
          const $h2 = $("h2").addClass("won");
          $h2.text(`It's a draw`);
        }
    }
    else {
      return alert("You picked the wrong move!!");
    }
  }

  setupBoard() {
    const setul = $("<ul></ul>");
    for(let i=0; i < 3; i++) {
      for (let j=0; j < 3; j++){
        const setli = $("<li></li>");
        setli.data("position",[i,j]);
        setul.append(setli);
      }
    }
    return setul;
  }
}

module.exports = View;
