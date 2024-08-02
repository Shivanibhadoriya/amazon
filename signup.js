function saveData(){
    let email,password1,password2;
    email=document.getElementById("email").value;
    password1=document.getElementById("password1").value;
    password2=document.getElementById("password2").value;
    
   let user_records=new Array();
   user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
   if(user_records.some((v)=>{
    return v.email==email || password1 != password2;
   })){
    alert(password1  != password2 ? "WRONG PASSWORD ENTERED":"Duplicate DATA");
    location.reload;
   }
 else{
    user_records.push({
        "email":email,
        "password":password1
    })
    localStorage.setItem("users",JSON.stringify(user_records));
 }
}