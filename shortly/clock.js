// -----------  toLocaleString() limk with new Date() and display it by innerHTML ---------------
function clock(){
var fullDate = new Date();
document.getElementById('total').innerHTML = (fullDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
);
}

setInterval(clock,100);
