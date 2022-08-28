


import navbar from "../component/navbar.js";
let nav= document.getElementById("header");
nav.innerHTML=navbar();

import footer from "../component/footer.js";
let foot= document.getElementById("HomeFooter");
foot.innerHTML=footer(); 

const swiper = new Swiper('.swiper', {
     
    autoplay:
    {
      delay: 3000,
      disableOnInteraction: false,
        
    },
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
     
    });


    let container = document.getElementById("AllGearBestProducts");
let productData=[
  {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16563/goods_img-v1/19e5bb35066f.jpg",
      title: "Smartmi Air Purifier P1 For Home Portable Air Purifiers..",
      price:" $149.00",
      desc: "Flash Sale",
  },
  {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16554/goods_img-v1/474893e6aae3.jpg",
      title: "One Plus 9RT 5G Global Rom Snapdragon 888 6.62 inch..",
      price:" $459.00",
      desc: "Flash Sale",
  },
  {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16534/goods_img-v1/ed230b4b2700.jpg",
      title: "Original Xiomi Mi Band 7 Pro Smart Bracelet 1.64 inch...",
      price:" $43.99",
      desc: "Flash Sale",
  },
  {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16571/goods_img-v7/13cb12f4b2ee.jpg",
      title: "World Premier DOOGEE S35T/S35 Rugged Phone Sony...",
      price:" $159.00",
      desc: "Flash Sale",
  },
  {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6926471294045319168/16529/goods_img-v1/8ad475fc01f3.jpg",
      title: "WT09 Active NOise Csncelling Headphones Bluetooth 5.1...",
      price:" $27.64",
      desc: "Flash Sale",
  },
  {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6901174613791928320/16502/goods_img-v3/31d0d9d6c843.jpg",
      title: "A9 Mini Wifi Video Surveillance 1080p HD Infrared Night Vision...",
      price:" $11.55",
      desc: "Flash Sale",
  },
  {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16557/goods_img-v3/d3278fd875a6.jpg",
      title: "One plus NOrd CE 2 Lite Global Version Snapdragon 695 5G..",
      price:" $299.00",
      desc: "Flash Sale",
  },
  {
      img: "https://gloimg.gbtcdn.com/soa/gb/desc/6883469851634102272/16474/goods_img-v2/312c941b186c.jpg",
      title: "New Camouflage Nylon Rebate Watch Strap for Apple...",
      price:" $5.15",
      desc: "Flash Sale",
  },
  {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6898654298117435392/16531/goods_img-v1/ea9ddbe7643e.jpg",
      title: "Xiomi 2022 Bluetooth 5.0 Headsets Wireless Earphones...",
      price:" $15.90",
      desc: "Flash Sale",
  },
  {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16545/goods_img-v1/7fb1c3c77ea9.jpg",
      title: "Smartmi Fan 2s Standing Ground floor Fan Natural Win...",
      price:" $115.99",
      desc: "Flash Sale",
  },
  {
      img: "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16503/goods_img-v3/d8f4d03c1f8b.jpg",
      title: "Mini Portable 80,000 mah PowerBank PD 20 Volt Oneway Fast...",
      price:" $42.99",
      desc: "Flash Sale",
  },
  {
    img: "https://gloimg.gbtcdn.com/soa/gb/store/6868553449588584448/16392/goods_img-v3/570021335be9.jpg",
      title: "Whole KIt Skateboard death Wish Chocolate spitfire...",
      price:" $190.00",
      desc: "Flash Sale",
  },
  {
    img: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16463/goods_img-v1/51b86e400b3b.jpg",
      title: "Original Xiomi i health Thermometer ...",
      price:" $28.99",
      desc: "Flash Sale",
  },
  {
    img: "https://gloimg.gbtcdn.com/soa/gb/store/6878399324569661440/16419/goods_img-v5/2bade2f7be7f.jpg",
      title: "Tronxy Large Size X5SA 24 Volt 3D Printer Factory Price Desktop ...",
      price:" $299.99",
      desc: "Flash Sale",
  },
  {
    img: "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16453/goods_img-v1/8ab1a920d820.jpg",
      title: "Massage Gun Deep Tissue Percussion MIni LCD 32 Speed...",
      price:" $36.99",
      desc: "Flash Sale",
  },
  {
    
    img: "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16457/goods_img-v3/832729d947f0.jpg",
    title: "Original Lenovo LP1S TWs Bluetooth Earphones...",
      price:" $13.99",
      desc: "Flash Sale",
  },
  {
    img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16093/goods_img-v1/22ca1d9a2067.jpg",
      title: "3 in 1 Multi-Functional Auto Smart Robot Floor Cleaner ...",
      price:" $30.99",
      desc: "Flash Sale",
  },
  {
    img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16135/goods_img-v1/235ac75bd34b.jpg",
      title: "Global Vaersion  Xiomi Mi 11 8 GB Ram 128 GB ...",
      price:" $1149.99",
      desc: "Flash Sale",
  },
  {
    img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15948/goods_img-v2/f63710531d25.jpg",
      title: "Smart DoorBell Camera Wifi Wireless Call Intercom Video...",
      price:" $44.55",
      desc: "Flash Sale",
  },
  {
    img: "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16506/goods_img-v4/f1ac73bec128.jpg",
      title: "3 MOde Waterproof LED Solar Motion Sensor Lights ...",
      price:" $35.32",
      desc: "Flash Sale",
  },
  {
    img: "https://gloimg.gbtcdn.com/soa/gb/item/6868955312079171584/16502/goods_img-v1/4e9e81a0cd1c.jpg",
      title: "Prime 8ch 2K HD Wireless Security Camera System ...",
      price:" $129.00",
      desc: "Flash Sale",
  },
  {
    img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16056/goods_img-v1/50e18384ddd6.jpg",
      title: "Dere R9 PRO 15.6  inch Laptop 12 GB Ram 256GB Rom Intel....",
      price:" $399.27",
      desc: "Flash Sale",
  },
  {
    img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15960/goods_img-v1/7c96aba1a129.jpg",
      title: "100% Original SJCAM SJ4000 Air Action Camera Full HD...",
      price:" $62.99",
      desc: "Flash Sale",
  },
  {
    img: "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16421/goods_img-v3/d6e1acb6230c.jpg",
      title: "Mountain Skin Mew Men Leather Jacket Autumn Special...",
      price:" $57.99",
      desc: "Flash Sale",
  },
  {
      img: "https://gloimg.gbtcdn.com/soa/gb/store/6908377430696849408/16532/goods_img-v1/c32daeadb4aa.jpg",
      title: "SmartPhone Android 16GB 512 GB Cellulars OctaCore H....",
      price:" $178.99",
      desc: "Flash Sale",
  },
]

let logindata=JSON.parse(localStorage.getItem("loginORnot"));
if(logindata==true){
  let ID=document.getElementById("userH");
let loginfo=JSON.parse(localStorage.getItem("login_info"));
ID.innerText=loginfo.Email;

}



let KYAKARUAPPEND = () =>
{
    productData.forEach(element =>
    {
        
        

        let img = document.createElement("img");
        img.src = element.img;
        img.setAttribute("class", "SIMG");


        let p = document.createElement("p");
        p.innerText = element.title;
        p.setAttribute("class", "PhotosTITLE");

        let pp = document.createElement("p");
        pp.innerText = element.price;
        pp.setAttribute("id", "Pprice");
       

        let ppp = document.createElement("p");
        ppp.setAttribute("id", "Flashsale")
        ppp.innerText = element.desc;

        let div = document.createElement("div");
        div.onclick = () =>
        {
            sendIttoStorage(element);
window.location.href="product.html";
        };


        div.append(img, p, pp, ppp);
        container.append(div);
    });
}

KYAKARUAPPEND()

let sendIttoStorage = (data) =>
{
    localStorage.setItem("buyNow", JSON.stringify(data));
  
}
