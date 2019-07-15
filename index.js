//<script>
var countDownDate = new Date("July 30, 2019 15:15:12:25").getTime();
//function time)
// call setInterval() with the parameters function and time
var n = setInterval(function()
//n(time(1000);
{
  var down1 = setInterval(1000);
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

},1000);

  //time(1000)
  //setInterval(time(1000);
// setInterval(function name goes here, time (1000 is 1 second))


// create the function that you want to repeat
// this is the timer
