  
    
const form1=document.getElementById("form");
    

    form1.addEventListener("submit",myForm);

    function myForm(e){
        e.preventDefault();

        let checkbox = document.querySelector("input[name=gender]:checked");
        let date = document.getElementById("date");

        validate(date,checkbox);

        // console.log(date.value);

        let date2 = date.value;

        let CC = date2.slice(0,2);
        let YY = date2.slice(2,4);
        let MM = date2.slice(5,7);
        let DD = date2.slice(8,10);

         let birthDay =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
        //  console.log(birthDay);
        let BirthDay = birthDay.toFixed();
        // console.log(BirthDay);
        let maleDays = ["Kwasi","Kwadwo","Kwabena","Kwaku" ,"Yaw" ,"Kofi" ,"Kwame"];
        let femaleDays = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

        if(checkbox.value == "malenames"){
            alert("congratulations!Your Akan name is"+" "+maleDays[BirthDay]);
        }else{
            alert("congratulations!Your Akan name is"+" "+femaleDays[BirthDay]);
        }






        
        
         




    }

        

   

 function validate(date,checkbox){
     if(date.value == ""){
         alert("enter date of birth");
         return;

     }
     if(checkbox == null){
         alert("error");
     }
 }                     