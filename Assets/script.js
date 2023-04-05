
//global variables 
var timeDisplayEl = $('#currentDay');
var saveBtn = $('.saveBtn');

//call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {

  //current day displayed at top of page
  var currentDay = dayjs().format('MMM DD, YYYY');
  timeDisplayEl.text(currentDay);

  //save button
  saveBtn.on ('click', function(){
   
    //variable for all text from user outlining thier tasks 
    var value = $(this).siblings('.description').val();
    //schedulue hour
    var time = $(this).parent().attr('id');
//logging the time and corresponding task
localStorage.setItem(time, value);
  })

  //so locally stored items appear on webpage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

//current hour of the day where the user is
  var currentHour = dayjs().hour();

  //function for time blocks to appear different colours based on past, present and future
  function hourColour() {

  //isolate each time block
    $(".time-block").each(function() {
      //hour that appears on the schedule converted to number by splitting string
      var schedHour = parseInt($(this).attr('id').split('-')[1]);
      
              //for future hours
        if (currentHour>schedHour) {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');

                //for current hour
              } else if (currentHour === schedHour) {
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');

                //for hours that have past
                } else {
                  $(this).removeClass('future');
                  $(this).removeClass('present');
                  $(this).addClass('past');
        }
    })
};

//apply and run colour time block function
hourColour();
});

