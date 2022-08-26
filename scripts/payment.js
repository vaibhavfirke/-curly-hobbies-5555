


let paynow=document.getElementById("payNow");
paynow.addEventListener("click",function(){

    let body=document.querySelector("body");
    body.innerHTML=null;
    let img=document.createElement("img");
    img.setAttribute("class","pay")
    img.src="https://i0.wp.com/academicprojectworld.com/wp-content/uploads/2020/04/referral-email-payment-completed-1024x525-1.jpg?fit=1024%2C525&ssl=1";
    
    body.append(img);
})
