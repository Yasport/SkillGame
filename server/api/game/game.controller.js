/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/games              ->  index
 * POST    /api/games              ->  create
 * GET     /api/games/:id          ->  show
 * PUT     /api/games/:id          ->  upsert
 * PATCH   /api/games/:id          ->  patch
 * DELETE  /api/games/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import { Game } from '../../sqldb';
import config from '../../config/environment';
import Sequelize from 'sequelize';
import { Question } from '../../sqldb';
import { Answer } from "../../sqldb";
import db from "../../sqldb"



const Op = Sequelize.Op;

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function (entity) {
    try {
      // eslint-disable-next-line prefer-reflect
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch (err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function (entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Games
export function index(req, res) {
  return Game.findAll({
  // include : [db.User]
  include: [{
    model: db.User,
    as: 'User2',
    attributes : ["name"]
},
{
  model: db.User,
  as: 'User1',
  attributes :  ["name"]
}],
attributes : { exclude : ["User1Id","User2Id"]}
  })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function freeGame(req, res) {

  return Game.findAll({
    where: {
      User1Id: { $ne: req.user._id },
      ConceptId: req.params.id,
      User2Id: null
    },
    order: Sequelize.fn('RANDOM')
  }).then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}


export function game(req, res) {
  

  return Game.findAll({

    where: {
      $or: {
        user1Id: req.user._id,
        User2Id :req.user._id
      }
     
    },
    
    include: [{
      model: db.User,
      as: 'User2',
      attributes : ["name","avatar"]
  },
  {
    model: db.User,
    as: 'User1',
    attributes :  ["name","avatar"]
  },{
    model : db.Concept
  }
]
  }).then(response => {

    if (response.length <1){
      console.log("on a pas de partie")
    }
    else{
      response[0].dataValues["me"] = req.user._id
    }
    return response
  })
  .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Game from the DB
export function show(req, res) {
  return Game.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}


// Creates a new Game in the DB
function allcreation(tab, donne, iduser,res) {

console.log("all creation")

  var taille = tab.length;
  var idquizz = donne._id
  console.log(idquizz)
  for (var i = 0; i < taille; i++) {

    var creation1 = {
      QuestionId: tab[i].dataValues._id,
      UserId: iduser,
      GameId: idquizz
    }

    if(donne.User2Id != undefined){
    var creation2 = {
      QuestionId: tab[i].dataValues._id,
      GameId: idquizz,
      UserId : donne.User2Id
    }}

    else{
      var creation2 = {
        QuestionId: tab[i].dataValues._id,
        GameId: idquizz
      }
    }

    Answer.create(creation1)
    Answer.create(creation2)

  }
  return
}

export function create(req, res) {
  req.body.User1Id = req.user._id
  console.log(req.body)
  console.log("serieux ?")
  var a = Game.create(req.body)
  return (a) 
    .then(response => {
      console.log("on essaye de passer par la")
      Question.findAll({
        order: Sequelize.fn('RANDOM'),
        limit: 2,
        where : {
          ConceptID : req.body.ConceptId
        }
      })
      .then(succes => allcreation(succes, response.dataValues, req.user._id))
     
      return response
      
    }).then(respondWithResult(res, 201))
   
}


function regularisation(idquizz,idplayer) {
  console.log("coucou toi")
  console.log(idquizz)
  return Answer.findAll({
    where: {
      GameId: idquizz,
      UserId: null
    }
  }).then(response => ajoutmultiple(response,idplayer))
}

function ajoutmultiple(tab,idplayer){
  console.log("coucou ici ")
  var taille = tab.length;
  for (var i = 0; i < taille; i++){
    var bla = {
      UserId : idplayer
    }
    console.log(tab[i].dataValues._id)
    Answer.update(bla,{
      where : {
        _id : tab[i].dataValues._id
      }
    })
  }
}

export function endgame(req,res){
  console.log("c est l heure du duellllll")
  console.log(req.params.id)
  var me = req.user._id

  return Game.find({
    where :{
      _id: req.params.id
    }
  }).then(response =>{
    console.log("ici toi ")
    console.log(response.dataValues)

    if(response.dataValues.User1Id == me){
      var obj = {
        _id : req.params.id,
        user1Ended:true
      }
    }
    else{
      var obj = {
        _id : req.params.id,
        user2Ended:true
      }
    }
      
    return Game.upsert(obj,{
      where : {
        _id : req.params.id
      }
    })
  })
  .then(respondWithResult(res))
}

// Upserts the given Game in the DB at the specified ID
export function upsert(req, res) {
  req.body.User2Id = req.user._id
  /*if(req.body._id) {
    console.log("on passe ici")
    Reflect.deleteProperty(req.body, '_id');
  }*/
  return Game.upsert(req.body, {
    where: {
      _id: req.params.id
    }
  }).then(regularisation(req.params.id,req.user._id))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Game in the DB
export function patch(req, res) {
  if (req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Game.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Game from the DB
export function destroy(req, res) {
  return Game.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
