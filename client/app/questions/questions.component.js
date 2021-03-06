import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './questions.routes';

export class QuestionsController {
  $http;
  //socket;
  allConceptId=[];
  awesomeConcept = [];
  awesomeConceptId = {}
  newConcept = '';
  currentConcept = [];
  choice = false;
  controleQuestion = false;
  question = ""
  goodAnswer = ""
  WrongAnswer1 = ""
  WrongAnswer2 = ""
  WrongAnswer3 = ""
  idNewQuestion = ""
  message = "";

 


  /*@ngInject*/
  constructor($http, $scope /*, socket*/, $window,$stateParams, Auth) {
    this.$http = $http;
    //this.socket = socket;
    this.$window=$window;
    this.$stateParams = $stateParams;
    this.showme = true;
    this.showus = true;
    this.currentScore = 0;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.listAwards = [];
    this.correctanswernumber=0;
    this.lastAward = [];


   $scope.cloud = [],

  this.$scope = $scope

    $scope.$on('$destroy', function () {
      //socket.unsyncUpdates('concept');
    });
  }

  $onInit() {

    var variable2 = '#badge-award';
    var myE2 = angular.element( document.querySelector( variable2 ) );
    myE2.removeAttr('style');
    myE2.attr('style',"display: none;");

    var variable2 = '#required_field';
    var myE2 = angular.element( document.querySelector( variable2 ) );
    myE2.removeAttr('style');
    myE2.attr('style',"display: none;");


   
    this.$http.get('/api/concepts/numberquestion')
      .then(response => {
        this.awesomeConcept = response.data;
      //  console.log(this.awesomeConcept)
        this.$scope.cloud = []
        for (var i = 0; i < response.data.length; i++) {
         var a = { text :  response.data[i]["Concept"].name, weight: response.data[i]["total"] , link :"http://"+ this.$window.location.host + "/questions/"+ response.data[i].ConceptId}
         this.$scope.cloud.push(a)
          this.awesomeConceptId[response.data[i]["Concept"]._id] = {name :response.data[i]["Concept"].name, nombre : response.data[i].total }      
        }
        

       // console.log(this.awesomeConceptId)
        if(this.awesomeConceptId[this.$stateParams.id] != undefined){ 
          console.log("on passe dans le if")   
          this.currentConcept = {"ConceptId" : this.$stateParams.id,name : this.awesomeConceptId[this.$stateParams.id]["name"] }
          this.choice = true;
        }

      });
  }



  choix_concept(concept) {

    this.currentConcept = concept.Concept;
    this.choice = true;

  }





  addQuestion() {

    
    if (this.goodAnswer != "" && this.question != "" && this.WrongAnswer1 != "" && this.WrongAnswer2 != "" && this.WrongAnswer3 != "") {
      console.log("tu as tout rempli génial")
      this.$http.post("/api/questions", {
        question: this.question,
        nbAppearance: 0,
        nbContestation: 0,
        ConceptId: this.currentConcept._id,
        goodAnswer: this.goodAnswer,
      })
      .then(response => {
        this.idNewQuestion = response.data._id
        console.log(this.idNewQuestion)
        this.$http.post("/api/choices", {
          QuestionId: this.idNewQuestion,
          statement: this.WrongAnswer1
        })
        this.$http.post("/api/choices", {
          QuestionId: this.idNewQuestion,
          statement: this.WrongAnswer3
        })
        this.$http.post("api/choices", {
          QuestionId: this.idNewQuestion,
          statement: this.WrongAnswer2
        })
        this.$http.post("api/choices", {
          QuestionId: this.idNewQuestion,
          statement: this.goodAnswer
        }
        
      )

      this.goodAnswer ="";
      this.WrongAnswer1 ="";
      this.WrongAnswer2 ="";
      this.WrongAnswer3 = "";
      this.question = "";

      var variable2 = '#badge-award';
      var myE2 = angular.element( document.querySelector( variable2 ) );
      myE2.removeAttr('style');
      myE2.attr('style',"display: inline;");

      var variable2 = '#required_field';
      var myE2 = angular.element( document.querySelector(variable2) );
      myE2.removeAttr('style');
      myE2.attr('style',"display: none;");

      this.$http.get('/api/badges/'+20)
          .then(response => {
            this.badge = response.data;
            console.log(this.badge);
      });


      this.putUserAward();

      })
    }
    else {

      var variable2 = '#required_field';
      var myE2 = angular.element( document.querySelector( variable2 ) );
      myE2.removeAttr('style');
      myE2.attr('style',"display: inline;");

      var variable2 = '#badge-award';
      var myE2 = angular.element( document.querySelector( variable2 ) );
      myE2.removeAttr('style');
      myE2.attr('style',"display: none;");

    }
    console.log(this.message)
  }


  showButtonHandler() {

    if(this.showme == true) {
      this.showme = false;
    } else {
      this.showme = true;
    }

    if(this.showus == true) {
      this.showus = false;
    } else {
      this.showus = true;
    }
    
  }

        putUserAward(){
          
          this.$http.get('/api/awards/user/badge/'+ 20)
          .then(response => {

            this.detailAwards = response.data;

            console.log(this.detailAwards);

            if(this.detailAwards.length == 0){

              this.$http.post("/api/awards/create/", {
                BadgeId : 20,
                badgeCount : 1,
                date: new Date(),
              });

            } else {
              
              var badgeC = this.detailAwards[0].badgeCount + 1;

              this.$http.put("/api/awards/"+this.detailAwards[0]._id, {
                badgeCount : badgeC,
                _id: this.detailAwards[0]._id
              });
            }

          });
                    
          }
  

}


export default angular.module('skillGameApp.questions', [uiRouter])
  .config(routing)
  .component('questions', {
    template: require('./questions.html'),
    controller: QuestionsController
  })
.name;