Date.prototype.dayOfYear = function () {
    var j1 = new Date(this);
    j1.setMonth(0, 0);
    return Math.round((this - j1) / 8.64e7);
}

angular.module('datesCalcApp')
    .controller('datesCalcController', ['$scope', function ($scope) {


        $scope.semesters = {

            fromSemesters: [

                {
                    name: "2013 Fall - Sept 09",
                    startDate: new Date('2013-09-09')
                },
                {
                    name: "2013 Fall Int 2 - Oct 28",
                    startDate: new Date('2013-10-28')
                },
                {
                    name: "2014 Spring - Jan 13",
                    startDate: new Date('2014-01-13')
                },
                {
                    name: "2014 Summer - May 05",
                    startDate: new Date('2014-05-05')
                },
                {
                    name: "2014 Fall - Sept 02",
                    startDate: new Date('2014-09-02')
                },
                {
                    name: "2015 Spring - Jan 06",
                    startDate: new Date('2015-01-06')
                },
                {
                    name: "2015 Summer - May 04",
                    startDate: new Date('2015-05-04')
                    /* startDateFormatted: new Date('2015-05-04').toUTCString().slice(0, 17) */
                }
            ],
            toSemesters: [
                {
                    name: "2013 Fall - Sept 09",
                    startDate: new Date('2013-09-09')
                },
                {
                    name: "2013 Fall Int 2 - Oct 28",
                    startDate: new Date('2013-10-28')
                },
                {
                    name: "2014 Spring - Jan 13",
                    startDate: new Date('2014-01-13')
                },
                {
                    name: "2014 Summer - May 05",
                    startDate: new Date('2014-05-05')
                },
                {
                    name: "2014 Fall - Sept 02",
                    startDate: new Date('2014-09-02')
                },
                {
                    name: "2015 Spring - Jan 06",
                    startDate: new Date('2015-01-06')
                },
                {
                    name: "2015 Summer - May 04",
                    startDate: new Date('2015-05-04')
                }
            ]

        }


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





