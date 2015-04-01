

var calGeneratorBtn = document.querySelector('#calGenerator');

calGeneratorBtn.addEventListener('click', calGenerator);


function calGenerator() {
    event.preventDefault();
    var fromSemester = document.querySelector('#fromSemester').value;
    var toSemester = document.querySelector('#toSemester').value;
    var datepicker_Fall2013_Spring2014 = document.querySelector('#datepicker_Fall2013_Spring2014');
    var datepicker_Spring2014_Summer2014 = document.querySelector('#datepicker_Spring2014_Summer2014');
    var datepicker_Fall2013_Int2_Summer2014_Int2 = document.querySelector('#datepicker_Fall2013_Int2_Summer2014_Int2');
    var datepicker_Fall2013_Fall2014 = document.querySelector('#datepicker_Fall2013_Fall2014');
    var datepicker_Summer2014_Fall2014 = document.querySelector('#datepicker_Summer2014_Fall2014');
    var datepicker_Fall2014_Spring2015 = document.querySelector('#datepicker_Fall2014_Spring2015');
    var datepicker_Fall2014_Spring2015_5 = document.querySelector('#datepicker_Fall2014_Spring2015_5');
    var datepicker_Fall2014_Summer2015 = document.querySelector('#datepicker_Fall2014_Summer2015');

    var datepicker_Fall2014_Summer2015_Int2 = document.querySelector('#datepicker_Fall2014_Summer2015_Int2');

    var datepicker_table = document.querySelector('#datepicker_table');


    /*
     console.log("fromSemester: " + fromSemester);
     console.log("toSemester: " + toSemester);
     */


    if ((fromSemester == "spring_2014") && (toSemester == "summer_2014")) {
        datepicker_table.style.visibility = 'visible';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Fall2013_Int2_Summer2014_Int2.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Summer2014_Fall2014.style.visibility = 'hidden';
        datepicker_Spring2014_Summer2014.style.visibility = 'visible';
        datepicker_Fall2014_Spring2015.style.visibility = 'hidden';
        datepicker_Fall2014_Spring2015_5.style.visibility = 'hidden';
        datepicker_Fall2014_Summer2015.style.visibility = 'hidden';
        datepicker_Fall2014_Summer2015_Int2.style.visibility = 'hidden';



        displayCalendar_Spring2014_Summer2014(1);

    }


    else if ((fromSemester == "fall_2013") && (toSemester == "spring_2014")) {
        datepicker_table.style.visibility = 'visible';
        datepicker_Spring2014_Summer2014.style.visibility = 'hidden';
        datepicker_Fall2013_Int2_Summer2014_Int2.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Summer2014_Fall2014.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'visible';

        datepicker_Fall2014_Spring2015.style.visibility = 'hidden';
        datepicker_Fall2014_Spring2015_5.style.visibility = 'hidden';
        datepicker_Fall2014_Summer2015.style.visibility = 'hidden';
        datepicker_Fall2014_Summer2015_Int2.style.visibility = 'hidden';


        displayCalendar_Fall2013_Spring2014(1);
    }

    else if ((fromSemester == "fall_2013_int2") && (toSemester == "summer_2014_int2")) {
        datepicker_table.style.visibility = 'visible';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Spring2014_Summer2014.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Summer2014_Fall2014.style.visibility = 'hidden';
        datepicker_Fall2013_Int2_Summer2014_Int2.style.visibility = 'visible';
        datepicker_Fall2014_Spring2015.style.visibility = 'hidden';
        datepicker_Fall2014_Spring2015_5.style.visibility = 'hidden';


        displayCalendar_Fall2013_Int2_Summer2014_Int2(1);
    }

    else if ((fromSemester == "fall_2013") && (toSemester == "fall_2014")) {
        datepicker_table.style.visibility = 'visible';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Spring2014_Summer2014.style.visibility = 'hidden';
        datepicker_Fall2013_Int2_Summer2014_Int2.style.visibility = 'hidden';

        datepicker_Summer2014_Fall2014.style.visibility = 'hidden';

        datepicker_Fall2013_Fall2014.style.visibility = 'visible';
        datepicker_Fall2014_Spring2015.style.visibility = 'hidden';
        datepicker_Fall2014_Spring2015_5.style.visibility = 'hidden';
        datepicker_Fall2014_Summer2015.style.visibility = 'hidden';

        datepicker_Fall2014_Summer2015_Int2.style.visibility = 'hidden';


        displayCalendar_Fall2013_Fall2014(1);
    }

    else if ((fromSemester == "summer_2014") && (toSemester == "fall_2014")) {
        datepicker_table.style.visibility = 'visible';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Spring2014_Summer2014.style.visibility = 'hidden';
        datepicker_Fall2013_Int2_Summer2014_Int2.style.visibility = 'hidden';
        datepicker_Fall2013_Fall2014.style.visibility = 'hidden';
        datepicker_Summer2014_Fall2014.style.visibility = 'visible';

        datepicker_Fall2014_Spring2015.style.visibility = 'hidden';
        datepicker_Fall2014_Spring2015_5.style.visibility = 'hidden';
        datepicker_Fall2014_Summer2015.style.visibility = 'hidden';
        datepicker_Fall2014_Summer2015_Int2.style.visibility = 'hidden';

        displayCalendar_Summer2014_Fall2014(1);
    }

    else if ((fromSemester == "fall_2014") && (toSemester == "spring_2015")) {
        datepicker_table.style.visibility = 'visible';
        datepicker_Spring2014_Summer2014.style.visibility = 'hidden';
        datepicker_Fall2013_Int2_Summer2014_Int2.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Summer2014_Fall2014.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Fall2014_Spring2015.style.visibility = 'visible';
        datepicker_Fall2014_Spring2015_5.style.visibility = 'hidden';
        datepicker_Fall2014_Summer2015.style.visibility = 'hidden';
        datepicker_Fall2014_Summer2015_Int2.style.visibility = 'hidden';



        displayCalendar_Fall2014_Spring2015(1);
    }

    else if ((fromSemester == "fall_2014") && (toSemester == "spring_2015_5")) {
        datepicker_table.style.visibility = 'visible';
        datepicker_Spring2014_Summer2014.style.visibility = 'hidden';
        datepicker_Fall2013_Int2_Summer2014_Int2.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Summer2014_Fall2014.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Fall2014_Spring2015.style.visibility = 'hidden';
        datepicker_Fall2014_Spring2015_5.style.visibility = 'visible';
        datepicker_Fall2014_Summer2015.style.visibility = 'hidden';
        datepicker_Fall2014_Summer2015_Int2.style.visibility = 'hidden';



        displayCalendar_Fall2014_Spring2015_5(1);
    }

    else if ((fromSemester == "fall_2014") && (toSemester == "summer_2015")) {
        datepicker_table.style.visibility = 'visible';
        datepicker_Spring2014_Summer2014.style.visibility = 'hidden';
        datepicker_Fall2013_Int2_Summer2014_Int2.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Summer2014_Fall2014.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Fall2014_Spring2015.style.visibility = 'hidden';
        datepicker_Fall2014_Spring2015_5.style.visibility = 'hidden';
        datepicker_Fall2014_Summer2015.style.visibility = 'visible';
        datepicker_Fall2014_Summer2015_Int2.style.visibility = 'hidden';



        displayCalendar_Fall2014_Summer2015(1);
    }

    else if ((fromSemester == "fall_2014") && (toSemester == "summer_2015_int2")) {
        datepicker_table.style.visibility = 'visible';
        datepicker_Spring2014_Summer2014.style.visibility = 'hidden';
        datepicker_Fall2013_Int2_Summer2014_Int2.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Summer2014_Fall2014.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Fall2014_Spring2015.style.visibility = 'hidden';
        datepicker_Fall2014_Spring2015_5.style.visibility = 'hidden';
        datepicker_Fall2014_Summer2015.style.visibility = 'hidden';
        datepicker_Fall2014_Summer2015_Int2.style.visibility = 'visible';


        displayCalendar_Fall2014_Summer2015_Int2(1);
    }


    else {
        /*  calendar.style.visibility = 'hidden'; */
        alert("No calendar available for the setup migration dates");
        datepicker_table.style.visibility = 'hidden';
        datepicker_Spring2014_Summer2014.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Fall2013_Int2_Summer2014_Int2.style.visibility = 'hidden';
        datepicker_Fall2013_Spring2014.style.visibility = 'hidden';
        datepicker_Summer2014_Fall2014.style.visibility = 'hidden';

        datepicker_Fall2014_Spring2015.style.visibility = 'hidden';
        datepicker_Fall2014_Spring2015_5.style.visibility = 'hidden';


    }


}


/*
 var fromSemester = document.getElementById("fromSemester");
 var fromSemesterSelection = fromSemester.options[fromSemester.selectedIndex].value;

 if (fromSemesterSelection == "1141") {
 alert("APPLE!!!");
 }

 */