code = require('../game.js')
describe('#firstTest():', function () {
  it('test:', function () {
    expect(code.firstTest('code')).toEqual('result')
  })
})

code.players.x = [1, 3, 2]
code.players.o = [2]

describe("#isWinner()", function () {
  it("see if winning combo in ", function () {
    code.game.activePlayer = 'x'
    expect(code.game.isWinner()).toEqual(true)
  });
  it("see if winning combo not in ", function () {
    code.game.activePlayer = 'o'
    expect(code.game.isWinner()).toEqual(false)
  });
});
