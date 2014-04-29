/**
 * Created by diliara on 4/17/14.
 */

var calGeneratorBtn = document.querySelector('#calGenerator');

calGeneratorBtn.addEventListener('click', calGenerator);


function calGenerator() {
    event.preventDefault();
    var fromSemester = document.querySelector('#fromSemester').value;
    var toSemester = document.querySelector('#toSemester').value;
    var datepicker_Fall2013_Spring2014 = document.querySelector('#datepicker_Fall2013_Spring2014');
    var datepicker_Spring2014_Summer2014 = document.querySelector('#datepicker_Spring2014_Summer2014');

    var datepicker_table = document.querySelector('#datepicker_table');



    /*
     console.log("fromSemester: " + fromSemester);
     console.log("toSemester: " + toSemester);
     */


    if ((fromSemester == "spring_2014") && (toSemester == "summer_2014")) {
        datepicker_table.style.visibility = 'visible';
        datepicker_Spring2014_Summer2014.style.visibility = 'visible';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';

        displayCalendar_Spring2014_Summer2014(1);

    }


    else if ((fromSemester == "fall_2013") && (toSemester == "spring_2014")) {
        datepicker_table.style.visibility = 'visible';
        datepicker_Fall2013_Spring2014.style.visibility = 'visible';
        datepicker_Spring2014_Summer2014.style.visibility = 'hidden';


        displayCalendar_Fall2013_Spring2014(1);
    }


    else {
      /*  calendar.style.visibility = 'hidden'; */
        alert("No calendar available for the setup migration dates");
        datepicker_table.style.visibility = 'hidden';
        datepicker_Spring2014_Summer2014.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';





    }


}


/*
 var fromSemester = document.getElementById("fromSemester");
 var fromSemesterSelection = fromSemester.options[fromSemester.selectedIndex].value;

 if (fromSemesterSelection == "1141") {
 alert("APPLE!!!");
 }

 */