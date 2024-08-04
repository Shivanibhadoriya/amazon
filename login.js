// this function check the user authentication 
function checkData() {
  let email, password;

  // this will return value from the id which is email
  email = document.getElementById("email").value;

  // this will return value from the id which is password
  password = document.getElementById("password").value;

  // it is the object of form which contains fiels
  let parent = document.getElementById("dataform");

  let p = document.querySelectorAll("#dataform p")
  p.forEach(element => {
    element.remove();
  });

  if (email == "" || password == "") {
    let i = 0;

    if (email == "") {
      i++;  // I am incrementing 'i' just because invalid password  field can add on right place
      let child = document.createElement("p");
      child.classList.add('empty-text');
      child.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color: #c20000;"></i>Enter your mobile number or address';
      parent.insertBefore(child, parent.children[2]);

    }
    if (password == "") {

      let child = document.createElement("p");
      child.classList.add('empty-password');
      child.innerHTML = '<i class="fa-solid fa-exclamation" style="color: #b30000;"></i>Enter your Password';
      parent.insertBefore(child, parent.children[4 + i]);

    }
  } else {
    let user_records = new Array();

    // JSON.parse -> convert string into  Object  ,
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];

    // v is iterator for iterating each element of array
    if (user_records.some((v) => {
      return v.email == email && v.password == password;
    })) {
      let current_user = user_records.filter((v) => {
        return v.email == email && v.password == password;
      })[0];
      
      window.location.href = 'index.html?authenticated=true';
      console.log("hello I have done");
      localStorage.setItem("email",current_user.email);
      
    }
    else {

      let child = document.createElement("p");
      child.classList.add('empty-password');
      child.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color: #c20000;"></i>Invalid Email or Password';
      parent.insertBefore(child, parent.children[4]);

    }
  }
}