
// used to add sound if current time and alarm time is same
var audio = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");
		audio.loop = true;

var eq = document.getElementById('clock');

// display current time by the second
var currentTime = setInterval(function(){
	var date = new Date();

	var hours = (12 - (date.getHours()));
	// var hours = date.getHours();

	var minutes = date.getMinutes();

	var seconds = date.getSeconds();

	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


	//Now,it changes military time to standard time

	if (hours < 0) {
		hours = hours * -1;
	} else if (hours == 0) {
		hours = 12;
	} else {
		hours = hours;
	}


	eq.textContent = appendZero(hours) + ":" + appendZero(minutes) + ":" + appendZero(seconds) + "" + ampm;

},1000);

/*After that, we create a function to add hour, minute, second, am/pm, appendzero or setting an alarm, set an alarm time and audio and finally clear the alarm means reset the alarm*/

function appendZero(time) {

		return (time < 10) ? "0" + time : time;

}

function hoursMenu(){

	var select = document.getElementById('alarmhours');
	var hrs = 12;

	for (i=1; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);

	}
}
hoursMenu();

function minutemenu(){

	var select = document.getElementById('alarmminutes');
	var min = 59;

	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minutemenu();

function secondmenu(){

	var select = document.getElementById('alarmseconds');
	var sec = 59;

	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secondmenu();

//function sets an alarm
function setAlarm() {

	var hr = document.getElementById('alarmhours');

	var min = document.getElementById('alarmminutes');

	var sec = document.getElementById('alarmseconds');

	var apperend = document.getElementById('ampm');


    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = apperend.options[apperend.selectedIndex].value;

    var alarmTime = appendZero(selectedHour) + ":" + appendZero(selectedMin) + ":" + appendZero(selectedSec) + selectedAP;
    console.log('alarmTime:' + alarmTime);

    document.getElementById('alarmhours').disabled = true;
	document.getElementById('alarmminutes').disabled = true;
	document.getElementById('alarmseconds').disabled = true;
	document.getElementById('ampm').disabled = true;


//when alarmtime is equal to currenttime then play a sound
	var eq = document.getElementById('clock');

/*function to calcutate the current time
then compare it to the alarmtime and play a sound when they are equal
*/

setInterval(function(){

	var date = new Date();

	var hours = (12 - (date.getHours()));

	var minutes = date.getMinutes();

	var seconds = date.getSeconds();

	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
	if (hours < 0) {
		hours = hours * -1;
	} else if (hours == 0) {
		hours = 12;
	} else {
		hours = hours;
	}
	var currentTime = eq.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;
	if (alarmTime == currentTime) {
		audio.play();
		}
},1000);
}
// used to clear the alarm,  when we click on the button
function clearAlarm() {
  document.getElementById('alarmminutes').disabled = false;
	document.getElementById('alarmseconds').disabled = false;
	document.getElementById('alarmhours').disabled = false;
	document.getElementById('ampm').disabled = false;
	audio.pause();
}