// alert("hello world");
// const formAction = document.querySelector("formAction");
// const userData = document.querySelector("input{name=date}");

// formAction.addEventListener("submit",validateUserInfo)
// function validateUserInfo(e) {
//     alert("successfully submited!")}

// console.log (userData.value);

// const convertedDate = new Date(userDate.value)
// console.log(convertedDate.getDay());
// document.querySelector("input#date").value;
// var date= document.querySelector("input#date").value;
// var form= document.querySelector("form");
// form.addEventListener("submit",function(event)
// {alert(date);
//     event.preventDefault();
// });

// form.addEventListener("submit", function (event) {alert(date);
    // event.preventDefault();});
    
    // form.addEventListener("submit", function (event) {alert(date);
    //     event.preventDefault();});
    //     var form = document.querySelector("form");
    //     var date = document.querySelector("input#date").value;
        // var dateSplit = date.split("-");
        // form.addEventListener("submit", function (event) {
        //     var form = document.querySelector("form");
        //     var date = document.querySelector("input#date").value;
        //     var dateSplit = date.split("-");
        //     [1960, 06, 25]
          
          //   var cc = 20;
          //   var yy = 22;
          //   var mm = 3;
          //   var dd = 5;
        //   var year = dateSplit[0]
        //   let cc =
        //   let yy =
        //   let mm = dateSplit[1]
        //   let dd = dateSplit[2]
          
        //   if(ans === 1 && gender === "male"){
        //       alert("akhan is ")
        //   } else if (){
          
        //   } else{
        //       alert("an error copndition")
        //   }
          
        //     var ans =
        //       (cc
          
        function myForm(){let date=document.getElementById("date").value;
    console.log(date);
    let MM=parseInt(date.slice(5,7));console.log(MM);
    let DD=parseInt(date.slice(8,10));console.log(DD);
    let CC=parseInt(date.slice(0,2));console.log(CC);
    let YY=parseInt(date.slice(2,4));console.log(YY);
    var birthDay=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    console.log(Math.trunc(birthDay));}

    if(birthDay == 0 && gender == "male"){
        alert("your akan name is Kwasi")
    }else if (birthDay==0 && gender=="female"){
        alert("your akan name is Akoswa")}
    // else if (birthDay===1 && gender==="male"){
    //     alert("your akan name is Kwadwo")
    // }else if (birthDay===1 && gender==="female"){
    //     alert("your akan name is Adwoa")}
    // else if (birthDay===2 && gender==="male"){
    //     alert("your akan name is Kwabena")
    // }else if (birthDay===2 && gender==="female"){
    //     alert("your akan name is Abenaa")}
    // else if (birthDay===3 && gender==="male"){
    //     alert("your akan name is Kwaku")
    // }else if (birthDay===3 && gender==="female"){
    //     alert("your akan name is Akua")}
    // else if (birthDay===4 && gender==="male"){
    //     alert("your akan name is Yaw")
    // }else if (birthDay===4 && gender==="female"){
    //     alert("your akan name is Yaa")}
    // else if (birthDay===5 && gender==="male"){
    //     alert("your akan name is Kofi")
    // }else if (birthDay===5 && gender==="female"){
    //     alert("your akan name is Afua")}
    // else if (birthDay===6 && gender==="male"){
    //     alert("your akan name is Kwame")
    // }else if (birthDay===6 && gender==="female"){
    //     alert("your akan name is Ama")}
    // else{
    //     alert("Error");
    //         event.preventDefault();
    //         };  
            
    // // alert("Hello world");        

                      