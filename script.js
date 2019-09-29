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

  var questionLocalStorage = {
    setQuestionCollection: function(newCollection){
      localStorage.setItem('questionCollection', JSON.stringify(newCollection));
    },
    getQuestionCollection: function(){
      return JASON.parse(localStorage.getitem('questionCollection'))
    },
    removeQuesitonCollection: function(){
      localStorage.removeItem('questionCollection');
    }
  };

  return {
    addQuestionOnLocalStorage: function(newQuestText, opts) {
      var optionsArr, corrAns, questionId, newQuestion;

      optionsArr = [];

      questionId = 0;

      for (var i = 0; i < opts.length; i++) {
        if(opts[i].value !== "") {
          optionsArr.push(opts[i].value);
        }

        if(opts[i].previousElementSibling.checked && opts[i].value !== "") {
          corrAns = opts[i].value;
        }
      }

      newQuestion = new Question(questionId, newQuestText.value, optionsArr, corrAns);
      console.log(newQuestion);
    }
  };

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
    quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText, selectedDomItems.adminOptions);
  })

})(quizController, UIController);