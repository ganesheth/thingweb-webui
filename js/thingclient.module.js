var app = angular
    .module('thingclient', ['ngMaterial', 'chartjs-directive', 'file-loader', 'wot', 'schemaForm'])
    .config(['$mdThemingProvider',
        function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue-grey')
                .accentPalette('grey');
        }]
    );