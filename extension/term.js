$ = function(sel) {
  var self = this;
  if (self === window) {
    self = document;
  }
  if (sel[0] === '#') {
    return self.getElementById(sel.slice(1));
  }
  else {
    return self.querySelector(sel);
  }
};

var socket = io.connect('http://localhost:4109');


window.addEventListener('DOMContentLoaded', function() {
  var term = $('.terminal');
  term.find = $;

  var input = term.find('input');
  var prompt = term.find('.prompt');

  var handler = function() {
    input.addEventListener('input', function() {
      socket.emit('input', input.value);
    }, false);
  };

  socket.on('connect', handler);

  socket.on('output', function (data) {
    console.log(data);
  });

}, false);
