var textRight = 0;
function moveText() {
    "use strict";
        
            var text = document.getElementById("text");
            textRight += 10;
            text.style.marginLeft = textRight + 'px';
    
	}

function howMany() {
        "use strict";
	    var inputElements = document.getElementById('regForm').getElementsByTagName('input');
        var inputCount = inputElements.length;
        var textCount = 0;
    
        for (var i = 0; i < inputCount; i++) {
            if(inputElements[i].type === "text") {
                textCount = textCount + 1;
            }
        }
    
        alert("Number of total inputs: " + inputCount + "\nNumber of inputs of type text: " + textCount);    
    
	}

var color; 

function colorChanger() {
    "use strict";
	color = document.getElementById("mySelect").value;
    var div = document.getElementById("c");
    div.style.backgroundColor='white';
    
    switch (color) {
        case "1": 
            div.style.backgroundColor='red'
            break;
        case "2": 
            div.style.backgroundColor='green';
            break;
        case "3": 
            div.style.backgroundColor='blue';
            break;
        case "4": 
            div.style.backgroundColor='yellow';
            break;
        case "5": 
            div.style.backgroundColor='orange';
            break;
        case "6": 
            div.style.backgroundColor='purple';
            break;
    }
    
}

function mouseover() {
    "use strict";
    color = document.getElementById("mySelect").value;
    var text = document.getElementById("rb");
    text.style.color='black';
    
    switch (color) {
        case "1": 
            text.style.color='red'
            break;
        case "2": 
            text.style.color='green';
            break;
        case "3": 
            text.style.color='blue';
            break;
        case "4": 
            text.style.color='yellow';
            break;
        case "5": 
            text.style.color='orange';
            break;
        case "6": 
            text.style.color='purple';
            break;
    }
    }

    function mouseout() {
        "use strict";
        document.getElementById("rb").style.color = "white";
    }

"use strict";
    function divide() {
        let num1 = document.getElementById("firstoperand").value;
        let num2 = document.getElementById("secondoperand").value;
        let answer = num1 / num2;
        var text = document.createTextNode(" " + answer + " ");
        document.body.appendChild(text);
    }
    function multiply() {
        let num1 = document.getElementById("firstoperand").value;
        let num2 = document.getElementById("secondoperand").value;
        let answers = num1 * num2;
        var text = document.createTextNode(" " + answers + " ");
        document.body.appendChild(text);
    }