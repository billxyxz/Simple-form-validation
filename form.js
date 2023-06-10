//get all the required elements from the HTML to the DOM
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//add an event on the form element

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});


//create a function that checks the inputs of all the form fields

function checkInputs(){

    //get the values from the inputs

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //username input check
    if(usernameValue === ""){
        setErrorClass(username, "Username cannot be blank")
    }else{
        setSuccessClass(username)
    }

    //email input check
    if(emailValue === ""){
        setErrorClass(email, "Email cannot be blank")
    }else if(!reggs(emailValue)){
        setErrorClass(email, "Enter a valid email")
    }else{
        setSuccessClass(email)
    }
    
    //password input check
    if(passwordValue === ""){
        setErrorClass(password, "Password cannot be blank")
    }else if(passwordValue.length < 7){
        setErrorClass(password, "Minimum of 7 characters")
    }else{
        setSuccessClass(password)
    }

    //password2 input check
    if(password2Value === ""){
        setErrorClass(password2, "Password cannot be blank")
    }else if(password2Value !== passwordValue){
        setErrorClass(password2, "Password does not match")
    }else{
        setSuccessClass(password2)
    }

}

function setErrorClass(input, message){
    const parent = input.parentElement;
    const small = parent.querySelector("small");
    parent.classList = "form-control error"
    small.innerText = message
}

function setSuccessClass(input){
    const parent = input.parentElement;
    parent.classList = "form-control success"
}

function reggs(input){
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input)
}