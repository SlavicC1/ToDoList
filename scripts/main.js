class Timer{
    constructor(){
        this.DEADLINE = new Date(2019,4,15,0,0,0,0);
        this._elem = document.getElementById("timer");
        this._time = new Date(0);
    }

    Update(){
        this._time = new Date(0);
        this._time.setMilliseconds(this.DEADLINE - new Date() - new Date(0));
    }

    SetTimer(){
        this._elem.textContent = this._formatDate(this._time);
    }

    _formatDate(time)
    {
        return (this._time.getDate() >= 10 ? this._time.getDate() : "0" + this._time.getDate()) 
        + " " + (this._time.getHours() >= 10 ? this._time.getHours() : "0" + this._time.getHours()) 
        + ":" + (this._time.getMinutes() >= 10 ? this._time.getMinutes() : "0" + this._time.getMinutes()) 
        + ":" + (this._time.getSeconds() >= 10 ? this._time.getSeconds() : "0" + this._time.getSeconds());
    }
}

class Element
{
    constructor(name,text){
        this.name = name;
        this.text = text;
    }
}

class ToDoList{
    constructor(){
        this._elements = [];
    }

    AddElement(name,text){
        this._elements.push(new Element(name,text));
    }

    Update(){
        var listElem = document.getElementById("to-do-list");
        for(var i=0; i < listElem.childNodes.length; i++){
            if(listElem.childNodes[i].firstChild.firstChild.checked){
                this._removeElement(i);
            }
        }
    }
    
    _removeElement(nom){
        this._elements.splice(nom,1);
        this.Show();
    }

    Show(){
        var listElem = document.getElementById("to-do-list");
        this._clearList(listElem);
        document.getElementById("to-do-list")
        for(var i = 0; i < this._elements.length; i++){
            this._showSingleElement(listElem,this._elements[i]);
        }
    }

    _showSingleElement(listElem, element){
        var elem = document.createElement("div");
        elem.classList.add("b-to-do-list__to-do_w500");
        elem.innerHTML = "<strong>" + element.name + "</strong><br>" + element.text;
        
        var checkELem = document.createElement("div");
        checkELem.innerHTML = "<input type=\"checkbox\">"
        checkELem.classList.add("b-to-do-list__check");
        
        var parentElem = document.createElement("div");
        parentElem.classList.add("b-to-do-list__to-do");
        
        parentElem.appendChild(checkELem);
        parentElem.appendChild(elem);
        listElem.appendChild(parentElem);
    }
    
    _clearList(listElem){
        while(listElem.firstChild){
            listElem.removeChild(listElem.firstChild);
        }
    }
}

var timer = new Timer();
var toDoList = new ToDoList();

toDoList.AddElement("Написать \"тудушку\".","Заставить работать текущий проект всеми силами.");
toDoList.AddElement("Написать \"тудушку\".","Заставить работать текущий проект всеми силами.");
toDoList.AddElement("Написать \"тудушку\".","Заставить работать текущий проект всеми силами.");
toDoList.AddElement("Написать \"тудушку\".","Заставить работать текущий проект всеми силами.");

toDoList.Show();
setInterval(function(){ 
    timer.Update(); 
    timer.SetTimer();
    toDoList.Update();
},1000);