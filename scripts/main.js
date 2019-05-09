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

var toDoList = (function(){
    var elements = [];
    function Element(name,text){
        this.name = name;
        this.text = text;
        return this;
    }
    this.AddElement = function(name,text){
        elements.push(new Element(name,text));
    }
    //this.Update = function(){
    //
    //}
    var removeElement = function(nom){
        setTimeout(function(){
            elements.splice(nom);
            Show();
        },500);
    }
    this.Show = function(){
        var listElem = document.getElementById("to-do-list");
        clearList(listElem);
        for(var i = 0; i < elements.length; i++){
            showSingleElement(listElem,elements[i]);
        }
    }
    function showSingleElement(listElem, element){
        var elem = document.createElement("div");
        elem.classList.add("b-to-do-list__to-do_w500");
        elem.innerHTML = element.name + "<br>" + element.text;
        var checkELem = document.createElement("div");
        checkELem.innerHTML = "<input type=\"checkbox\">"
        checkELem.classList.add("b-to-do-list__check");
        var parentElem = document.createElement("div");
        parentElem.classList.add("b-to-do-list__to-do");
        parentElem.appendChild(checkELem);
        parentElem.appendChild(elem);
        listElem.appendChild(parentElem);
    }
    function clearList(listElem){
        while(listElem.firstChiled){
            listElem.removeChiled(listElem.firstChiled);
        }
    }

    return this;
})();

toDoList.AddElement("Написать \"тудушку\".","Заставить работать текущий проект всеми силами.");
toDoList.AddElement("Написать \"тудушку\".","Заставить работать текущий проект всеми силами.");
toDoList.AddElement("Написать \"тудушку\".","Заставить работать текущий проект всеми силами.");
toDoList.AddElement("Написать \"тудушку\".","Заставить работать текущий проект всеми силами.");

toDoList.Show();
setInterval(function(){ 
    timer.Update(); 
    timer.SetTimer();
},1000);