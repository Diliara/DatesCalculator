


var to_semester_title = document.querySelector('#to_semester');
var from_semester_title = document.querySelector('#from_semester');


/* 3 - Spring 2014 to Summer 2014 conversion */
function displayCalendar_Spring2014_Summer2014(numberOfMonths) {

    from_semester_title.innerHTML = "Spring 2014";
    to_semester_title.innerHTML = "Summer 2014";

    $("#weekNumber").html("1");

    $("#dateoutput1").html("13 Jan, Mon");
    $("#dateoutput2").html("5 May, Mon");


    function highlightDays(date) {
        //month starts as 0
        var a = new Date(2014, 0, 13); // first day of FROM semester - September 9, 2013 - 2014, January 13
        var b = new Date(2014, 3, 11); // last day of FROM semester - December 6, 2013 - 2014, April 11

        if (a <= date && date <= b) {
            return [true, 'highlight'];
        }

        return [true, ''];

    }

    $("#datepicker_Spring2014_Summer2014").datepicker({

        inline: true,
        showOtherMonths: true,
        defaultDate: '13-01-14', //09-09-13 dd-mm-yy
        numberOfMonths: numberOfMonths,
        dateFormat: "dd-mm-yy",

        beforeShowDay: highlightDays,

        onSelect: function (dateText, inst) {
            var date = $.datepicker.parseDate(inst.settings.dateFormat || $.datepicker._defaults.dateFormat, dateText, inst.settings);
            var dateText1 = $.datepicker.formatDate("d M, D", date, inst.settings);
            date.setDate(date.getDate() + 112); //old - 126
            var dateText2 = $.datepicker.formatDate("d M, D", date, inst.settings);

            var newDate = date.getDate();
            var newMonth = date.getMonth();

            /*
             console.log("-----------------------");
             console.log("next semester full date: " + date);
             console.log("next semester Date: " + newDate);
             console.log("next semester Month: " + newMonth);
             */

            //List starting week days of the new semester
            var weekNumber;
            var weekDays = 4;

            var wk1_start = 5;
            var wk1_end = wk1_start + weekDays;

            var wk2_start = 12;
            var wk2_end = wk2_start + weekDays;

            var wk3_start = 19;
            var wk3_end = wk3_start + weekDays;

            var wk4_start = 26;
            var wk4_end = wk4_start + weekDays;

            var wk5_start = 2;
            var wk5_end = wk5_start + weekDays;

            var wk6_start = 9;
            var wk6_end = wk6_start + weekDays;

            var wk7_start = 16;
            var wk7_end = wk7_start + weekDays;

            var wk8_start = 23;
            var wk8_end = wk8_start + weekDays;

            var wk9_start = 30;
            var wk9_end = 4;

            var wk10_start = 7;
            var wk10_end = wk10_start + weekDays;

            var wk11_start = 14;
            var wk11_end = wk11_start + weekDays;

            var wk12_start = 21;
            var wk12_end = wk12_start + weekDays;

            var wk13_start = 28;
            var wk13_end = 1;


            var Month4_2014 = 4;
            var Month5_2014 = 5;
            var Month6_2014 = 6;
            var Month7_2014 = 7;


            if ((newDate >= wk1_start && newDate <= wk1_end) && (newMonth == Month4_2014)) {
                weekNumber = 1;
            }

            else if ((newDate >= wk2_start && newDate <= wk2_end) && (newMonth == Month4_2014)) {
                weekNumber = 2;
            }

            else if ((newDate >= wk3_start && newDate <= wk3_end) && (newMonth == Month4_2014)) {
                weekNumber = 3;
            }

            else if ((newDate >= wk4_start && newDate <= wk4_end) && (newMonth == Month4_2014)) {
                weekNumber = 4;
            }

            else if ((newDate >= wk5_start && newDate <= wk5_end) && (newMonth == Month5_2014)) {
                weekNumber = 5;
            }

            else if ((newDate >= wk6_start && newDate <= wk6_end) && (newMonth == Month5_2014)) {
                weekNumber = 6;
            }

            else if ((newDate >= wk7_start && newDate <= wk7_end) && (newMonth == Month5_2014)) {
                weekNumber = 7;
            }

            else if ((newDate >= wk8_start && newDate <= wk8_end) && (newMonth == Month5_2014)) {
                weekNumber = 8;
            }

            else if ((newDate == wk9_start) && (newMonth == Month5_2014)) {
                weekNumber = 9;
            }

            else if ((newDate <= wk9_end) && (newMonth == Month6_2014)) {
                weekNumber = 9;
            }

            else if ((newDate >= wk10_start && newDate <= wk10_end) && (newMonth == Month6_2014)) {
                weekNumber = 10;
            }

            else if ((newDate >= wk11_start && newDate <= wk11_end) && (newMonth == Month6_2014)) {
                weekNumber = 11;
            }

            else if ((newDate >= wk12_start && newDate <= wk12_end) && (newMonth == Month6_2014)) {
                weekNumber = 12;
            }

            //adjusting criteria for weeks that have days in multiple months

            else if ((newDate >= wk13_start && newDate <= (wk13_start + 3)) && (newMonth == Month6_2014)) {
                weekNumber = 13;
            }

            else if (newDate == wk13_end && newMonth == Month7_2014) {
                weekNumber = 13;
            }


            else {
                weekNumber = 'N/A';
            }


            $("#weekNumber").html(weekNumber);

            $("#dateoutput1").html(dateText1);
            $("#dateoutput2").html(dateText2);


            /*
             console.log("     ~~~~~~~> wk9_start: " + wk9_start);
             console.log("     ~~~~~~~> wk9_end: " + wk9_end);
             */

        }


    });

}


/* 1 -  Fall 2013 to Spring 2014 conversion */
function displayCalendar_Fall2013_Spring2014(numberOfMonths) {

    from_semester_title.innerHTML = "Fall 2013";
    to_semester_title.innerHTML = "Spring 2014";

    $("#weekNumber").html("1");

    $("#dateoutput1").html("9 Sep, Mon");
    $("#dateoutput2").html("13 Jan, Mon");

    function highlightDays(date) {
        var a = new Date(2013, 8, 9); // September 9, 2013
        var b = new Date(2013, 11, 6); // December 6, 2013

        if (a <= date && date <= b) {
            return [true, 'highlight'];
        }

        return [true, ''];

    }


    $("#datepicker_Fall2013_Spring2014").datepicker({
        /*
         dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         */

        inline: true,
        showOtherMonths: true,
        defaultDate: '09-09-13',
        numberOfMonths: numberOfMonths,
        dateFormat: "dd-mm-yy",


        beforeShowDay: highlightDays,


        onSelect: function (dateText, inst) {
            var date = $.datepicker.parseDate(inst.settings.dateFormat || $.datepicker._defaults.dateFormat, dateText, inst.settings);
            var dateText1 = $.datepicker.formatDate("d M, D", date, inst.settings);
            date.setDate(date.getDate() + 126);
            var dateText2 = $.datepicker.formatDate("d M, D", date, inst.settings);

            var newDate = date.getDate();
            var newMonth = date.getMonth();

            /*
             console.log("date: " + date);
             console.log("newDate: " + newDate);
             console.log("newMonth: " + newMonth);
             */

            var weekNumber;
            var weekDays = 4;
            var wk1_start = 13;
            var wk1_end = wk1_start + weekDays;

            var wk2_start = 20;
            var wk2_end = wk2_start + weekDays;

            var wk3_start = 27;
            var wk3_end = wk3_start + weekDays;

            var wk4_start = 3;
            var wk4_end = wk4_start + weekDays;

            var wk5_start = 10;
            var wk5_end = wk5_start + weekDays;

            var wk6_start = 17;
            var wk6_end = wk6_start + weekDays;

            var wk7_start = 24;
            var wk7_end = wk7_start + weekDays;

            var wk8_start = 3;
            var wk8_end = wk8_start + weekDays;

            var wk9_start = 10;
            var wk9_end = wk9_start + weekDays;

            var wk10_start = 17;
            var wk10_end = wk10_start + weekDays;

            var wk11_start = 24;
            var wk11_end = wk11_start + weekDays;

            var wk12_start = 31;
            var wk12_end = 4;

            var wk13_start = 7;
            var wk13_end = wk13_start + weekDays;


            var January = 0;
            var February = 1;
            var March = 2;
            var April = 3;

            /* console.log("newDate: " + newDate); */

            if ((newDate >= wk1_start && newDate <= wk1_end) && (newMonth == January)) {
                weekNumber = 1;
            }

            else if ((newDate >= wk2_start && newDate <= wk2_end) && (newMonth == January)) {
                weekNumber = 2;
            }

            else if ((newDate >= wk3_start && newDate <= wk3_end) && (newMonth == January)) {
                weekNumber = 3;
            }

            else if ((newDate >= wk4_start && newDate <= wk4_end) && (newMonth == February)) {
                weekNumber = 4;
            }

            else if ((newDate >= wk5_start && newDate <= wk5_end) && (newMonth == February)) {
                weekNumber = 5;
            }

            else if ((newDate >= wk6_start && newDate <= wk6_end) && (newMonth == February)) {
                weekNumber = 6;
            }

            else if ((newDate >= wk7_start && newDate <= wk7_end) && (newMonth == February)) {
                weekNumber = 7;
            }

            else if ((newDate >= wk8_start && newDate <= wk8_end) && (newMonth == March)) {
                weekNumber = 8;
            }

            else if ((newDate >= wk9_start && newDate <= wk9_end) && (newMonth == March)) {
                weekNumber = 9;
            }

            else if ((newDate >= wk10_start && newDate <= wk10_end) && (newMonth == March)) {
                weekNumber = 10;
            }

            else if ((newDate >= wk11_start && newDate <= wk11_end) && (newMonth == March)) {
                weekNumber = 11;
            }

            else if (newDate == wk12_start && newMonth == March) {
                weekNumber = 12;
                /* console.log("newDate: " + newDate + "\n newMonth: " + newMonth ); */
            }

            else if (newDate <= wk12_end && newMonth == April) {
                weekNumber = 12;
                /* console.log("newDate: " + newDate + "\n newMonth: " + newMonth ); */
            }


            else if ((newDate >= wk13_start && newDate <= wk13_end) && (newMonth == April)) {
                weekNumber = 13;
            }


            else {
                weekNumber = 'N/A';
            }


            $("#weekNumber").html(weekNumber);

            $("#dateoutput1").html(dateText1);
            $("#dateoutput2").html(dateText2);


        }



    });


}

/* 2 - Fall 2013 to Summer 2014 conversion */
function displayCalendar_Fall2013_Int2_Summer2014_Int2(numberOfMonths) {

    from_semester_title.innerHTML = "Fall 2013 Int 2";
    to_semester_title.innerHTML = "Summer 2014 Int 2";

    $("#weekNumber").html("1");

    $("#dateoutput1").html("28 Oct, Mon");
    $("#dateoutput2").html("23 Jun, Mon");

    function highlightDays(date) {
        var a = new Date(2013, 9, 28); // 2013, October (10-1) 28
        var b = new Date(2013, 11, 6); // 2013, December (12-1) 6

        if (a <= date && date <= b) {
            return [true, 'highlight'];
        }

        return [true, ''];

    }


    $("#datepicker_Fall2013_Int2_Summer2014_Int2").datepicker({
        /*
         dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         */

        inline: true,
        showOtherMonths: true,
        defaultDate: '28-10-13',
        numberOfMonths: numberOfMonths,
        dateFormat: "dd-mm-yy",


        beforeShowDay: highlightDays,


        onSelect: function (dateText, inst) {
            var date = $.datepicker.parseDate(inst.settings.dateFormat || $.datepicker._defaults.dateFormat, dateText, inst.settings);
            var dateText1 = $.datepicker.formatDate("d M, D", date, inst.settings);
            date.setDate(date.getDate() + 238);
            var dateText2 = $.datepicker.formatDate("d M, D", date, inst.settings);

            var newDate = date.getDate();
            var newMonth = date.getMonth();

            /*
             console.log("date: " + date);
             console.log("newDate: " + newDate);
             console.log("newMonth: " + newMonth);
             */

            var weekNumber;
            var weekDays = 4;
            var wk1_start = 23;
            var wk1_end = wk1_start + weekDays;

            var wk2_start = 30;
            var wk2_end = 4;

            var wk3_start = 7;
            var wk3_end = wk3_start + weekDays;

            var wk4_start = 14;
            var wk4_end = wk4_start + weekDays;

            var wk5_start = 21;
            var wk5_end = wk5_start + weekDays;

            var wk6_start = 28;
            var wk6_end = 1;


            var June = 5;
            var July = 6;
            var August = 7;

            /* console.log("newDate: " + newDate); */

            if ((newDate >= wk1_start && newDate <= wk1_end) && (newMonth == June)) {
                weekNumber = 1;
            }

            else if ((newDate == wk2_start) && (newMonth == June)) {
                weekNumber = 2;
            }

            else if ((newDate <= wk2_end) && (newMonth == July)) {
                weekNumber = 2;
            }

            else if ((newDate >= wk3_start && newDate <= wk3_end) && (newMonth == July)) {
                weekNumber = 3;
            }

            else if ((newDate >= wk4_start && newDate <= wk4_end) && (newMonth == July)) {
                weekNumber = 4;
            }

            else if ((newDate >= wk5_start && newDate <= wk5_end) && (newMonth == July)) {
                weekNumber = 5;
            }

            else if ((newDate >= wk6_start ) && (newMonth == July)) {
                weekNumber = 6;
            }

            else if ((newDate == wk6_end) && (newMonth == August)) {
                weekNumber = 6;
            }


            else {
                weekNumber = 'N/A';
            }


            $("#weekNumber").html(weekNumber);

            $("#dateoutput1").html(dateText1);
            $("#dateoutput2").html(dateText2);


        }



    });


}


/* 4 -  Fall 2013 to Fall 2014 conversion */
function displayCalendar_Fall2013_Fall2014(numberOfMonths) {

    from_semester_title.innerHTML = "Fall 2013";
    to_semester_title.innerHTML = "Fall 2014";

    $("#weekNumber").html("1");

    $("#dateoutput1").html("9 Sep, Mon");
    $("#dateoutput2").html("2 Sep, Tue");


    function highlightDays(date) {
        var a = new Date(2013, 8, 9); // September 9, 2013
        var b = new Date(2014, 8, 2); // September 2, 2014

        if (a <= date && date <= b) {
            return [true, 'highlight'];
        }

        return [true, ''];

    }


    $("#datepicker_Fall2013_Fall2014").datepicker({
        /*
         dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         */

        inline: true,
        showOtherMonths: true,
        defaultDate: '09-09-13',
        numberOfMonths: numberOfMonths,
        dateFormat: "dd-mm-yy",


        beforeShowDay: highlightDays,


        onSelect: function (dateText, inst) {
            var date = $.datepicker.parseDate(inst.settings.dateFormat || $.datepicker._defaults.dateFormat, dateText, inst.settings);
            var dateText1 = $.datepicker.formatDate("d M, D", date, inst.settings);
            date.setDate(date.getDate() + 358);
            var dateText2 = $.datepicker.formatDate("d M, D", date, inst.settings);

            var newDate = date.getDate();
            var newMonth = date.getMonth();

            /*
             console.log("date: " + date);
             console.log("newDate: " + newDate);
             console.log("newMonth: " + newMonth);
             */

            var weekNumber;
            var weekDays = 6;
            var wk1_start = 2;
            var wk1_end = wk1_start + weekDays;

            var wk2_start = 9;
            var wk2_end = wk2_start + weekDays;

            var wk3_start = 16;
            var wk3_end = wk3_start + weekDays;

            var wk4_start = 23;
            var wk4_end = wk4_start + weekDays;

            var wk5_start = 30;
            var wk5_end = 6;

            var wk6_start = 7;
            var wk6_end = wk6_start + weekDays;

            var wk7_start = 14;
            var wk7_end = wk7_start + weekDays;

            var wk8_start = 21;
            var wk8_end = wk8_start + weekDays;

            var wk9_start = 28;
            var wk9_end = 3;

            var wk10_start = 4;
            var wk10_end = wk10_start + weekDays;

            var wk11_start = 11;
            var wk11_end = wk11_start + weekDays;

            var wk12_start = 18;
            var wk12_end = wk12_start + weekDays;

            var wk13_start = 25;
            var wk13_end = 1;


            var September = 8;
            var October = 9;
            var November = 10;
            var December = 11;

            /* console.log("newDate: " + newDate); */

            if ((newDate >= wk1_start && newDate <= wk1_end) && (newMonth == September)) {
                weekNumber = 1;
            }

            else if ((newDate >= wk2_start && newDate <= wk2_end) && (newMonth == September)) {
                weekNumber = 2;
            }

            else if ((newDate >= wk3_start && newDate <= wk3_end) && (newMonth == September)) {
                weekNumber = 3;
            }

            else if ((newDate >= wk4_start && newDate <= wk4_end) && (newMonth == September)) {
                weekNumber = 4;
            }

            else if (((newDate == wk5_start) && (newMonth == September)) || ((newDate <= wk5_end) && (newMonth == October))) {
                weekNumber = 5;
            }

            else if ((newDate >= wk6_start && newDate <= wk6_end) && (newMonth == October)) {
                weekNumber = 6;
            }

            else if ((newDate >= wk7_start && newDate <= wk7_end) && (newMonth == October)) {
                weekNumber = 7;
            }

            else if ((newDate >= wk8_start && newDate <= wk8_end) && (newMonth == October)) {
                weekNumber = 8;
            }

            else if (((newDate >= wk9_start && newDate <= 31) && (newMonth == October)) || ((newDate <= wk9_end) && (newMonth == November))) {
                weekNumber = 9;
            }


            else if ((newDate >= wk10_start && newDate <= wk10_end) && (newMonth == November)) {
                weekNumber = 10;
            }

            else if ((newDate >= wk11_start && newDate <= wk11_end) && (newMonth == November)) {
                weekNumber = 11;
            }

            else if ((newDate >= wk12_start && newDate <= wk12_end) && (newMonth == November)) {
                weekNumber = 12;
            }


            else if (((newDate >= wk13_start && newDate <= 30) && (newMonth == November)) || ((newDate == 1) && (newMonth == December))) {
                weekNumber = 13;
            }


            else {
                weekNumber = 'N/A';
            }


            $("#weekNumber").html(weekNumber);

            $("#dateoutput1").html(dateText1);
            $("#dateoutput2").html(dateText2);


        }



    });


}


/* 5 -  Summer 2014 to Fall 2014 conversion */
function displayCalendar_Summer2014_Fall2014(numberOfMonths) {

    from_semester_title.innerHTML = "Summer 2014";
    to_semester_title.innerHTML = "Fall 2014";

    $("#weekNumber").html("1");

    $("#dateoutput1").html("5 May, Mon");
    $("#dateoutput2").html("2 Sep, Tue");

    function highlightDays(date) {
        var a = new Date(2014, 4, 5); // May 5, 2014
        var b = new Date(2014, 8, 2); // September 2, 2014

        if (a <= date && date <= b) {
            return [true, 'highlight'];
        }

        return [true, ''];

    }


    $("#datepicker_Summer2014_Fall2014").datepicker({
        /*
         dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         */

        inline: true,
        showOtherMonths: true,
        defaultDate: '05-05-14',
        numberOfMonths: numberOfMonths,
        dateFormat: "dd-mm-yy",


        beforeShowDay: highlightDays,


        onSelect: function (dateText, inst) {
            var date = $.datepicker.parseDate(inst.settings.dateFormat || $.datepicker._defaults.dateFormat, dateText, inst.settings);
            var dateText1 = $.datepicker.formatDate("d M, D", date, inst.settings);
            date.setDate(date.getDate() + 120);
            var dateText2 = $.datepicker.formatDate("d M, D", date, inst.settings);

            var newDate = date.getDate();
            var newMonth = date.getMonth();

            /*
             console.log("date: " + date);
             console.log("newDate: " + newDate);
             console.log("newMonth: " + newMonth);
             */

            var weekNumber;
            var weekDays = 6;
            var wk1_start = 2;
            var wk1_end = wk1_start + weekDays;

            var wk2_start = 9;
            var wk2_end = wk2_start + weekDays;

            var wk3_start = 16;
            var wk3_end = wk3_start + weekDays;

            var wk4_start = 23;
            var wk4_end = wk4_start + weekDays;

            var wk5_start = 30;
            var wk5_end = 6;

            var wk6_start = 7;
            var wk6_end = wk6_start + weekDays;

            var wk7_start = 14;
            var wk7_end = wk7_start + weekDays;

            var wk8_start = 21;
            var wk8_end = wk8_start + weekDays;

            var wk9_start = 28;
            var wk9_end = 3;

            var wk10_start = 4;
            var wk10_end = wk10_start + weekDays;

            var wk11_start = 11;
            var wk11_end = wk11_start + weekDays;

            var wk12_start = 18;
            var wk12_end = wk12_start + weekDays;

            var wk13_start = 25;
            var wk13_end = 1;


            var September = 8;
            var October = 9;
            var November = 10;
            var December = 11;

            /* console.log("newDate: " + newDate); */

            if ((newDate >= wk1_start && newDate <= wk1_end) && (newMonth == September)) {
                weekNumber = 1;
            }

            else if ((newDate >= wk2_start && newDate <= wk2_end) && (newMonth == September)) {
                weekNumber = 2;
            }

            else if ((newDate >= wk3_start && newDate <= wk3_end) && (newMonth == September)) {
                weekNumber = 3;
            }

            else if ((newDate >= wk4_start && newDate <= wk4_end) && (newMonth == September)) {
                weekNumber = 4;
            }

            else if (((newDate == wk5_start) && (newMonth == September)) || ((newDate <= wk5_end) && (newMonth == October))) {
                weekNumber = 5;
            }

            else if ((newDate >= wk6_start && newDate <= wk6_end) && (newMonth == October)) {
                weekNumber = 6;
            }

            else if ((newDate >= wk7_start && newDate <= wk7_end) && (newMonth == October)) {
                weekNumber = 7;
            }

            else if ((newDate >= wk8_start && newDate <= wk8_end) && (newMonth == October)) {
                weekNumber = 8;
            }

            else if (((newDate >= wk9_start && newDate <= 31) && (newMonth == October)) || ((newDate <= wk9_end) && (newMonth == November))) {
                weekNumber = 9;
            }


            else if ((newDate >= wk10_start && newDate <= wk10_end) && (newMonth == November)) {
                weekNumber = 10;
            }

            else if ((newDate >= wk11_start && newDate <= wk11_end) && (newMonth == November)) {
                weekNumber = 11;
            }

            else if ((newDate >= wk12_start && newDate <= wk12_end) && (newMonth == November)) {
                weekNumber = 12;
            }


            else if (((newDate >= wk13_start && newDate <= 30) && (newMonth == November)) || ((newDate == 1) && (newMonth == December))) {
                weekNumber = 13;
            }


            else {
                weekNumber = 'N/A';
            }


            $("#weekNumber").html(weekNumber);

            $("#dateoutput1").html(dateText1);
            $("#dateoutput2").html(dateText2);


        }



    });


}

/* 6 -  Fall 2014 to Spring 2015 conversion */
function displayCalendar_Fall2014_Spring2015(numberOfMonths) {

    from_semester_title.innerHTML = "Fall 2014";
    to_semester_title.innerHTML = "Spring 2015";

    $("#weekNumber").html("1");

    $("#dateoutput1").html("2 Sep, Tue");
    $("#dateoutput2").html("6 Jan, Tue");

    function highlightDays(date) {
        var a = new Date(2014, 8, 2); // September 2, 2014
        var b = new Date(2014, 11, 8); // December 8, 2014

        if (a <= date && date <= b) {
            return [true, 'highlight'];
        }

        return [true, ''];

    }


    $("#datepicker_Fall2014_Spring2015").datepicker({
        /*
         dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         */

        inline: true,
        showOtherMonths: true,
        defaultDate: '02-09-14',
        numberOfMonths: numberOfMonths,
        dateFormat: "dd-mm-yy",


        beforeShowDay: highlightDays,


        onSelect: function (dateText, inst) {
            var date = $.datepicker.parseDate(inst.settings.dateFormat || $.datepicker._defaults.dateFormat, dateText, inst.settings);
            var dateText1 = $.datepicker.formatDate("d M, D", date, inst.settings);
            date.setDate(date.getDate() + 126);
            var dateText2 = $.datepicker.formatDate("d M, D", date, inst.settings);

            var newDate = date.getDate();
            var newMonth = date.getMonth();

            /*
             console.log("date: " + date);
             console.log("newDate: " + newDate);
             console.log("newMonth: " + newMonth);
             */

            var weekNumber;
            var weekDays = 6;
            var wk1_start = 6;
            var wk1_end = wk1_start + weekDays;

            var wk2_start = 13;
            var wk2_end = wk2_start + weekDays;

            var wk3_start = 20;
            var wk3_end = wk3_start + weekDays;

            var wk4_start = 27;
            var wk4_end = 2;

            var wk5_start = 3;
            var wk5_end = wk5_start + weekDays;

            var wk6_start = 17;
            var wk6_end = wk6_start + weekDays;

            var wk7_start = 24;
            var wk7_end = 2;

            var wk8_start = 3;
            var wk8_end = wk8_start + weekDays;

            var wk9_start = 10;
            var wk9_end = wk9_start + weekDays;

            var wk10_start = 17;
            var wk10_end = wk10_start + weekDays;

            var wk11_start = 24;
            var wk11_end = wk11_start + weekDays;

            var wk12_start = 31;
            var wk12_end = 6;

            var wk13_start = 7;
            var wk13_end = wk13_start + weekDays;


            var January = 0;
            var February = 1;
            var March = 2;
            var April = 3;

            /* console.log("newDate: " + newDate); */

            if ((newDate >= wk1_start && newDate <= wk1_end) && (newMonth == January)) {
                weekNumber = 1;
            }

            else if ((newDate >= wk2_start && newDate <= wk2_end) && (newMonth == January)) {
                weekNumber = 2;
            }

            else if ((newDate >= wk3_start && newDate <= wk3_end) && (newMonth == January)) {
                weekNumber = 3;
            }

            else if ((newDate >= wk4_start) && (newMonth == January)) {
                weekNumber = 4;
            }
            else if ((newDate <= wk4_end) && (newMonth == February)) {
                weekNumber = 4;
            }

            else if ((newDate >= wk5_start && newDate <= wk5_end) && (newMonth == February)) {
                weekNumber = 5;
            }

            else if ((newDate >= wk6_start && newDate <= wk6_end) && (newMonth == February)) {
                weekNumber = 6;
            }

            else if ((newDate >= wk7_start) && (newMonth == February)) {
                weekNumber = 7;
            }

            else if ((newDate <= wk7_end) && (newMonth == March)) {
                weekNumber = 7;
            }


            else if ((newDate >= wk8_start && newDate <= wk8_end) && (newMonth == March)) {
                weekNumber = 8;
            }

            else if ((newDate >= wk9_start && newDate <= wk9_end) && (newMonth == March)) {
                weekNumber = 9;
            }

            else if ((newDate >= wk10_start && newDate <= wk10_end) && (newMonth == March)) {
                weekNumber = 10;
            }

            else if ((newDate >= wk11_start && newDate <= wk11_end) && (newMonth == March)) {
                weekNumber = 11;
            }

            else if (newDate == wk12_start && newMonth == March) {
                weekNumber = 12;
            }

            else if (newDate <= wk12_end && newMonth == April) {
                weekNumber = 12;
            }


            else if ((newDate >= wk13_start && newDate <= wk13_end) && (newMonth == April)) {
                weekNumber = 13;
            }


            else {
                weekNumber = 'N/A';
            }


            $("#weekNumber").html(weekNumber);

            $("#dateoutput1").html(dateText1);
            $("#dateoutput2").html(dateText2);


        }



    });


}

/* 6 -  Fall 2014 to Spring 2015 conversion */
function displayCalendar_Fall2014_Spring2015_5(numberOfMonths) {

    from_semester_title.innerHTML = "Fall 2014";
    to_semester_title.innerHTML = "Spring 2015";


    $("#weekNumber").html("1");

    $("#dateoutput1").html("2 Sep, Tue");
    $("#dateoutput2").html("5 Jan, Mon");

    function highlightDays(date) {
        var a = new Date(2014, 8, 2); // September 2, 2014
        var b = new Date(2014, 11, 8); // December 8, 2014

        if (a <= date && date <= b) {
            return [true, 'highlight'];
        }

        return [true, ''];

    }


    $("#datepicker_Fall2014_Spring2015_5").datepicker({
        /*
         dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         */

        inline: true,
        showOtherMonths: true,
        defaultDate: '02-09-14',
        numberOfMonths: numberOfMonths,
        dateFormat: "dd-mm-yy",


        beforeShowDay: highlightDays,


        onSelect: function (dateText, inst) {
            var date = $.datepicker.parseDate(inst.settings.dateFormat || $.datepicker._defaults.dateFormat, dateText, inst.settings);
            var dateText1 = $.datepicker.formatDate("d M, D", date, inst.settings);
            date.setDate(date.getDate() + 125);
            var dateText2 = $.datepicker.formatDate("d M, D", date, inst.settings);

            var newDate = date.getDate();
            var newMonth = date.getMonth();

            /*
             console.log("date: " + date);
             console.log("newDate: " + newDate);
             console.log("newMonth: " + newMonth);
             */

            var weekNumber;
            var weekDays = 4;
            var wk1_start = 5;
            var wk1_end = wk1_start + weekDays;

            var wk2_start = 12;
            var wk2_end = wk2_start + weekDays;

            var wk3_start = 19;
            var wk3_end = wk3_start + weekDays;

            var wk4_start = 26;
            var wk4_end = wk4_start + weekDays;

            var wk5_start = 2;
            var wk5_end = wk5_start + weekDays;

            var wk6_start = 16;
            var wk6_end = wk6_start + weekDays;

            var wk7_start = 23;
            var wk7_end = wk7_start + weekDays;

            var wk8_start = 2;
            var wk8_end = wk8_start + weekDays;

            var wk9_start = 9;
            var wk9_end = wk9_start + weekDays;

            var wk10_start = 16;
            var wk10_end = wk10_start + weekDays;

            var wk11_start = 23;
            var wk11_end = wk11_start + weekDays;

            var wk12_start = 30;
            var wk12_end = 3;

            var wk13_start = 6;
            var wk13_end = wk13_start + weekDays;


            var January = 0;
            var February = 1;
            var March = 2;
            var April = 3;

            /* console.log("newDate: " + newDate); */

            if ((newDate >= wk1_start && newDate <= wk1_end) && (newMonth == January)) {
                weekNumber = 1;
            }

            else if ((newDate >= wk2_start && newDate <= wk2_end) && (newMonth == January)) {
                weekNumber = 2;
            }

            else if ((newDate >= wk3_start && newDate <= wk3_end) && (newMonth == January)) {
                weekNumber = 3;
            }

            else if ((newDate >= wk4_start && newDate <= wk4_end) && (newMonth == January)) {
                weekNumber = 4;
            }

            else if ((newDate >= wk5_start && newDate <= wk5_end) && (newMonth == February)) {
                weekNumber = 5;
            }

            else if ((newDate >= wk6_start && newDate <= wk6_end) && (newMonth == February)) {
                weekNumber = 6;
            }

            else if ((newDate >= wk7_start && newDate <= wk7_end) && (newMonth == February)) {
                weekNumber = 7;
            }


            else if ((newDate >= wk8_start && newDate <= wk8_end) && (newMonth == March)) {
                weekNumber = 8;
            }

            else if ((newDate >= wk9_start && newDate <= wk9_end) && (newMonth == March)) {
                weekNumber = 9;
            }

            else if ((newDate >= wk10_start && newDate <= wk10_end) && (newMonth == March)) {
                weekNumber = 10;
            }

            else if ((newDate >= wk11_start && newDate <= wk11_end) && (newMonth == March)) {
                weekNumber = 11;
            }

            else if (newDate >= wk12_start && newMonth == March) {
                weekNumber = 12;
            }

            else if (newDate <= wk12_end && newMonth == April) {
                weekNumber = 12;
            }


            else if ((newDate >= wk13_start && newDate <= wk13_end) && (newMonth == April)) {
                weekNumber = 13;
            }


            else {
                weekNumber = 'N/A';
            }


            $("#weekNumber").html(weekNumber);

            $("#dateoutput1").html(dateText1);
            $("#dateoutput2").html(dateText2);


        }



    });


}


function displayCalendar_Fall2014_Summer2015(numberOfMonths) {

    from_semester_title.innerHTML = "Fall 2014";
    to_semester_title.innerHTML = "Summer 2015";


    $("#weekNumber").html("1");

    $("#dateoutput1").html("2 Sep, Tue");
    $("#dateoutput2").html("4 May, Mon");

    function highlightDays(date) {
        var a = new Date(2014, 8, 2); // September 2, 2014
        var b = new Date(2014, 11, 8); // December 8, 2014

        if (a <= date && date <= b) {
            return [true, 'highlight'];
        }

        return [true, ''];

    }


    $("#datepicker_Fall2014_Summer2015").datepicker({
        /*
         dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         */

        inline: true,
        showOtherMonths: true,
        defaultDate: '02-09-14',
        numberOfMonths: numberOfMonths,
        dateFormat: "dd-mm-yy",


        beforeShowDay: highlightDays,


        onSelect: function (dateText, inst) {
            var date = $.datepicker.parseDate(inst.settings.dateFormat || $.datepicker._defaults.dateFormat, dateText, inst.settings);
            var dateText1 = $.datepicker.formatDate("d M, D", date, inst.settings);
            date.setDate(date.getDate() + 244);
            var dateText2 = $.datepicker.formatDate("d M, D", date, inst.settings);

            var newDate = date.getDate();
            var newMonth = date.getMonth();

            /*
             console.log("date: " + date);
             console.log("newDate: " + newDate);
             console.log("newMonth: " + newMonth);
             */

            var weekNumber;
            var weekDays = 4;

            var wk1_start = 4;
            var wk1_end = wk1_start + weekDays;

            var wk2_start = 11;
            var wk2_end = wk2_start + weekDays;

            var wk3_start = 18;
            var wk3_end = wk3_start + weekDays;

            var wk4_start = 25;
            var wk4_end = wk4_start + weekDays;

            var wk5_start = 1;
            var wk5_end = wk5_start + weekDays;

            var wk6_start = 8;
            var wk6_end = wk6_start + weekDays;

            var wk7_start = 15;
            var wk7_end = wk7_start + weekDays;

            var wk8_start = 22;
            var wk8_end = wk8_start + weekDays;

            var wk9_start = 29;
            var wk9_end = 3;

            var wk10_start = 6;
            var wk10_end = wk10_start + weekDays;

            var wk11_start = 13;
            var wk11_end = 3;

            var wk12_start = 20;
            var wk12_end = wk12_start + weekDays;

            var wk13_start = 27;
            var wk13_end = wk13_start + weekDays;

            var May = 4;
            var June = 5;
            var July = 6;

            /*
             console.log("newDate: " + newDate);
             console.log("newMonth: " + newMonth);
             */

            if ((newDate >= wk1_start && newDate <= wk1_end) && (newMonth == May)) {
                weekNumber = 1;
            }

            else if ((newDate >= wk2_start && newDate <= wk2_end) && (newMonth == May)) {
                weekNumber = 2;
            }

            else if ((newDate >= wk3_start && newDate <= wk3_end) && (newMonth == May)) {
                weekNumber = 3;
            }

            else if ((newDate >= wk4_start && newDate <= wk4_end) && (newMonth == May)) {
                weekNumber = 4;
            }

            else if ((newDate >= wk5_start && newDate <= wk5_end) && (newMonth == June)) {
                weekNumber = 5;
            }

            else if ((newDate >= wk6_start && newDate <= wk6_end) && (newMonth == June)) {
                weekNumber = 6;
            }


            else if ((newDate >= wk7_start && newDate <= wk7_end) && (newMonth == June)) {
                weekNumber = 7;
            }

            else if ((newDate >= wk8_start && newDate <= wk8_end) && (newMonth == June)) {
                weekNumber = 8;
            }

            else if (newDate >= wk9_start && newMonth == June) {
                weekNumber = 9;
            }
            else if (newDate <= wk9_end && newMonth == July) {
                weekNumber = 9;
            }

            else if ((newDate >= wk10_start && newDate <= wk10_end) && (newMonth == July)) {
                weekNumber = 10;
            }

            else if (newDate >= wk11_start && newMonth == July) {
                weekNumber = 11;
            }

            else if (newDate <= wk11_end && newMonth == July) {
                weekNumber = 11;
            }


            else if ((newDate >= wk12_start && newDate <= wk12_end) && (newMonth == July)) {
                weekNumber = 12;
            }

            else if ((newDate >= wk13_start && newDate <= wk13_end) && (newMonth == July)) {
                weekNumber = 13;
            }


            else {
                weekNumber = 'N/A';
            }


            $("#weekNumber").html(weekNumber);

            $("#dateoutput1").html(dateText1);
            $("#dateoutput2").html(dateText2);


        }



    });


}


function displayCalendar_Fall2014_Summer2015_Int2(numberOfMonths) {

    from_semester_title.innerHTML = "Fall 2014";
    to_semester_title.innerHTML = "Summer 2015 Int 2";


    $("#weekNumber").html("1");

    $("#dateoutput1").html("2 Sep, Tue");
    $("#dateoutput2").html("22 June, Mon");

    function highlightDays(date) {
        var a = new Date(2014, 8, 2); // September 2, 2014
        var b = new Date(2014, 11, 8); // December 8, 2014

        if (a <= date && date <= b) {
            return [true, 'highlight'];
        }

        return [true, ''];

    }


    $("#datepicker_Fall2014_Summer2015_Int2").datepicker({
        /*
         dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         */

        inline: true,
        showOtherMonths: true,
        defaultDate: '02-09-14',
        numberOfMonths: numberOfMonths,
        dateFormat: "dd-mm-yy",


        beforeShowDay: highlightDays,


        onSelect: function (dateText, inst) {
            var date = $.datepicker.parseDate(inst.settings.dateFormat || $.datepicker._defaults.dateFormat, dateText, inst.settings);
            var dateText1 = $.datepicker.formatDate("d M, D", date, inst.settings);
            date.setDate(date.getDate() + 293);
            var dateText2 = $.datepicker.formatDate("d M, D", date, inst.settings);

            var newDate = date.getDate();
            var newMonth = date.getMonth();


            console.log("date: " + date);
            console.log("newDate: " + newDate);
            console.log("newMonth: " + newMonth);


            var weekNumber;
            var weekDays = 4;
            var wk1_start = 22;
            var wk1_end = wk1_start + weekDays;


            var wk2_start = 29;
            var wk2_end = 3;

            var wk3_start = 6;
            var wk3_end = wk3_start + weekDays;

            var wk4_start = 13;
            var wk4_end = wk4_start + weekDays;

            var wk5_start = 20;
            var wk5_end = wk5_start + weekDays;

            var wk6_start = 27;
            var wk6_end = wk6_start + weekDays;

            var wk7_start = 3;
            var wk7_end = wk7_start + weekDays;

            var wk8_start = 10;
            var wk8_end = wk8_start + weekDays;

            var wk9_start = 17;
            var wk9_end = wk9_start + weekDays;

            var wk10_start = 24;
            var wk10_end = 3;

            var wk11_start = 31;
            var wk11_end = 4;

            var wk12_start = 7;
            var wk12_end = wk12_start + weekDays;

            var wk13_start = 14;
            var wk13_end = wk13_start + weekDays;

            var June = 5;
            var July = 6;
            var August = 7;
            var September = 8;

            /*
             console.log("newDate: " + newDate);
             console.log("newMonth: " + newMonth);
             */


            if ((newDate >= wk1_start && newDate <= wk1_end) && (newMonth == June)) {
                weekNumber = 1;
            }

            else if (newDate >= wk2_start && newMonth == June) {
                weekNumber = 2;
            }

            else if (newDate <= wk2_end && newMonth == July) {
                weekNumber = 2;
            }

            else if ((newDate >= wk3_start && newDate <= wk3_end) && (newMonth == July)) {
                weekNumber = 3;
            }

            else if ((newDate >= wk4_start && newDate <= wk4_end) && (newMonth == July)) {
                weekNumber = 4;
            }

            else if ((newDate >= wk5_start && newDate <= wk5_end) && (newMonth == July)) {
                weekNumber = 5;
            }

            else if ((newDate >= wk6_start && newDate <= wk6_end) && (newMonth == July)) {
                weekNumber = 6;
            }

            else if ((newDate >= wk7_start && newDate <= wk7_end) && (newMonth == August)) {
                weekNumber = 7;
            }


            else if ((newDate >= wk8_start && newDate <= wk8_end) && (newMonth == August)) {
                weekNumber = 8;
            }

            else if ((newDate >= wk9_start && newDate <= wk9_end) && (newMonth == August)) {
                weekNumber = 9;
            }

            else if ((newDate >= wk10_start && newDate <= wk10_end) && (newMonth == August)) {
                weekNumber = 10;
            }


            else if (newDate >= wk11_start && newMonth == August) {
                weekNumber = 11;
            }

            else if (newDate <= wk11_end && newMonth == August) {
                weekNumber = 11;
            }

            else if ((newDate >= wk12_start && newDate <= wk12_end) && (newMonth == September)) {
                weekNumber = 12;
            }

            else if ((newDate >= wk13_start && newDate <= wk13_end) && (newMonth == September)) {
                weekNumber = 13;
            }


            else {
                weekNumber = 'N/A';
            }


            $("#weekNumber").html(weekNumber);

            $("#dateoutput1").html(dateText1);
            $("#dateoutput2").html(dateText2);


        }



    });


}


function displayCalendar_Spring2015_Summer2015(numberOfMonths) {

    from_semester_title.innerHTML = "Spring 2015";
    to_semester_title.innerHTML = "Summer 2015";


    $("#weekNumber").html("1");

    $("#dateoutput1").html("6 Jan, Tue");
    $("#dateoutput2").html("4 May, Mon");

    function highlightDays(date) {
        var a = new Date(2015, 0, 6); // Jan 6, 2015
        var b = new Date(2015, 3, 20); // April 20, 2015

        if (a <= date && date <= b) {
            return [true, 'highlight'];
        }

        return [true, ''];

    }


    $("#datepicker_Spring2015_Summer2015").datepicker({
        /*
         dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         */

        inline: true,
        showOtherMonths: true,
        defaultDate: '06-01-15',
        numberOfMonths: numberOfMonths,
        dateFormat: "dd-mm-yy",


        beforeShowDay: highlightDays,


        onSelect: function (dateText, inst) {
            var date = $.datepicker.parseDate(inst.settings.dateFormat || $.datepicker._defaults.dateFormat, dateText, inst.settings);
            var dateText1 = $.datepicker.formatDate("d M, D", date, inst.settings);
            date.setDate(date.getDate() + 118);
            var dateText2 = $.datepicker.formatDate("d M, D", date, inst.settings);

            var newDate = date.getDate();
            var newMonth = date.getMonth();

            /*
             console.log("date: " + date);
             console.log("newDate: " + newDate);
             console.log("newMonth: " + newMonth);
             */

            var weekNumber;
            var weekDays = 4;

            var wk1_start = 4;
            var wk1_end = wk1_start + weekDays;

            var wk2_start = 11;
            var wk2_end = wk2_start + weekDays;

            var wk3_start = 18;
            var wk3_end = wk3_start + weekDays;

            var wk4_start = 25;
            var wk4_end = wk4_start + weekDays;

            var wk5_start = 1;
            var wk5_end = wk5_start + weekDays;

            var wk6_start = 8;
            var wk6_end = wk6_start + weekDays;

            var wk7_start = 15;
            var wk7_end = wk7_start + weekDays;

            var wk8_start = 22;
            var wk8_end = wk8_start + weekDays;

            var wk9_start = 29;
            var wk9_end = 3;

            var wk10_start = 6;
            var wk10_end = wk10_start + weekDays;

            var wk11_start = 13;
            var wk11_end = 3;

            var wk12_start = 20;
            var wk12_end = wk12_start + weekDays;

            var wk13_start = 27;
            var wk13_end = wk13_start + weekDays;

            var May = 4;
            var June = 5;
            var July = 6;

            /*
             console.log("newDate: " + newDate);
             console.log("newMonth: " + newMonth);
             */

            if ((newDate >= wk1_start && newDate <= wk1_end) && (newMonth == May)) {
                weekNumber = 1;
            }

            else if ((newDate >= wk2_start && newDate <= wk2_end) && (newMonth == May)) {
                weekNumber = 2;
            }

            else if ((newDate >= wk3_start && newDate <= wk3_end) && (newMonth == May)) {
                weekNumber = 3;
            }

            else if ((newDate >= wk4_start && newDate <= wk4_end) && (newMonth == May)) {
                weekNumber = 4;
            }

            else if ((newDate >= wk5_start && newDate <= wk5_end) && (newMonth == June)) {
                weekNumber = 5;
            }

            else if ((newDate >= wk6_start && newDate <= wk6_end) && (newMonth == June)) {
                weekNumber = 6;
            }


            else if ((newDate >= wk7_start && newDate <= wk7_end) && (newMonth == June)) {
                weekNumber = 7;
            }

            else if ((newDate >= wk8_start && newDate <= wk8_end) && (newMonth == June)) {
                weekNumber = 8;
            }

            else if (newDate >= wk9_start && newMonth == June) {
                weekNumber = 9;
            }
            else if (newDate <= wk9_end && newMonth == July) {
                weekNumber = 9;
            }

            else if ((newDate >= wk10_start && newDate <= wk10_end) && (newMonth == July)) {
                weekNumber = 10;
            }

            else if (newDate >= wk11_start && newMonth == July) {
                weekNumber = 11;
            }

            else if (newDate <= wk11_end && newMonth == July) {
                weekNumber = 11;
            }


            else if ((newDate >= wk12_start && newDate <= wk12_end) && (newMonth == July)) {
                weekNumber = 12;
            }

            else if ((newDate >= wk13_start && newDate <= wk13_end) && (newMonth == July)) {
                weekNumber = 13;
            }


            else {
                weekNumber = 'N/A';
            }


            $("#weekNumber").html(weekNumber);

            $("#dateoutput1").html(dateText1);
            $("#dateoutput2").html(dateText2);


        }



    });


}