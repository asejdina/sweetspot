'use strict';

// class Permit {
//   constructor(data) {
//     this.permitid = data.permit;
//     this.addr = data.address;
//     this.city = data.city;
//     this.state = data.state;
//     this.zip = data.zip;
//     this.lat = data.mapped_location.latitude;
//     this.long= data.mapped_location.longitude;
//     this.tract = null;
//     this.medianIncome = null;
//     this.dateIssued = data.date_issued;
//   }
//
//   static create() {
//     var url = 'http://data.nashville.gov/resource/3h5w-q8b7.json?$where=const_cost > 75000&permit_type_description=building residential - rehab';
//     request(url, (error, response, nashData)=> {
//       if (!error && response.statusCode === 200) {
//         nashData = JSON.parse(nashData);
//         var csvData = nashData.map(function(d) {
//           return {id:d.permit, addr: d.address, city:d.city, state:d.state, zip:d.zip};
//         });
//         var permit = new Permit(nashData);
//
//         json2csv({data: csvData,
//                   fields: ['id', 'addr', 'city', 'state', 'zip']},
//                   function(err, csv) {
//                     if (err) { console.log(err); }
//                     var fileName = __dirname + '/../static/permits.csv';
//                     fs.writeFile(fileName, csv, function(err) {
//                       if (err) { throw err; }
//                       post2Census(fileName, nashData);
//                     });
//                   });
//         res.redirect('/');
//       }
//     });
//   };
//
//   }
// }
//
// module.exports = Permit;
