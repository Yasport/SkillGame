import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './questions.routes';

export class QuestionsController {
  $http;
  socket;
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
  constructor($http, $scope, socket, $window,$stateParams, Auth) {
    this.$http = $http;
    this.socket = socket;
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
      socket.unsyncUpdates('concept');
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


   
    this.$http.get('/api/concepts')
      .then(response => {
        this.awesomeConcept = response.data;
        this.$scope.cloud = []
        for (var i = 0; i < response.data.length; i++) {
         var a = { text :  response.data[i].name, weight: i , link :"http://"+ this.$window.location.host + "/questions/"+ response.data[i]._id}
         this.$scope.cloud.push(a)
          this.awesomeConceptId[response.data[i]._id] = {name :response.data[i].name }      
        }

        if(this.awesomeConceptId[this.$stateParams.id] != undefined){
         
          
          this.currentConcept = {"_id" : this.$stateParams.id,name : this.awesomeConceptId[this.$stateParams.id]["name"] }
        
          this.choice = true;
        }

        
       
      }
      
    )

      
      ;
  }



  choix_concept(concept) {
/*
    
    for (var i = 0; i < this.allConceptId.length; i++) {
      var variable = '#concept-'+this.allConceptId[i];
      var myEl = angular.element( document.querySelector( variable ) );
      myEl.removeAttr('class');
    }
    var variable = '#concept-'+concept._id;
    var myEl = angular.element( document.querySelector( variable ) );
    myEl.attr('class',"active");
    color: #fff;
    background-color: #166e70*/

    this.currentConcept = concept;
    console.log(this.currentConcept)
    this.choice = true;
   // console.log(this.controleQuestion)

   // console.log(" Je suis this.currentConcept._id");
   // console.log(this.currentConcept._id);
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

      this.putUserAward();
      this.getUserAwards();

      var variable2 = '#required_field';
      var myE2 = angular.element( document.querySelector( variable2 ) );
      myE2.removeAttr('style');
      myE2.attr('style',"display: none;");

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

  getUserAwards(){
          this.$http.get('/api/awards/')
          .then(response => {
            this.listAwards = response.data;
            this.socket.syncUpdates('award', this.listAwards);
            console.log("List aqards --");
            console.log(this.listAwards);
          });
          
        }

/*
       existUserBadge(uId,cId,bId){

          this.$http.get('/api/awards/'+uId+'/'+cId+'/'+bId)
          .then(response => {
            this.detailAwards = response.data;
            console.log(response.status, response.data.length);
          });
          
          if(this.detailAwards.length == 0) {
            console.log("logitud 0 ?");
            return false;
          }
          else {
            console.log("True Exist");
            return true;
          }

        }
  */

        putUserAward(){
                    
          this.$http.get('/api/awards/badge/'+ 20)
          .then(response => {
            this.detailAwards = response.data;
            this.$scope.detailAwards = this.detailAwards;
            console.log(response.status, response.data.length);

            if(this.detailAwards.length == 0){
              this.$http.post("/api/awards", {
                UserId : this.getCurrentUser()._id,
                ConceptId : 1,
                BadgeId : 20,
                badgeCount : 1,
                date: new Date(),
              });
              
              
            }else{
              
              console.log("avant Else PutUser");
              console.log(this.detailAwards);
              
              var badgeC = this.detailAwards[0].badgeCount + 1;
              this.$http.put("/api/awards/"+this.detailAwards[0]._id, {
                badgeCount : badgeC,
                _id: this.detailAwards[0]._id
              });

              console.log("Apres Else PutUser");
              console.log(this.detailAwards); 
            }
            this.getUserAwards();

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