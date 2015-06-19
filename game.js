//code goes here

var first = function () {
  return 'result'
}

var players = {
  x: [],
  o: [],
  getBoth: function () {
    return this.x.concat(this.y)
  },
  addBlock: function (player, block) {
    this[player].push(parseInt(block))
  }
}

var game = {
  activePlayer: 'x',
  turnCount: 0,
  winningCombos: [[1, 2, 3], [4, 5, 6],
    [7, 8, 9], [1, 4, 7], [2, 5, 8],
    [3, 6, 7], [1, 5, 9], [3, 5, 7]],
  isWinner: function () {
    var player = players[this.activePlayer]
    console.log('checking for winner: ' + this.activePlayer + ': ' + player  )
    var won = false
    this.winningCombos.forEach(function (ele) {
      if (won) {return}
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
  },
  newTurn: function () {
    if (this.activePlayer === 'x'){
      this.activePlayer = 'o'
    } else {
      this.activePlayer = 'x'
    }
    next.innerHTML = 'Next Up: ' + this.activePlayer.toUpperCase()
    this.turnCount++
  }
}


//export block here
module.exports = {
  firstTest: first,
  game: game,
  players: players
}


