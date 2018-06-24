function nameFn() {
    var nameInput = document.getElementById("name");
    if (!nameInput.checkValidity()) {
        document.getElementById("resultName").innerHTML = "Name is required";
    }
    else{
        document.getElementById("resultName").innerHTML = "";
    }
} 
function emailFn() {
    var emailInput = document.getElementById("email");
    if (!emailInput.checkValidity()) {
        document.getElementById("resultEmail").innerHTML = "Email is required";
    } 
    else{
        var emailText = emailInput.value;
         console.log(emailText);
         symbole = emailText.indexOf("@");
         dot = emailText.lastIndexOf(".");
         if (symbole == -1 || ( dot - symbole < 2 )) 
         {
            document.getElementById("resultEmail").innerHTML = "Enter correct Email";
         }
         else{
            document.getElementById("resultEmail").innerHTML = "";
         }
    }
} 
function subjectFn(){
    var subjectInput = document.getElementById("subject");
    if (!subjectInput.checkValidity()) {
        document.getElementById("resultSubject").innerHTML = "Subject is required";
    }
    else{

        document.getElementById("resultSubject").innerHTML = "";
    }
}
function msgFn(){
    var msgInput = document.getElementById("message");
    if (!msgInput.checkValidity()) {
        document.getElementById("resultMsg").innerHTML = "Message is required";
    }
    else{
        document.getElementById("resultMsg").innerHTML = "";
    }
}