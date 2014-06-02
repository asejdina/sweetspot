/* global google */
/* jshint unused:false */

(function(){
  'use strict';

  var map;
  var array = [];

  $(document).ready(init);

  function init(){
    $('#go').click(getMarkers);
    initMap(36.1666, -86.7833, 11);
  }

  function initMap(lat, lng, zoom){
    let mapOptions = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP};
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  function getMarkers(){
    $.ajax({
      url: '/populatedb',
      type: 'GET',
      data: null,
      dataType: 'json',
      success: mapData=>{
        console.log(mapData);
        mapData.mapData.forEach(m=>{
          let lat = m.latitude;
          let lon = m.longitude;
          createMarker(lat, lon);
        });
        makeHeat();
      }
    });
  }

  function createMarker(lat, lng){
    let latLng = new google.maps.LatLng(lat, lng);
    array.push(latLng);
  }

  function makeHeat(){
    new google.maps.visualization.HeatmapLayer({map:map, data: array});
  }
})();
