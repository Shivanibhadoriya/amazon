
function saveData(){
    let email,password;
    // this will return value from the id which is email
    email=document.getElementById("email").value; 
    // this will return value from the id which is email
    password=document.getElementById("password").value;

   let user_records=new Array();
   // JSON.parse -> convert string into  Object  ,
   user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")):[];
   // v is iterator for iterating each element of array
   if(user_records.some((v)=>{   
    return v.email==email && v.password == password;
   })){
    alert("Login Successfull");
    let current_user = user_records.filter((v)=>{
        return v.email==email && v.password==password;
    })[0];
     localStorage.setItem("email",current_user.email)
     window.location.href="home.html";
   }
 else{
      alert("Wrong email Or Password");
    }
}