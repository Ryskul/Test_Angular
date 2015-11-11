 var time = angular.module('test', [])
    time.controller('empcontroller', ['$scope', function($scope) {
       $scope.emparr = [];
       $scope.format = 'HH:mm:ss';

    $scope.btnclk = function () {
                if (!$scope.id)
                {
                    alert("Enter ID");
                }
                else if (!$scope.name)
                {
                    alert("Enter Name");
                }
                else {
                $scope.emparr.push({ 
                  'arr_id': $scope.id, 
                  'arr_name': $scope.name
                  // 'arr_form': $scope.form
                });
                $scope.id = '';
                $scope.name = '';
                // $scope.form = '';
                }
            };

             var key;
            $scope.edit = function (emp, indx) {
                key = indx;                
                $scope.id = emp.arr_id;
                $scope.name = emp.arr_name;
            };
            $scope.btnupd = function (id, name) {
                $scope.emparr[key].arr_id = id;
                $scope.emparr[key].arr_name = name;
                $scope.id = '';
                $scope.name = '';
            };
            $scope.del = function (id) {
                $scope.emparr.splice(id, 1);
           };


}]);

 time.directive("myCurrentTime", function(dateFilter){
    return function(scope, element, attrs){
        var format;
        
        scope.$watch(attrs.myCurrentTime, function(value) {
            format = value;
            updateTime();
        });
        
        function updateTime(){
            var dt = dateFilter(new Date(), format);
            element.text(dt);
        }
        
        function updateLater() {
            setTimeout(function() {
              updateTime();
              updateLater(); 
            }, 1000);
        }
        
        updateLater();
    }
});

