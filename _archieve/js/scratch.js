Date.prototype.dayOfYear = function() {
    var j1 = new Date(this);
    j1.setMonth(0, 0);
    return Math.round((this - j1) / 8.64e7);
}


var app = function() {
    var dStartSemesterFirstDay;
    var dDestinationSemesterFirstDay;

    function setStartSemesterFirstDay(aDate) {
        dStartSemesterFirstDay = aDate;
    }

    function setDestinationSemesterFirstDay(aDate) {
        dDestinationSemesterFirstDay = aDate;
    }

    function getDateInDestinationSemester(dateInStartSemester) {
        var destinationDate = new Date();
        destinationDate.setTime(dateInStartSemester.getTime() + getDateDifferences());
        return destinationDate;
    }

    function getStructuredDestinationInfo(dateInStartSemester) {
        var destinationDate = getDateInDestinationSemester(dateInStartSemester);

        // Weeks X (+1 because the first set of calculation will be 0 index'ed)
        var weekX = Math.floor((destinationDate.dayOfYear() - dDestinationSemesterFirstDay.dayOfYear()) / 7) + 1;

        return {
            week: weekX,
            date: destinationDate.toUTCString()
        };
    }

    function getDateDifferences() {
        return dDestinationSemesterFirstDay.getTime() - dStartSemesterFirstDay.getTime();
    }

    function getStartSemesterFirstDay() {
        return dStartSemesterFirstDay;
    }

    function getDestinationSemesterfirstDay() {
        return dDestinationSemesterFirstDay;
    }

    return {
        setStartSemesterFirstDate: setStartSemesterFirstDay,
        setDestinationSemesterFirstDay: setDestinationSemesterFirstDay,
        getDateInDestinationSemester: getDateInDestinationSemester,
        dStartSemesterFirstDay: getStartSemesterFirstDay,
        dDestinationSemesterFirstDay: getDestinationSemesterfirstDay,
        getStructuredDestinationInfo: getStructuredDestinationInfo
    };
}();