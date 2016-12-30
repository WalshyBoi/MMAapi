var _ = require('lodash')
var datastore = require('../datastore');

// Get list of fighter
exports.index = function(req, res) {
    return res.json(200, datastore.fighters);
} ;
 
// Get a single fighter
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

// Creates a fighter in datastore.
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
       win: req.body.win,
       lose: req.body.lose,
       height: req.body.height,
       img: req.body.img,
       nick: req.body.nick

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
