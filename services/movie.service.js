app.service("movieService", function($http){
    
    this.getMovies = function(callback){
        $http.get("http://starlord.hackerearth.com/simility/movieslisting").success(function(data, status){
            console.log("data in service");
            callback(data);
        }).error(function(error){
            console.log("error geting data");
        })
    };
})