var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoURI = 'mongodb://localhost/photoviewer';
mongoose.connect(mongoURI);

var db = mongoose.connection;




var MyModel = mongoose.model('Test', new Schema({ name: String }));
MyModel.findOne(function(error, result) { /* ... */ });

var Images = new Schema({
  title: String,
  url: String,
  rating: Number
});


var Image = mongoose.model('Image', Images);

var firstImage = new Image({
  title: 'My dear boat',
  url: 'https://cityyearnh.files.wordpress.com/2011/02/boat.jpg',
  rating: 5
});


module.exports = db;
