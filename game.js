function Players () {
  this.x = []
  this.o = []
}

Players.prototype.getBoth = function () {
  return this.x.concat(this.o)
}

Players.prototype.addBlock = function (player, block) {
  this[player].push(parseInt(block))
}

function Game () {
  this.activePlayer = 'x'
  this.turnCount = 0
  this.winningCombos = [[1, 2, 3], [4, 5, 6],
    [7, 8, 9], [1, 4, 7], [2, 5, 8],
    [3, 6, 9], [1, 5, 9], [3, 5, 7]]
  this.board = {
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': '',
    nextUp: 'X'
  }
}

Game.prototype.isWinner = function (_players) {
  var player = _players[this.activePlayer]
  console.log('checking for winner: ' + this.activePlayer + ': ' + player)
  var won = false
  this.winningCombos.forEach(function (ele) {
    if (won) {return }
    var count = 0
    ele.forEach(function (intEle) {
      if (player.indexOf(intEle) !== -1) {
        count++
      }
      if (count === 3) {
        won = true
        return
      }
    })
  })
  return won
}

Game.prototype.newTurn = function () {
  if (this.activePlayer === 'x') {
    this.activePlayer = 'o'
  } else {
    this.activePlayer = 'x'
  }
  this.board.nextUp = this.activePlayer.toUpperCase()
  client.paintGame(this.board)
  this.turnCount++
}

// export block here
module.exports = {
  firstTest: first,
  game: game,
  players: players
}
