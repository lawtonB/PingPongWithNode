var pingPong = require('./ping-pong.js').pingPong;
var prompt = require('prompt');
prompt.start();

prompt.get('goal', function(error, result){
  var result = pingPong(result.goal);
  result.forEach(function(element){
    console.log(element)
  });
});
