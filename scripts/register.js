let signIn = () => {
  window.location.href = "login.html";
};

let email = document.getElementById("Vemail").value;
let pass = document.getElementById("Vpass").value;
let re_pass = document.getElementById("repass").value;
let code = document.getElementById("Vcode").value;

let eMess = document.getElementById("Ve");
let pMess = document.getElementById("Vp");
let p_reMess = document.getElementById("Vrp");

let Email = () => {
  let email = document.getElementById("Vemail").value;
  
    if (email.length <= 6) {
      eMess.innerText = "Please enter a valid email address";
      eMess.style.color = "red";
    }
    if (!email.includes(("@", ".", "gmail", "com"))) {
      eMess.innerText = "Please enter a valid email address";
      eMess.style.color = "red";
    } else {
      eMess.innerText = "";
    }
 
};

let Pass = () => {
  let pass = document.getElementById("Vpass").value;
 
    if (
      pass.match(/[a-z]+/) &&
      pass.match(/[0-9]+/) &&
      pass.match(/[$@#&!]+/) &&
      pass.length > 7
    ) {
      console.log("happy1");
      pMess.innerText = "";
    } else {
      pMess.innerText =
        "Must be at least 8 characters; please use at least 2 types (letters, numbers, or special characters)";
      pMess.style.color = "red";
    }
 
};

let rePass = () => {
  let pass = document.getElementById("Vpass").value;
  let re_pass = document.getElementById("repass").value;
 
    if (pass != re_pass) {
      p_reMess.innerText = "Please enter the same value again.";
      p_reMess.style.color = "red";
    } else {
      p_reMess.innerText = "";
    }
 
};
let user = JSON.parse(localStorage.getItem("userinfo")) || [];

document.getElementById("VregButton").addEventListener("click", function () {
  let email = document.getElementById("Vemail").value;
  let pass = document.getElementById("Vpass").value;
  let re_pass = document.getElementById("repass").value;
  let code = document.getElementById("Vcode").value;
  let obj = {
    Email: email,
    Password: pass,
  };
  
  if (
    email.length > 9 &&
    pass.length > 7 &&
    pass.length == re_pass.length &&
    code.length > 3
  ) {
    let res = EmailCheck(email, user);
    console.log("resilt", res);
    if (res) {
        user.push(obj);
      localStorage.setItem("userinfo", JSON.stringify(user));

      alert("sucessfull !");
      window.location.href="login.html"
    } else {
      alert("Email Allready taken !");
    }
  } else {
    alert("Enter All Details !");
  }
});

function EmailCheck(email) {
  let user2 = JSON.parse(localStorage.getItem("userinfo"));
  console.log(user2);
  if (!user2) {
    return true;
  } else {
    let temp = true;
    user2.forEach((elem) => {
      if (elem.Email == email) {
        temp = false;
      }
    });
    return temp;
  }
}


let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func();
    },delay)
}