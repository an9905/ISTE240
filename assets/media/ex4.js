 
// Adding Function
var i = 1;
	function jsStyle() {
        "use strict";
        if (i == 1)
        {
            document.getElementById("text").style.color="blue";
            document.getElementById("text").style.fontSize = "30pt";
            i = 0;
        }
        else
        {
            document.getElementById("text").style.color="black";
            document.getElementById("text").style.fontSize ="1em";
            i = 1;
        }
		// This changes the style

	}
    
    function getFormValues() 
    {
       
        "use strict";
        // Make sures it tells us if there is a syntax error
        alert(document.getElementById("fname").value + " " + 
              document.getElementById("lname").value)
              
        let myFirst = document.getElementById("fname").value;
        let myLast = document.getElementById("lname").value;
        console.log(myFirst + " " + myLast)
	}
    
    function getOptions() 
    {
    
        "use strict";
        let qty = document.getElementById("mySelect").length;
        alert("Number of colors: " + qty);
    }
    
    function mouseover ()
    {
        document.getElementById("rb").style.color = "red";
    }

    function mouseout()
    {
        document.getElementById("rb").style.color = "black";
    }
    
    function multiply()
    // function that handles the math behind the multiply button
    {
        firstNumber  = parseInt(document.getElementById("firstoperand").value);
        secondNumber = parseInt(document.getElementById("secondoperand").value);
        let product = firstNumber * secondNumber;
        let answer  = document.querySelector("#result").innerHTML = ` ${product}`;
    }

    function divide()
    // function that handles the math behind the divide button
    {
        firstNumber  = parseInt(document.getElementById("firstoperand").value);
        secondNumber = parseInt(document.getElementById("secondoperand").value);
        let quotient = firstNumber / secondNumber;
        let answer = document.querySelector("#result").innerHTML = ` ${quotient}`;
    }