let EditController = function($scope,$stateParams, ShowService, $state) {
    
  ShowService.getOneShow($stateParams.showId).then( (res) => {
    $scope.singleShow = res.data;
  });
  
  $scope.updateShow = function (obj) {
    ShowService.update(obj).then( (res) => {
      $state.go('root.list');
    });
  };

};

EditController.$inject = ['$scope','$stateParams', 'ShowService', '$state'];

export default EditController;