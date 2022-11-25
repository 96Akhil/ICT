let username = document.getElementById("username");
let password = document.getElementById("password");

function validate(myCallback){
    let loginid = "admin";
    let pwd = 12345; 

    if((loginid == username.value)&&(pwd == password.value)){ 
        myCallback();    
    }
    else {
        alert("Not valid");
    }
}


function myCallback(validate){
    window.location.href = "/login.html";
}
