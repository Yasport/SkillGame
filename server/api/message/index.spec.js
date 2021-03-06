'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var messageCtrlStub = {
  index:  'messageCtrl.index',
  show:   'messageCtrl.show',
  create: 'messageCtrl.create',
  upsert: 'messageCtrl.upsert',
  destroy:'messageCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var messageIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './message.controller': messageCtrlStub
});

describe('Message API Router:', function() {
  it('should return an express router instance', function() {
    messageIndex.should.equal(routerStub);
  });



  describe('GET /api/message', function() {
    it('should route to message.controller.index', function() {
      routerStub.get
        .withArgs('/', 'messageCtrl.index')
        .should.have.been.calledOnce;
    });
  });


  describe('GET /api/message/:id', function() {
    it('should route to message.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'messageCtrl.show')
        .should.have.been.calledOnce;
    });
  });


  describe('POST /api/message', function() {
    it('should route to message.controller.create', function() {
      routerStub.post
        .withArgs('/', 'messageCtrl.create')
        .should.have.been.calledOnce;
    });
  });



  describe('PUT /api/message/:id', function() {
    it('should route to message.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'messageCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

 

  describe('DELETE /api/message/:id', function() {
    it('should route to message.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'messageCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
