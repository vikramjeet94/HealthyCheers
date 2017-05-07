angular.module('HealthyCheers')
.controller('CartController', ['$scope',
    function ($scope) {

        $scope.categories = [
            {
                category: 0,
                categoryName: 'Japanese Food'
            },
            {
                category: 1,
                categoryName: 'Chinese Food'
            }
        ];

        $scope.cartItems = [
            {
                name: 'American Sushi Salmon',
                category: 0,
                quantity: 1,
                cost: 50
            },
            {
                name: 'The Green Tea with ice',
                category: 1,
                quantity: 2,
                cost: 100
            }
        ];

        $scope.subtotal = 500;
        $scope.tax = 100;

}]);
