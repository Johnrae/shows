let EditController = function($scope,$stateParams, ShowService) {
    
  ShowService.getOneShow($stateParams.showId).then( (res) => {
    $scope.singleShow = res.data;
  });
  
  $scope.updateShow = function (obj) {
    ShowService.update(obj).then( (res) => {
      console.log(res);
    });
  };

};

EditController.$inject = ['$scope','$stateParams', 'ShowService'];

export default EditController;