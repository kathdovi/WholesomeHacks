angular.module('tiles', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

angular.
    module('tiles').
    component('tiles', {
        templateUrl: 'mainPage/tiles.template.html',
        controller: function TilesCtrl($scope) {

            $scope.imagePath = 'img/water0.png';
            $scope.timeOfLastDrink = waterPicCounter;
            $scope.timerRunning = true;
            

            var waterPicCounter = 0;
            $scope.changeWaterPicture = function () {
                // $scope.timeOfLastDrink++;
                waterPicCounter++;
                   switch (waterPicCounter){
                // switch ($scope.timeOfLastDrink) {
                    case 0:
                        $scope.imagePath = 'img/water0.png';
                        break;

                    case 1:
                        $scope.imagePath = 'img/water1.png';
                        break;

                    case 2:
                        $scope.imagePath = 'img/water2.png';
                        break;
                    case 3:
                        $scope.imagePath = 'img/water3.png';
                        break;
                    case 4:
                        $scope.imagePath = 'img/water4.png';
                        break;

                    case 5:
                        $scope.imagePath = 'img/water5.png';
                        break;
                    case 6:
                        $scope.imagePath = 'img/water6.png';
                        break;
                    case 7:
                        $scope.imagePath = 'img/water7.png';
                        break;

                    default:
                        $scope.imagePath = 'img/water8.png';
                        break;
                }

            }


            $scope.startTimer = function (){
                $scope.$broadcast('timer-start');
                $scope.timerRunning = true;
            };
 
            $scope.stopTimer = function (){
                $scope.$broadcast('timer-stop');
                $scope.timerRunning = false;
            };
        }




    }).config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    });
