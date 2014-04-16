/*
 * jQuery UI Datepicker: Parse and Format Dates
 * http://salman-w.blogspot.com/2013/01/jquery-ui-datepicker-examples.html
 *
 *
 */

// media query event handler
if (matchMedia) {
    var mq = window.matchMedia("(max-width: 800px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {

    if (mq.matches) {
      //  console.log("here");
        displayCalendar(1);
    }
    else {
     //   console.log("there");
        displayCalendar(4);

    }

}



function displayCalendar(numberOfMonths) {

    /*
   var numberOfMonths = Number(document.getElementById("numberOfMonths").innerHTML);
  var numberOfMonths = Number(document.getElementById("numberOfMonths").value);
    console.log("numberOfMonths: " + numberOfMonths);*/

    //var dates = ['09/09/2013', '12/06/2013'];

    function highlightDays(date) {
        //month starts as 0
        var a = new Date(2014, 0, 13); // first day of FROM semester - September 9, 2013 - 2014, January 13
        var b = new Date(2014, 3, 11); // last day of FROM semester - December 6, 2013 - 2014, April 11

        if (a <= date && date <= b) {
            return [true, 'highlight'];
        }

        return [true, ''];

    }


    $("#datepicker").datepicker({
        /*
         dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         */

        inline: true,
        showOtherMonths: true,
        defaultDate: '13-01-14', //09-09-13 dd-mm-yy
        numberOfMonths: numberOfMonths,
        dateFormat: "dd-mm-yy",


        beforeShowDay: highlightDays,


        onSelect: function (dateText, inst) {
            var date = $.datepicker.parseDate(inst.settings.dateFormat || $.datepicker._defaults.dateFormat, dateText, inst.settings);
            var dateText1 = $.datepicker.formatDate("d M, D", date, inst.settings);
            date.setDate(date.getDate() + 119); //old - 126
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
            var wk1_start = 12;
            var wk1_end = wk1_start + weekDays;

            var wk2_start = 19;
            var wk2_end = wk2_start + weekDays;

            var wk3_start = 26;
            var wk3_end = wk3_start + weekDays;

            var wk4_start = 2;
            var wk4_end = wk4_start + weekDays;

            var wk5_start = 9;
            var wk5_end = wk5_start + weekDays;

            var wk6_start = 16;
            var wk6_end = wk6_start + weekDays;

            var wk7_start = 23;
            var wk7_end = wk7_start + weekDays;

            var wk8_start = 30;
            var wk8_end = wk8_start + weekDays;

            var wk9_start = 7;
            var wk9_end = wk9_start + weekDays;

            var wk10_start = 14;
            var wk10_end = wk10_start + weekDays;

            var wk11_start = 21;
            var wk11_end = wk11_start + weekDays;

            var wk12_start = 28;
            var wk12_end = 1;

            var wk13_start = 4;
            var wk13_end = wk13_start + weekDays;



            //Jan - 0; Dec - 11
            var Month1 = 4;
            var Month2 = 5;
            var Month3 = 6;
            var Month4 = 7;




            if ((newDate >= wk1_start && newDate <= wk1_end) && (newMonth == Month1)) {
                weekNumber = 1;
            }

            else if ((newDate >= wk2_start && newDate <= wk2_end) && (newMonth == Month1)) {
                weekNumber = 2;
            }

            else if ((newDate >= wk3_start && newDate <= wk3_end) && (newMonth == Month1)) {
                weekNumber = 3;
            }

            else if ((newDate >= wk4_start && newDate <= wk4_end) && (newMonth == Month2)) {
                weekNumber = 4;
            }

            else if ((newDate >= wk5_start && newDate <= wk5_end) && (newMonth == Month2)) {
                weekNumber = 5;
            }

            else if ((newDate >= wk6_start && newDate <= wk6_end) && (newMonth == Month2)) {
                weekNumber = 6;
            }

            else if ((newDate >= wk7_start && newDate <= wk7_end) && (newMonth == Month2)) {
                weekNumber = 7;
            }

            else if ((newDate >= wk8_start && newDate <= wk8_end) && (newMonth == Month2)) {
                weekNumber = 8;
            }

            else if ((newDate >= wk9_start && newDate <= wk9_end) && (newMonth == Month3)) {
                weekNumber = 9;
            }

            else if ((newDate >= wk10_start && newDate <= wk10_end) && (newMonth == Month3)) {
                weekNumber = 10;
            }

            else if ((newDate >= wk11_start && newDate <= wk11_end) && (newMonth == Month3)) {
                weekNumber = 11;
            }

            //adjusting criteria for weeks that have days in multiple months

            else if ((newDate >= wk12_start && newDate <= (wk12_start + 3)) && (newMonth == Month3)) {
                weekNumber = 12;
             }

            else if (newDate == wk12_end && newMonth == Month4) {
                weekNumber = 12;
            }


            else if ((newDate >= wk13_start && newDate <= wk13_end) && (newMonth == Month4)) {
                weekNumber = 13;
            }


            else {
                weekNumber = 'N/A';
            }

            /*
            console.log("     ~~~~~~~> newDate: " + newDate);
            console.log("     ~~~~~~~> wk12_start: " + wk12_start);
            console.log("     ~~~~~~~> wk12_end: " + wk12_end);
            console.log("     ~~~~~~~> newMonth: " + newMonth);
            */



            $("#weekNumber").html(weekNumber);

            $("#dateoutput1").html(dateText1);
            $("#dateoutput2").html(dateText2);


        }



    });


}