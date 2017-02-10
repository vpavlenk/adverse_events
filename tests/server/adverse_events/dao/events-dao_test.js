var mongoose = require('mongoose');
var eventsDAO = require(process.cwd() + '/server/api/adverse_events/dao/events-dao');
var expect = require('chai').expect;
var setupMongoose = require('../../_helpers/db').setupMongoose;

describe('eventsDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    eventsDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
