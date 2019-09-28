var quizController = (function () {
  var private = 10;

  var privateFn = function(a) {
    return a + private;
  }

  return {
    publicMethod: function(){
      return privateFn(20);
    }
  };

}) ();