let ListController = function($scope, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/shows';

  $http.get(url, PARSE.CONFIG).then((res) => {
    $scope.shows = res.data.results;
  });

};

ListController.$inject = ['$scope', '$http', 'PARSE'];

export default ListController;