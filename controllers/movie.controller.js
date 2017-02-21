app.controller("movieCtrl", function($scope, cfpLoadingBar, movieService, $window){
    
    /*following function sets genere for search*/
    $scope.setGenere = function(genere){
        $scope.q = genere;
    }
    $scope.currentPage = 1;
    
    /*external link*/
    $scope.goTo = function(url){
        $window.open(url);
    }
    
    /*ajax call to get movie details*/
    $scope.getData = function(){
        cfpLoadingBar.start();         /*loading bar starts*/
        movieService.getMovies(function(data){
            $scope.movies = data;
            cfpLoadingBar.complete();/*loading bar stops*/
        });
    };
})