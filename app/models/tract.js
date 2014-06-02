'use strict';

var tracts = global.nss.db.collection('tracts');

class Tract {
  static findAll(fn) {
    tracts.find().toArray((e,t)=>fn(t));
  }

  static findByTractId(id){
  	tracts.find({tract: id}).toArray((err, response)=>{
  		return response;
  	});
  }
}

module.exports = Tract;
