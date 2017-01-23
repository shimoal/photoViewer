var app = angular.module('photoViewer', []);

app.factory('photoFactory', function ($http) {

  var getAllImages = function() {
    return $http({
        method: 'GET',
        url: '/images',
      }).then( function (resp){
        return resp.data;
      });
    };

    var changeRating  = function (newRating, photo) {
      var data = photo;
      return $http({
        method: 'PUT', 
        url: '/images',
        data:  data
      })
      .then(function (resp) {
        return resp.data;
      });
    };

  return {
    getAllImages: getAllImages,
    current: {
      url: 'https://cityyearnh.files.wordpress.com/2011/02/boat.jpg',
      rating: 3,
      title: 'this is my boat'
    },
    setCurrentPhoto: function(photo) {
      this.current = photo;
    },
    changeRating: changeRating
  }
});

app.controller('photos', function ($scope, photoFactory) {
  $scope.clickHandler = function(photo) {
    photoFactory.setCurrentPhoto(photo);
  };

  photoFactory.getAllImages().then(function (data) {
    $scope.images = data;
  });
   
});

app.controller('imageDisplay', function ($scope, photoFactory) {

  $scope.$watch( function() {
    $scope.currentPhoto = photoFactory.current;
  });

  $scope.changeRating = function() {
    var newImages = photoFactory.changeRating($scope.currentPhoto);
    console.log(newImages);
  };



});

