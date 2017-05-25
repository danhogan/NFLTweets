var socket = io();

// For todays date;
Date.prototype.today = function () { 
    return (((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

var dateTime = new Date();
var startTime = dateTime.today() + " @ " + dateTime.timeNow();
$('#startTime').text(startTime);


var bearsCount = 0;
var packersCount = 0;

socket.on('bears', function(msg){
	$('#bearTweets').prepend($('<li>').text(msg.time + ' - @' + msg.user + ': \"' + msg.text + '\"'));
	bearsCount++;
	$('#bearsCounter').text(bearsCount);
	//console.log(msg);
});

socket.on('packers', function(msg){
	$('#packerTweets').prepend($('<li>').text(msg.time + ' - @' + msg.user + ': \"' + msg.text + '\"'));
	packersCount++;
	$('#packersCounter').text(packersCount);
	//console.log(msg);
});