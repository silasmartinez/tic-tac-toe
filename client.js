/**
 * Created by silasmartinez on 6/18/15.
 */

client = {
  claimBlock: function (players, block, event) {
    if (players.indexOf(block) === -1) {
      if (event) {
        event.srcElement.innerHTML = game.activePlayer
      }
      return true
    } else {
      return false
    }
  },
  resetGame: function () {
    var blocks = grid.getElementsByTagName('div')
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].innerHTML = ''
    }
    game.activePlayer = 'x'
    game.turnCount = 0
    players.o = []
    players.x = []
    next.innerHTML = 'Next Up: X'

  }
}

var grid = document.getElementById('grid'),
  next = document.getElementById('nextUp')

grid.onclick = function (e) {
  if (e.target.dataset.id) {
    console.log(e.target.dataset.id)
    client.claimBlock(players.getBoth(), e.target.dataset.id, e)
    players.addBlock(game.activePlayer, e.target.dataset.id)
    if (game.isWinner(players[game.activePlayer])){
      alert(game.activePlayer.toUpperCase() + ' is the winner!')
      client.resetGame()
    } else if (game.turnCount === 9){
      alert('Draw!')
      client.resetGame()
    }
    game.newTurn()
  }
}