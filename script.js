/* QUIZ CONTROLLER we will work on data which will appear in user interface and will be managed through UICONTROLLER QCONTROLLER UICONTROLLER will work independantly, CONTROLLER will let UICONTROLLER to recieve data from QUIZCONTROLLER*/


/*************************************************************************QUIZCONTROLLER****************************************************************/
var quizController = (function() {

/*********Question Constructor**********/
function Question(id, questionText, options, correctAnswer) {

  this.id = id;
  this.questionText = questionText;
  this.options = options;
  this.correctAnswer = correctAnswer;
}


}) ();

/*************************************************************************UICONTROLLER****************************************************************/
var UIController = (function() {

  var domItems = {
    /********Admin Panal Elements*********/
    questInsertBtn: document.getElementById('question-insert-btn')
  };

  return {
    getdomItems: domItems
  };

})();

/*************************************************************************CONTROLLER****************************************************************/
var controller  = (function(quizCtrl, UICtrl){

  UICtrl.getdomItems.questInsertBtn.addEventListener('click', function(){
    console.log('this is a button clicked')
  })

})(quizController, UIController);