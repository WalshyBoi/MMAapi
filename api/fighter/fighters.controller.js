var _ = require('lodash')
var datastore = require('../datastore');

// Get list of customers
exports.index = function(req, res) {
    return res.json(200, datastore.fighters);
} ;
 
// Get a single customer
exports.show = function(req, res) {
    var index = _.findIndex(datastore.fighters , 
           function(fighter) {
              return fighter.id == req.params.id;
        });      
     if (index != -1) {
        return res.json(datastore.fighters[index] );
      }
      else
        {
         return res.send(404)
       }

};

// Creates a new customer in datastore.
exports.create = function(req, res) {
    var nextId = 0
    var last = _.last(datastore.fighters)
    if (last != undefined) {
       nextId = last.id + 1
    } else {
      nextId = 1
    }
    var fighter = {
       id: nextId,
       name: req.body.name,
       address: req.body.address 
    };
    datastore.fighters.push(fighter)
    return res.json(201, fighter);
};

// Deletes a customer from datastore.
exports.destroy = function(req, res) {
    var elements = _.remove(datastore.fighters , 
           function(fighter) {
              return fighter.id == req.params.id;
        });  
     if (elements.length == 1) {
        return res.send(200);
        }
      else
        {
         return res.send(404)
      }
};
var _ = require('lodash')
var datastore = require('../datastore');

// Get list of customers
exports.index = function(req, res) {
    return res.json(200, datastore.fighters);
} ;
 
// Get a single customer
exports.show = function(req, res) {
    var index = _.findIndex(datastore.fighters , 
           function(fighter) {
              return fighter.id == req.params.id;
        });      
     if (index != -1) {
        return res.json(datastore.fighters[index] );
      }
      else
        {
         return res.send(404)
       }

};

// Creates a new customer in datastore.
exports.create = function(req, res) {
    var nextId = 0
    var last = _.last(datastore.fighters)
    if (last != undefined) {
       nextId = last.id + 1
    } else {
      nextId = 1
    }
    var fighter = {
       id: nextId,
       name: req.body.name,
       win: req.body.name,
       lose: req.body.name,
       height: req.body.name,
       img: req.body.name,
       nick: req.body.name

    };
    datastore.fighters.push(fighter)
    return res.json(201, fighter);
};

// Deletes a customer from datastore.
exports.destroy = function(req, res) {
    var elements = _.remove(datastore.fighters , 
           function(fighter) {
              return fighter.id == req.params.id;
        });  
     if (elements.length == 1) {
        return res.send(200);
        }
      else
        {
         return res.send(404)
      }
};
