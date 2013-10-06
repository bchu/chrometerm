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


var line = function(text) {
  var li = document.createElement('li');
  li.textContent = text;
  return li;
};

window.addEventListener('DOMContentLoaded', function() {
  var term = $('.terminal');
  term.find = $;

  var output = term.find('.output');
  var input = term.find('textarea');
  var sizeInput = term.find('.text-copy');

  var outputHandler = function(data) {
    if (data === '[H[2J') {
      output.innerHTML = '';
    }
    else if (data) {
      var li = line(data);
      output.appendChild(li);
    }
  };
  socket.on('stdout', outputHandler);
  socket.on('stderr', outputHandler);

  var handler = function() {
    input.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        var cmd = input.value.replace('/\n/g', '');
        socket.emit('input', cmd);
        setTimeout(function() {
          input.value = '';
          autoSize();
        },4);
        outputHandler(cmd);
      }
    }, false);
  keypress.combo("ctrl c", function() {
    socket.emit('input');
  });

  };

  socket.on('connect', handler);


  var autoSize = function autoSize() {
    // Copy textarea contents; browser will calculate correct height of copy,
    // which will make overall container taller, which will make textarea taller.
    var text = input.value.replace(/\n/g, '<br/>');
    sizeInput.innerHTML = text;
  };
  autoSize();

  input.addEventListener('change',autoSize);
  input.addEventListener('keydown',autoSize);
  input.addEventListener('keyup',autoSize);

}, false);
