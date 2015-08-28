Date.prototype.dayOfYear = function () {
    var j1 = new Date(this);
    j1.setMonth(0, 0);
    return Math.round((this - j1) / 8.64e7);
}

angular.module('datesCalcApp')
    .controller('datesCalcController', ['$scope', function ($scope) {


        $scope.conversions = [
            {
                name: "2015 Spring to 2015 Summer",
                fromSemester: "2015 Spring - Jan 06",
                fromSemesterStartDate: "2015-01-06",
                toSemester: "2015 Summer - May 04",
                toSemesterStartDate: "2015-05-04"
            },
            {
                name: "2015 Summer to 2015 Fall",
                fromSemester: "2015 Summer - May 04",
                fromSemesterStartDate: "2015-05-04",
                toSemester: "2015 Summer - Sept 08",
                toSemesterStartDate: "2015-09-08"
            }


        ]


        $scope.getDateInDestinationSemester = function (fromSemesterStartDate, toSemesterStartDate, dateInStartSemester) {
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


    }]);





