var timer = (function (){
    const DEADLINE = new Date(2019,4,15,00,00,00,00);
    var time;
    var elem = document.getElementById("timer");

    this.Update = function(){
        time = new Date(0);
        time.setMilliseconds(DEADLINE - new Date() - new Date(0));
    }
    this.SetTimer = function(){
        var timeFormate = (time.getDate() >= 10 ? time.getDate() : "0" + time.getDate()) 
                  + " " + (time.getHours() >= 10 ? time.getHours() : "0" + time.getHours()) 
                  + ":" + (time.getMinutes() >= 10 ? time.getMinutes() : "0" + time.getMinutes()) 
                  + ":" + (time.getSeconds() >= 10 ? time.getSeconds() : "0" + time.getSeconds());
        elem.textContent = timeFormate;
    }

    return this;
})();

setInterval(function(){ timer.Update(); timer.SetTimer();},100);