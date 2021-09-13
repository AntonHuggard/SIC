const countDownDate = new Date ("September 21, 2021 23:59:00").getTime();

const x = setInterval(function() {
    
    now = new Date().getTime();

    var lockdown_started = false;

    if (start_time > now) {
        end_time = start_time        

    } else {
        lockdown_started = true;
        end_time = countDownDate;
    }

    const distance_end = end_time - now;

    const days = Math.floor(distance_end / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance_end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance_end % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance_end % (1000 * 60)) / 1000);


    if (lockdown_started) { 
        document.getElementById("clock").innerHTML = "<strong>" + days + " days " + hours + " hours " + minutes + " minutes and <br>" + seconds + " seconds </strong>";
        if (distance_end < 0) { // after lockdown
            clearInterval(x);
            document.getElementById("clock").innerHTML = "... You can now leave self-isolation!";
        }
    } else {
        document.getElementById("clock").innerHTML = "you have <strong>" + days + " days " + hours + " hours " + minutes + " minutes and " + seconds + " seconds </strong> of freedom";
    }

}, 1000);