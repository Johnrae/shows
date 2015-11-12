let AddShow = function($scope, ShowService) {
  

  $scope.addShow = (obj) => {
    ShowService.addShow(obj).then( (res) => {
      $scope.show = {};
    });
  };

};

AddShow.$inject = ['$scope','ShowService'];

export default AddShow;