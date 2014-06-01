/* global google */
/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);


  function init(){
    $('#getData').click(getData);
  }

  function getData() {
// var url = 'http://data.nashville.gov/resource/3h5w-q8b7.json?zip=37211&permit_type_description=building residential - rehab';
    var url = 'http://data.nashville.gov/resource/3h5w-q8b7.json?$where=const_cost > 75000&permit_type_description=building residential - rehab';
    $.getJSON(url, showData);
  }

  function showData(d) {
    console.log(d);
  }

  function extractAddress(obj) {

  }

})();
