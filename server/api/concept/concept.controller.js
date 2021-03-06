/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/concepts              ->  index
 * POST    /api/concepts              ->  create
 * GET     /api/concepts/:id          ->  show
 * PUT     /api/concepts/:id          ->  upsert
 * PATCH   /api/concepts/:id          ->  patch
 * DELETE  /api/concepts/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import {Concept} from '../../sqldb';
import {Question} from "../../sqldb"
import Sequelize from 'sequelize';
import db from '../../sqldb';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      // eslint-disable-next-line prefer-reflect
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Concepts
export function index(req, res) {
  return Concept.findAll()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function question(req,res){
  return Question.findAll({
    attributes: [[Sequelize.fn('COUNT', Sequelize.col('ConceptId')), 'total'],"ConceptId",],
    group : "ConceptId",
    include: [{
      model: db.Concept,      
  }]
  })
  .then(respondWithResult(res))
  .catch(handleError(res));
}

// Gets a single Concept from the DB
export function show(req, res) {
  return Concept.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Concept in the DB
export function create(req, res) {
  return Concept.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Concept in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }

  return Concept.upsert(req.body, {
    where: {
      _id: req.params.id
    }
  })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Concept in the DB
export function patch(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Concept.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Concept from the DB
export function destroy(req, res) {
  return Concept.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
