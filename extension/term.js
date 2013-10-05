window.addEventListener('DOMContentLoaded', function() {
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

  var term = $('.term');
  term.find = $;

}, false);
