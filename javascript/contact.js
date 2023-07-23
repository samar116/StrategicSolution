const blur =document.getElementById("blur");
const alert =document.getElementById("alert");

function validataForm() {
let name = document.forms["contactForm"]["name"].value;
let email = document.forms["contactForm"]["email"].value;
let subject = document.forms["contactForm"]["subject"].value;
let message = document.forms["contactForm"]["message"].value;
if (name == "" || email == "" || subject == "" || message == "") {
blur.classList.add("active");
alert.classList.add("active");
return false;
}
}

function removeAlert() {
blur.classList.remove("active");
alert.classList.remove("active");
}