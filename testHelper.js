module.exports = {

    tetsting: function() {
      const firsttype = 
        [
          '',
          '',
          '',
          ''
        ];
      return firsttype;
    },
  
    winGame: function(browser) {
      var winningSequence = 
        [
          '',
          '',
          '',
          ''
        ];
      winningSequence.forEach(function(point) {
        browser.pressButton(point);
      });
    },
  
    fullGame: function(browser) {
      var fillSequence = 
        [
          '',
          '',
          '',
          ''
        ];
      fillSequence.forEach(function(point) {
        browser.pressButton(point);
      });
    }
  }