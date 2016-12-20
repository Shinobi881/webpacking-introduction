var myFriend = require('./myFriend.js');
var libNotNecessary = require('libNotNecessary');

function keepingItPure(input) {
  return input.map(libNotNecessary);
};

module.exports = {
  doSomethingNew: keepingItPure,
  notMyFriend: myFriend
};