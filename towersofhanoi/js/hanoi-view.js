class View {
  constructor(game, $el) {
    this.game = game;
    this.container = $el;
    this.setupTowers();
    // this.render();
    this.bindEvents();
    this.current_pos = null;
    this.desired_pos = null;
  }
  bindEvents() {
    this.container.on("click","ul",((ele)=> {
      this.clickTower($(ele.currentTarget));
    // this.container.on("click","ul",(() =>{console.log("click is working");
    }));
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      let $ul = $("<ul></ul>");
      for (let j = 0; j < 3; j++) {
        let $li = $("<li></li>");
        if (i === 0) {
          $li.addClass(`disk-${j+1}`);
        }
        $ul.data("tower_pos", i);
        $ul.append($li);
       }
       this.container.append($ul);
    }
  }

  render() {
    // const new_container = $("figure");
    const towers = this.game.towers;
    for (let i = 0; i < 3; i++) {
      let $ul = $("<ul></ul>");
      for (let j = 2; j >= 0; j--) {
        let $li = $("<li></li>");
        if (towers[i][j] != undefined) {
          $li.addClass(`disk-${towers[i][j]}`);
        }
        $li.data("tower_pos", i);
        $ul.append($li);
       }
       this.container.append($ul);
     }
     // console.log(new_container);
     // this.container.replace(new_container);
  }

  clickTower($tower){

    if (this.current_pos === null) {
      // console.log("first click");
      this.current_pos = $tower.data("tower_pos");
      // console.log(this.current_pos);

    }
    else {
      console.log("second click");
      this.desired_pos = $tower.data("tower_pos");

      if (this.game.isValidMove(this.current_pos,this.desired_pos)) {
        this.game.move(this.current_pos,this.desired_pos);
        this.render();
        this.decideWinner();
      }
      else {
        alert("Your move is not valid");
      }
    }

    this.current_pos = null;
    this.desired_pos = null;

  }

  decideWinner() {
    if (this.game.isWon()) {
      console.log("Congrats! You Won");
    }
  }

}
module.exports = View;
