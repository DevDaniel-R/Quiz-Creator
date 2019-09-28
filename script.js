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

  return {
    addQuestionOnLocalStorage: function(newQuestText, opts) {
      console.log('clicked newQuestText')
    }
  }


}) ();

/*************************************************************************UICONTROLLER****************************************************************/
var UIController = (function() {

  var domItems = {
    /********Admin Panal Elements*********/
    questInsertBtn: document.getElementById('question-insert-btn'),
    newQuestionText: document.getElementById('new-question-text'),
    adminOptions: document.querySelectorAll('.admin-option')
  };

  return {
    getDomItems: domItems
  };

})();

/*************************************************************************CONTROLLER****************************************************************/
var controller  = (function(quizCtrl, UICtrl){
  var selectedDomItems = UICtrl.getDomItems;

  selectedDomItems.questInsertBtn.addEventListener('click', function() {
    quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestText, selectedDomItems.adminOptions);
  })

})(quizController, UIController);