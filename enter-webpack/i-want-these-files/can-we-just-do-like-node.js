var someLibHere = require('someLibHere');
var someOtherFile = require('../annnd-these-files/some-other-file.js');

var doSomethingNew = new someLibHere(someOtherFile);

// Do some stuff

module.exports = {
  iDidSomethingNew: doSomethingNew
};