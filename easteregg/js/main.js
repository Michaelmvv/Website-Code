// Easter_Egg JS

function easterEgg() {
    var message, easter_egg;
    message = document.getElementById("message");
    message.innerHTML = "";
    easter_egg = document.getElementById("message").value;
    try { 
        if(easter_egg == "true")  throw "correct	";
    }
    catch(err) {
        message.innerHTML = " " + err;
    }
    finally {
        document.getElementById("message").value = "";
    }
}