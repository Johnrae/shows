let ListController = function($scope,ShowService) {
  
  ShowService.getShows().then((res) => {
    $scope.shows = res.data.results;
  });

};

ListController.$inject = ['$scope', 'ShowService'];

export default ListController;