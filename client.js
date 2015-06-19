/**
 * Created by silasmartinez on 6/18/15.
 */

client = {
  claimBlock: function (players, block, event) {
    if (players.indexOf(block) === -1) {
      if (event) {
        game.board[event.target.dataset.id] = game.activePlayer
        event.srcElement.innerHTML = game.activePlayer
      }
      return true
    } else {
      return false
    }
  },
  paintGame: function (myBoard) {
    var blocks = grid.getElementsByTagName('div')
    for (var i = 0; i < blocks.length; i++) {
      _position = i + 1
      _position = '' + _position
      blocks[i].innerHTML = myBoard[_position]
    }
    next.innerHTML = 'Next Up: ' + game.activePlayer.toUpperCase()
  }
}

var players = new Players()
var game = new Game()
var grid = document.getElementById('grid'),
  next = document.getElementById('nextUp')

grid.onclick = function (e) {
  if (e.target.dataset.id) {
    // console.log(e.target.dataset.id)
    client.claimBlock(players.getBoth(), e.target.dataset.id, e)
    players.addBlock(game.activePlayer, e.target.dataset.id)

    if (game.isWinner(players)) {
      alert(game.activePlayer.toUpperCase() + ' is the winner!')
      game = new Game()
      players = new Players()
      client.paintGame(game.board)
    } else if (game.turnCount === 9) {
      game = new Game()
      players = new Players()
      client.paintGame(game.board)
      alert('Draw!')
    } else {
      game.newTurn()
    }
  }
}
