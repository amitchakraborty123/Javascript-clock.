function clock(){
    var fullDate = new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
    var ampm;

    // ---------------- am / pm(12 hrs formate) set the clock ------------------ 
    if (hours >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    hours = hours % 12;

    if (hours == 0) {
        hours = 12;
    }

    //  if condition work to display '0' string before a single digit
    if(hours<10){
        hours = "0" + hours;
    }

    if(mins<10){
        mins = "0" + mins;
    }

    if(secs<10){
        secs = "0" + secs;
    }

    document.getElementById('hour').innerHTML =  hours
    document.getElementById('minute').innerHTML = ":" + mins
    document.getElementById('second').innerHTML = ":" + secs + ' ' + ampm
}

setInterval(clock,100);  // we know 1000 milisec = 1 sec; Here we use only 100 milisec to refresh the clock.


