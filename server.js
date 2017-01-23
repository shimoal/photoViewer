var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var db = require('./configDB.js');

var app = express();

// mongoose.connect('mongodb://localhost/photoviewer');
app.use(express.static('public'));
app.use(bodyParser.json());
 

 var images = [
    {
      id: 0,
      title: 'Row boat',
      url: 'https://s-media-cache-ak0.pinimg.com/originals/11/c7/01/11c70132bd80924f7b1bf7dc0864e5e8.jpg', 
      rating: 3
    },
    {
      id: 1,
      title: 'Red boat',
      url: 'https://cityyearnh.files.wordpress.com/2011/02/boat.jpg',
      rating: 2
    },
    {
      id: 2,
      title: 'Big boat',
      url: 'http://www.trbimg.com/img-53fe276a/turbine/bs-bs-bs-tr-cruising-with-kids-p3-jpg-20140827/2048/2048x1536',
      rating: 5
    },
    {
      id: 3,
      title: 'Fast boat',
      url: 'http://stage.speedboatadventures.com/wp-content/uploads/2011/05/IMG_7000x.jpg',
      rating: 4
    },
    {
      id: 4,
      title: 'Sad boat',
      url: 'http://www.tc.gc.ca/media/images/marinesafety/wreck.jpg',
      rating: 1
    },
    {
      id: 5,
      title: 'Sunken boat',
      url: 'http://www.tc.gc.ca/media/images/marinesafety/wreck.jpg',
      rating: 4
    }
    ];

app.get('/images', function(req, res, next) {
  res.send(images);
});

app.put('/images', function(req, res, next) {
  var id = req.body.id;
  images[id] = req.body;
  res.send(images);
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});