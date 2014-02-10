App = angular.module('App', []);

App.controller('AlbumCtrl', function($scope) {
     
        scope.images = [
            {"image":"img/tiny-semantics.png", "description":"Image 01 description"},
            {"image":"img/tiny-offline-storage.png", "description":"Image 02 description"},
            {"image":"img/tiny-device-access.png", "description":"Image 03 description"},
            {"image":"img/tiny-connectivity.png", "description":"Image 04 description"},
            {"image":"img/tiny-multimedia.png", "description":"Image 05 description"},
            {"image":"img/tiny-3d-graphics-effects.png", "description":"Image 06 description"},
            {"image":"img/tiny-performance-integration.png", "description":"Image 07 description"},
            {"image":"img/tiny-css3.png", "description":"Image 08 description"}
        ];
    }            
);
