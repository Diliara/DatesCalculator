Date.prototype.dayOfYear = function () {
    var j1 = new Date(this);
    j1.setMonth(0, 0);
    return Math.round((this - j1) / 8.64e7);
}

angular.module('datesCalcApp')
    .controller('datesCalcController', function ($scope) {

        $scope.conversion = {
            dStartSemesterFirstDay: new Date(),
            dDestinationSemesterFirstDay: new Date(),
            destinationDate: new Date(),
            outcomeDate: "",
            dNumberOfDaysDifference: ""
        }


        $scope.getDateInDestinationSemester = function (dateInStartSemester) {
            $scope.conversion.destinationDate = new Date();

            $scope.conversion.destinationDate.setTime(dateInStartSemester.getTime() + $scope.getDateDifferences());
            return $scope.conversion.destinationDate;

        }

        $scope.getStructuredDestinationInfo = function (dateInStartSemester) {
            $scope.conversion.destinationDate = $scope.getDateInDestinationSemester(dateInStartSemester);

            // Weeks X (+1 because the first set of calculation will be 0 index'ed)
            var weekX = Math.floor(($scope.conversion.destinationDate.dayOfYear() - $scope.conversion.dDestinationSemesterFirstDay.dayOfYear()) / 7) + 1;

            return $scope.conversion.outcomeDate = {
                week: weekX,
                date: $scope.conversion.destinationDate.toUTCString()
            };
        }


        $scope.getDateDifferences = function () {
            return $scope.conversion.dNumberOfDaysDifference = $scope.conversion.dDestinationSemesterFirstDay.getTime() - $scope.conversion.dStartSemesterFirstDay.getTime();
        }


    });





