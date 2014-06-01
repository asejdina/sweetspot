/* global google */
/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  var map;

  function init(){
    initMap(36.1666, -86.7833, 11);
  }

  function addMarker(lat, lng, name){
    let latLng = new google.maps.LatLng(lat, lng);
    new google.maps.Marker({map: map, position: latLng, title: name});
  }

  function initMap(lat, lng, zoom){
    let styles =[{'featureType':'landscape','elementType':'geometry.fill','stylers':[{'color':'#bbd5c5'}]},{'featureType':'road.local','elementType':'geometry.stroke','stylers':[{'color':'#808080'}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#fcf9a2'}]},{'featureType':'poi','elementType':'geometry.fill','stylers':[{'color':'#bbd5c5'}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#808080'}]}];
    let mapOptions = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP, styles: styles};
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
})();
