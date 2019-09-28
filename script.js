/* QUIZ CONTROLLER we will work on data which will appear in user interface and will be managed through UICONTROLLER QCONTROLLER UICONTROLLER will work independantly, CONTROLLER will let UICONTROLLER to recieve data from QUIZCONTROLLER*/

var quizController = (function() {
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


var UIController = (function() {

  var num1 = 30;

  return {
    sum: function(num2) {
      return num1 + num2;
    }
  }
})();

var controller  = (function(quizCtrl, UICtrl){

  console.log(UICtrl.sum(100) + quizCtrl.publicMethod());

})(quizController, UIController);