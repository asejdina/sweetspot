'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Sweetspot: Home'});
};

exports.map = (req, res)=>{
  res.render('home/map', {title: 'Map'});
};
