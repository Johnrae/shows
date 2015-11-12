
let SingleController = function($scope, $stateParams, ShowService, $state) {
  
  ShowService.getOneShow($stateParams.showId).then( (res) => {
    $scope.show = res.data;
  });

  $scope.deleteMe = function (obj) {
    ShowService.delete(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');
    });
  };

};
SingleController.$inject = ['$scope', '$stateParams', 'ShowService', '$state'];
export default SingleController;