

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all links
            links.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});

function showMenu() {
    console.log("i am clicked");
    var menu = document.getElementById("item-list");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-icon").addEventListener("click", showMenu);
});

// document.querySelector(".menu-btn").addEventListener("click",function(){
//     console.log("i am clicked");
//     document.querySelector("#item-list").classList.toggle("active");
// });
 
const current_user= localStorage.getItem("email") ;
if(current_user != null){
    hideLoginButton();
    showProfile();
    let sideBar = document.querySelector("#sidebar");

    document.querySelector(".loggedIn").addEventListener("click",function(){
        console.log("profile view")
        sideBar.classList.add("active");
        document.querySelector(".loggedIn span").innerText=`${ current_user.slice(0,current_user.length-10)}`;
        document.querySelector(".loggedIn").style.display="none";
    });

    document.querySelector("#sidebar i").addEventListener("click",function(){
           sideBar.classList.remove("active");
           document.querySelector(".loggedIn").style.display="block";
    });
}

// I have hide the both login and signUP button
function hideLoginButton(){
    console.log("User login in this page ");
    document.querySelectorAll(".nav-sign").forEach((nav) =>{
              nav.style.display="none";
     })
}

// here I have added the profile of person 
function showProfile(){
    console.log("profile added");
    let navSign = document.querySelector("#sign");
    let profileBtn = document.createElement("button");
    profileBtn.classList.add("loggedIn");
    profileBtn.innerHTML=`<i class="fa-solid fa-user profile"></i><span>Profile</span>`;
    navSign.appendChild(profileBtn);
}


function signOut(){
    removeUser();
    let profile = document.querySelector(".loggedIn");
    profile.remove();
    document.querySelector("#sidebar").style.display="none";
    document.querySelectorAll(".nav-sign").forEach((nav)=>{
        nav.style.display="block";
    });
    
}

function removeUser(){
    console.log("remove email");
    localStorage.removeItem("email");
}

