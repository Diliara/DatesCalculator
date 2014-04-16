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
        //console.log("here");
        displayCalendar(1);
    }
    else {
        //console.log("there");
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
        var a = new Date(2013, 8, 9); // September 9, 2013
        var b = new Date(2013, 11, 6); // December 6, 2013

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