let AddShow = function($scope, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/shows';

  let Show = function (obj) {
    this.headliner = obj.headliner;
    this.support   = obj.support;
    this.flyer     = obj.flyer;
    this.date      = obj.date;
    this.time      = obj.time;
    this.past      = false;
  };

  $scope.addShow = function(obj) {
    let s = new Show(obj);

    $http.post(url, s, PARSE.CONFIG).then( (res) => {
      $scope.show = {};
    });
  };

};

AddShow.$inject = ['$scope','$http', 'PARSE'];

export default AddShow;