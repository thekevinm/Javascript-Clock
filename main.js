// var time = new Date();
// console.log(time.getHours() % 12);
// console.log(time.getMinutes());
// console.log(time.getSeconds());

	//NORMAL CLOCK
// var clock = document.getElementById('clock');

// function bigClock() {
// 	var time = new Date();
// 	var hours = (time.getHours() % 12).toString();
// 	var minutes = time.getMinutes().toString();
// 	var seconds = time.getSeconds().toString();

// 	if (hours.length < 2) {
// 		hours = '0' + hours
// 	}

// 	if (minutes.length < 2) {
// 		minutes = '0' + minutes
// 	}

// 	if (seconds.length < 2) {
// 		seconds = '0' + seconds
// 	}

// 	var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
	
// 	clock.textContent = clockStr;
// }

// bigClock();
// setInterval(bigClock, 1000);


	//HEX CLOCK
var clock = document.getElementById('clock');

function bigClock() {
	var time = new Date();
 	var hours = (time.getHours() % 12).toString();
 	var minutes = time.getMinutes().toString();
 	var seconds = time.getSeconds().toString();

 	if (hours.length < 2) {
 		hours = '0' + hours
	}

 	if (minutes.length < 2) {
 		minutes = '0' + minutes
 	}

 	if (seconds.length < 2) {
		seconds = '0' + seconds
	}

	color = "#"+hours+minutes+seconds
	document.body.style.background = color;
	document.getElementById("hex").innerHTML = color;
}

bigClock();
setInterval(bigClock, 1000);