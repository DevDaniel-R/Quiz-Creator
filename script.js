/* QUIZ CONTROLLER we will work on data which will appear in user interface and will be managed through UICONTROLLER QCONTROLLER UICONTROLLER will work independantly, CONTROLLER will let UICONTROLLER to recieve data from QUIZCONTROLLER*/


/*************************************************************************QUIZCONTROLLER****************************************************************/
var quizController = (function() {

  localStorage.setItem('data', JSON.stringify([1,2,3,4]));
  localStorage.setItem('data', JSON.stringify({name: 'John'}));
  localStorage.removeItem('data');
  console.log(JSON.parse(localStorage.getItem('data')))

}) ();

/*************************************************************************UICONTROLLER****************************************************************/
var UIController = (function() {

})();

/*************************************************************************CONTROLLER****************************************************************/
var controller  = (function(quizCtrl, UICtrl){

})(quizController, UIController);