Date.prototype.dayOfYear = function () {
    var j1 = new Date(this);
    j1.setMonth(0, 0);
    return Math.round((this - j1) / 8.64e7);
}

angular.module('datesCalcApp')
    .controller('datesCalcController', ['$scope', '$http', function ($scope, $http) {

        $http.get('json/conversions.json').success(function (listOfConversions) {
            $scope.conversions = listOfConversions;
        });


        $scope.getDateInDestinationSemester = function (fromSemesterStartDate, toSemesterStartDate, dateInStartSemester) {


            if (typeof dateInStartSemester !== "undefined") {

                $scope.destinationDate = new Date();

                //convert string dates info to JS Date:

                var dFromSemesterStartDate = new Date(fromSemesterStartDate);
                var dToSemesterStartDate = new Date(toSemesterStartDate);
                //dateInStartSemester is already a Date


                $scope.destinationDate.setTime(dateInStartSemester.getTime() + (dToSemesterStartDate.getTime() - dFromSemesterStartDate.getTime()));


                var weekX = Math.floor(($scope.destinationDate.dayOfYear() - dToSemesterStartDate.dayOfYear()) / 7) + 1;

                return $scope.presentedData = {
                    week: weekX,
                    date: $scope.destinationDate.toUTCString()
                };
            }

            else {
                alert("Please, select a date");
            }
        }


    }]);





