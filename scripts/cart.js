


import footer from "../component/footer.js";
let foot= document.getElementById("cartFooter");
foot.innerHTML=footer(); 


document.getElementById("home").addEventListener("click",home);

let arr=JSON.parse(localStorage.getItem("add_to_cart"));

let Append = (data) => {
  let sub=0;
  let contener = document.getElementById("Vcontener");
  contener.innerHTML = null;
if(!data){
  return ;
}
  data.forEach((elem,index) => {
    
    let unitQ = 1;
    sub+=elem.price;
    let VtableBody = document.createElement("div");
    VtableBody.setAttribute("id", "VtableBody");

    let Bleft = document.createElement("div");
    Bleft.setAttribute("class", "Bleft");

    let img = document.createElement("img");
    img.src = elem.img;

    let title = document.createElement("p");
    title.innerText = elem.title;
    Bleft.append(img, title);

    let Bright = document.createElement("div");
    Bright.setAttribute("class", "Bright");

    let unitP = document.createElement("p");
    unitP.innerText = `$${elem.price}`;
    
    let quintity = document.createElement("div");
    quintity.setAttribute("id", "quntity");

    let dic = document.createElement("div");
    dic.innerText = "-";
    dic.setAttribute("class", "dic");
    dic.addEventListener("click", function () {
      if (unitQ <= 1) {
        unitQ = 1;
      } else {
        unitQ--;
        console.log(unitQ);
        input.value = unitQ;
        
        totalP.innerText = `$${elem.price * unitQ}`;
        sub -= elem.price;
        subtotal.innerText = `$${sub}`;
        Alltotal.innerText = `$${sub}`;

        console.log("price1", sub);
      }
    });

    let input = document.createElement("input");
    input.value = unitQ;
    input.type = "number";

    let inc = document.createElement("div");
    inc.innerText = "+";
    inc.setAttribute("class", "inc");
    inc.addEventListener("click", function () {
      unitQ++;
      
      console.log(unitQ);
      input.value = unitQ;
      totalP.innerText = `$${elem.price * unitQ}`;
      sub +=elem.price;
      subtotal.innerText = `$${sub}`;
      Alltotal.innerText = `$${sub}`;
      console.log("price2", sub);
    });

    let totalP = document.createElement("p");
    totalP.innerText = `$${elem.price * unitQ}`;

    let Dp = document.createElement("p");
    let button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click",function(){
DeletProduct(index);
    })
    quintity.append(dic, input, inc);
    Dp.append(button);
    Bright.append(unitP, quintity, totalP, Dp);

    VtableBody.append(Bleft, Bright);
    contener.append(VtableBody);
  });
  let subtotal = document.getElementById("Subtotal");
  subtotal.innerText = `$${sub}`;

  let Alltotal=document.getElementById("Total");
  Alltotal.innerText=`$${sub}`;

  document.getElementById("checTotal").addEventListener("click",function(){
    checkout();
  })
  

  function checkout(){
    localStorage.setItem("grandtotal",sub);
    window.location.href="buynow.html"
  }
};

Append(arr);
function DeletProduct(index){
  arr.splice(index,1);
      localStorage.setItem("add_to_cart",JSON.stringify(arr));
Append(arr);
}

function home(){
  window.location.href="index.html";
}