let AddShow = function($scope, ShowService) {
  

    ShowService.addShow().then( (res) => {
      $scope.show = {};
    });
  };

};

AddShow.$inject = ['$scope','ShowService'];

export default AddShow;