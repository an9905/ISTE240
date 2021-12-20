function checkName() {
    let name = document.getElementById("visitor").value;
    
    if (name == "") {
        //error styling
       document.getElementById("error1").style.display="inline";
       document.getElementById("error1").innerHTML="warning: must enter your name";
       document.getElementById("visitor").style.border="red solid 1px";
       document.getElementById("visitor").style.backgroundColor="salmon";

       console.log("visitor null");
       return false;
    } else {
        //clear error styling
        document.getElementById("error1").style.display="none";
        document.getElementById("error1").innerHTML="";
        document.getElementById("visitor").style.border=null;
        document.getElementById("visitor").style = null;

        console.log("visitor name:"+name);
        return true;
    }
}

function checkGroup() {
    let val = document.getElementById("groupnum").value;
    
    if (val == "" || val=='0') {
        //error styling
       document.getElementById("error1").style.display="inline";
       document.getElementById("error1").innerHTML="warning: must enter 1 or more person(s)";
       document.getElementById("groupnum").style.border="red solid 1px";
       document.getElementById("groupnum").style.backgroundColor="salmon";

       console.log("groupnum null");
       return false;
    } else {
        //clear error styling
        document.getElementById("error1").style.display="none";
        document.getElementById("error1").innerHTML="";
        document.getElementById("groupnum").style.border=null;
        document.getElementById("groupnum").style = null;

        console.log("groupnum:"+val);
        return true;
    }
}

function checkDate() {
    "use strict";

    let dateValid=true;
    let visitDate = document.getElementById("visitdate").value;
    console.log("visitdate: "+visitDate);

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    if(dd<10) { dd = '0' + dd; }; //need this in case day number is one digit
    if(mm>10) { mm = '0' + mm; }; //need this in case month number is one digit

    let td = "" + yyyy + "-" + mm + "-" + dd;
    console.log("system date:"+td);

    if (visitDate >= td) {
        //error styling
        document.getElementById("error1").style.display="inline";
        document.getElementById("error1").innerHTML="warning: must select a date before today";
        document.getElementById("visitdate").style.border="red solid 1px";
        document.getElementById("visitdate").style.backgroundColor="salmon";
        dateValid=false;
    }
    else {
        //clear error styling
        document.getElementById("error1").style.display="none";
        document.getElementById("error1").innerHTML="";
        document.getElementById("visitdate").style.border=null;
        document.getElementById("visitdate").style = null;
        dateValid=true;
    }

    console.log("checkDate() dateValid:"+dateValid);
    return dateValid;
}

function checkRadio() {
    "use strict";

    let riverCheck = document.getElementById("river").checked;
    let museumCheck = document.getElementById("museum").checked;
    let lugiasCheck = document.getElementById("lugias").checked;
    let hannoodleCheck = document.getElementById("hannoodle").checked;
    let cobbshillCheck = document.getElementById("cobbshill").checked;
    let leafnbeanCheck = document.getElementById("leafnbean").checked;

    console.log("river:" + riverCheck + " museum:" + museumCheck + " lugias:" + lugiasCheck + " hnoodle:" +hannoodleCheck + " cobbs" + cobbshillCheck + " leafnbean:" +leafnbeanCheck);
    var radioValid = riverCheck || museumCheck || lugiasCheck || hannoodleCheck || cobbshillCheck || leafnbeanCheck;

    if (!radioValid) {
        //error styling
        document.getElementById("error2").style.display="inline";
        document.getElementById("error2").innerHTML="warning: must select a favorite place";
        document.getElementById("place_container").style.backgroundColor="salmon";
    }
    else {
        //clear error styling
        document.getElementById("error2").style.display="none";
        document.getElementById("error2").innerHTML="";
        document.getElementById("place_container").style.backgroundColor="#d8ec84";
    }

    console.log("radioValid:"+radioValid);
    return radioValid;
}

function checkCheck() {
    "use strict";

    let sand = document.getElementById("sand").checked;
    let quesadilla = document.getElementById("quesadilla").checked;
    let burger = document.getElementById("burger").checked;
    let sticks = document.getElementById("sticks").checked;
    let fries = document.getElementById("fries").checked;
    let taco = document.getElementById("taco").checked;

    console.log("sand:"+sand+ " quesadilla:"+quesadilla+" burger:"+burger+" sticks:"+sticks+" fries:"+fries+" taco:"+taco);
    var checkValid = sand || quesadilla || burger || sticks || fries || taco;

    if (!checkValid) {
        //error styling
        document.getElementById("error3").style.display="inline";
        document.getElementById("error3").innerHTML="warning: must select a favorite place";
        document.getElementById("food_container").style.backgroundColor="salmon";
    }
    else {
        //clear error styling
        document.getElementById("error3").style.display="none";
        document.getElementById("error3").innerHTML="";
        document.getElementById("food_container").style.backgroundColor="#d8ec84";
    }

    console.log("checkValid:"+checkValid);
    return checkValid;
}

function validateForm() {
    "use strict";

    let nameOk = checkName();
    let groupOk = checkGroup();
    let dateOk = checkDate();
    let radioOk = checkRadio();
    let checkOk = checkCheck();
    
    return (nameOk && groupOk && dateOk && radioOk && checkOk);
}