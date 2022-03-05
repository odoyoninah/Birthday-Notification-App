// alert("hello world");
// const formAction = document.querySelector("formAction");
// const userData = document.querySelector("input{name=date}");

// formAction.addEventListener("submit",validateUserInfo)
// function validateUserInfo(e) {
//     alert("successfully submited!")}

// console.log (userData.value);

// const convertedDate = new Date(userDate.value)
// console.log(convertedDate.getDay());
// document.querySelector("input#D").value;
var date= document.querySelector("input#date").value;
var form= document.querySelector("form");
form.addEventListener("submit",function(event)
{alert(date);
    event.preventDefault();
});



