let register = () => {
  window.location.href = "register.html";
};

let email = document.getElementById("Vemail").value;
let pass = document.getElementById("Vpass").value;

let eMess = document.getElementById("Ve");
let pMess = document.getElementById("Vp");

let user = JSON.parse(localStorage.getItem("userinfo")) || [];

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
    eres = true;
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
    pMess.innerText = "";
  } else {
    pMess.innerText =
      "Must be at least 8 characters; please use at least 2 types (letters, numbers, or special characters)";
    pMess.style.color = "red";
  }
};

let id;
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}

document.getElementById("VsigButton").addEventListener("click", function () {
  let email = document.getElementById("Vemail").value;
  let pass = document.getElementById("Vpass").value;

  if (email.length > 9 && pass.length > 7) {
    let res = checkusernameAndpassword(email, pass);
    console.log("res", res);
    if (res) {
      alert("Login Successfull !");
    } else {
      alert("Check Details");
    }
  }
});

function checkusernameAndpassword(email, pass) {
  let user2 = JSON.parse(localStorage.getItem("userinfo"));
let temp=false;
  user2.forEach((elem) => {
    console.log("uesr", elem.Email,elem.Password);
    console.log("info",email,pass)
    if (elem.Email == email && elem.Password == pass) {
      localStorage.setItem("login_info",JSON.stringify(elem));
     temp=true;
    
    }
  });
  return temp;
}
