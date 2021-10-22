function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("navlist").classList.toggle("navlistactive");
  }

  function timer() {
    var countDownDate = new Date("May 10, 2022 14:00:00").getTime();
   

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    // alert(timeleft);

        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + "days" 
    document.getElementById("hours").innerHTML = hours + "hours"
    document.getElementById("minutes").innerHTML = minutes + "minutes"
    document.getElementById("seconds").innerHTML = seconds + "seconds"
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("minutes").innerHTML = ""
        document.getElementById("seconds").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);
}