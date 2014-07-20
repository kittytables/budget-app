angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    var saved = localStorage.getItem('data');

    if(saved)
    {
        $scope.data = JSON.parse(saved);
    }
    else {
        $scope.data = {
        spending: new Array(32).join('0').split('').map(function(e) {return parseInt(e, 10);}),
        income: 0,
        daily: 0,
        expenses: 0,
        savings: 0,
        goal: 0
        };
    }

    function daysInMonth(month,year) {
        return new Date(year, month, 0).getDate();
    }

    var date = new Date(),
        totaldays = daysInMonth(date.getMonth(), 2014),
        today = date.getDate();

    $scope.max = totaldays;
    $scope.day = today;
    $scope.left = $scope.data.daily - $scope.data.spending[$scope.day];

    $scope.saveData = function() {
        localStorage.setItem('data', JSON.stringify($scope.data));
    };

    $scope.computeValue = function() {
        var budget,
            daily;
        budget = $scope.data.income - $scope.data.expenses - $scope.data.goal;

        $scope.data.daily = (budget / totaldays);

        $scope.saveData();
        return $scope.data.daily;
    };

    $scope.calcLeft = function() {
        $scope.left = $scope.data.daily - $scope.data.spending[today];
        $scope.saveData();
    };

    $scope.calcSavings = function() {
        var allotted = $scope.data.daily * (today - 1);
        var totalspent = 0;
        for(var i = 1; i < today; i++)
        {
            totalspent += parseInt($scope.data.spending[i] | 0, 10);
        }
        $scope.data.savings = allotted - totalspent;
        $scope.saveData();
    };

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
