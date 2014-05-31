'use strict';

// var traceur = require('traceur');
// var Permit = traceur.require(__dirname + '/../models/permit.js');
// var FormData = require('form-data');
var request = require('request');
var json2csv = require('json2csv');
var fs = require('fs');


exports.populate = (req, res)=>{
  var url = 'http://data.nashville.gov/resource/3h5w-q8b7.json?$where=const_cost > 75000&permit_type_description=building residential - rehab';
  request(url, (error, response, nashData)=> {
    if (!error && response.statusCode === 200) {
      nashData = JSON.parse(nashData);
      var csvData = nashData.map(function(d) {
        return {id:d.permit, addr: d.address, city:d.city, state:d.state, zip:d.zip};
      });
      console.log(csvData);

      json2csv({data: csvData,
                fields: ['id', 'addr', 'city', 'state', 'zip']},
                function(err, csv) {
                  if (err) { console.log(err); }
                  var fileName = __dirname + '/../static/permits.csv';
                  fs.writeFile(fileName, csv, function(err) {
                    if (err) { throw err; }
                    console.log('file saved');
                    post2Census(fileName);
                  });
                });
      res.redirect('/');
    }
  });
};

function post2Census(fileName) {
  var url = 'http://geocoding.geo.census.gov/geocoder/geographies/addressbatch';
  var r = request.post(url, function(err, httpResponse, data) {
    if(err) {
      return console.log('upload fail', err);
    }
    else {
      console.log(data);
    }
  });

  var fd = r.form();
  fd.append('addressFile', fs.createReadStream(fileName));
  fd.append('benchmark', '4');
  fd.append('vintage', '4');
}
