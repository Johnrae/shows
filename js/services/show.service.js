let ShowService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/shows';
  

  this.getShows =  function() { 
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      cache: true
    });
  };

  this.getOneShow = function() {
    return $http({
      url: url + '/' + showId,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      cache: true
    });

  };

  let Show = function (obj) {
    this.headliner = obj.headliner;
    this.support   = obj.support;
    this.flyer     = obj.flyer;
    this.venue     = obj.venue;
    this.descrip   = obj.descrip;
    this.date      = obj.date;
    this.time      = obj.time;
    this.past      = false;
  };

  this.addShow = function(obj) {
    let s = new Show(obj);
    return $http.post(url, s, PARSE.CONFIG);
  };

  this.update = function(obj) {
    return $http.put(url + '/' + obj.objectId, PARSE.CONFIG);
  };

  this.delete = function(obj) {
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };


};

ShowService.$inject = ['$http', 'PARSE'];

export default ShowService;