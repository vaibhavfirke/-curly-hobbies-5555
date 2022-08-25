import footer from "../-curly-hobbies-5555/component/footer.js";
console.log(footer());
let super_deals_footer = document.getElementById("super_deals_footer");
super_deals_footer.innerHTML = footer();

let product = [
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16593/goods_img_big-v1/83198c1adc3b.jpg",
    title:
      "Micro TF SD Card 512GB 256GB 128GB 64GB 32GB 16GB 8GB Flash Class 10 SD Card Memory Card 512GB 256GB 128GB Memorycard For Phone - 512GB Class 10",
    RRP: 24.03,
    price: 17.99,
    id: "hemant1",
  },

  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/store/6878400698325856256/16428/goods_img_big-v1/f959416f7c71.jpg",
    title:
      "Global Version JJRC H36 RC Mini Drone Helicopter 4CH Toy Quadcopter Drone Headless 6Axis One Key Return 360 degree Flip LED RC Toys - Gray China",
    RRP: 27.96,
    price: 21.99,
    id: "hemant2",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16518/goods_img_big-v5/5923105cb445.jpg",
    title:
      "Xiaom Digital Blood Pressure Monitor Smart Heart Rate Monitor Counter Portable Pulsometer Tonometer Sphygmomanometer APP Control - China",
    RRP: 96.6,
    price: 43.99,
    id: "hemant3",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16504/goods_img_big-v3/ea82b7af3898.jpg",
    title:
      "DOOGEE S68 Pro 5.9 inch Android Mobile Phone RAM 6GB ROM 128GB Helio P70 Dual SIM Fingerprint Unlocked LTE 4G OTG Smartphone - Black",
    RRP: 431.98,
    price: 215.5,
    id: "hemant4",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16481/goods_img_big-v1/fb6bbc896342.jpg",
    title:
      "Mini LCD Massage Gun 32 Speed Touch Screen Deep Tissue Percussion Muscle Mini Massager Fascial Gun For Pain Relief Body Massage - Black",
    RRP: 77.99,
    price: 35.5,
    id: "hemant5",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16605/goods_img_big-v1/64f5dea0b839.jpg",
    title:
      "Aimitek Sport Wireless Bluetooth Headphones Stereo Earphones Mp3 Music Player Headset Earpiece Micro SD Card Slot Handsfree Mic - Black",
    RRP: 15.87,
    price: 12.99,
    id: "hemant6",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16099/goods_img_big-v1/58f4ea80c317.jpg",
    title:
      "Beelink GT King TV Box Android 9.0 Amlogic S922X Hexa-core G52 MP6 Graphics 4GB LPDDR4 64GB ROM WiFi 6 Bluetooth 4.1 4K 75hz - 4GB RAM 64GB eMMC CN US Plug",
    RRP: 139.99,
    price: 115.99,
    id: "hemant7",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16049/goods_img_big-v1/7399af1d6cfe.jpg",
    title:
      "New 3.5 inch TFT LCD Display Touch Screen + ABS Case + Heat sink For Raspberry Pi 4B 3B+ 3B - Pi 4 Kit",
    RRP: 25.99,
    price: 23.99,
    id: "hemant8",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16425/goods_img_big-v2/70e70a06c1ca.jpg",
    title:
      "Neck Hanging Negative Ions Generator Personal Air Purifier Air Cleaner Travel Size - White",
    RRP: 19.9,
    price: 13.99,
    id: "hemant9",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16584/goods_img_big-v3/c62756c2d3f9.jpg",
    title:
      "Imou Intelligent Robotic Selfempty Vacuum Cleaner Robot Aspirador Friegasuelos Home Appliance Fast Shipping - France EU",
    RRP: 423.69,
    price: 381.32,
    id: "hemant10",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16425/goods_img_big-v1/c5043c52bff2.jpg",
    title:
      "P11 Plus ECG+PPG Smart Bracelet Blood Pressure Heart Rate Monitor Band Fitness Tracker Pedometer Waterproof Sport Smartband - Black",
    RRP: 423.69,
    price: 381.32,
    id: "hemant11",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16448/goods_img_big-v1/588169587bb8.jpg",
    title:
      "iMosi M10 Smart Band Built-in Music Player PPG+ECG Oxygen Blood Pressure Heart Rate Monitoring Smart Health Watch - Dark Brown",
    RRP: 69.0,
    price: 49.99,
    id: "hemant12",
    brand: "imosi",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16516/goods_img_big-v3/eeef8dc94753.jpg",
    title:
      "Xiaomi Aqara Temperature Sensor Smart Air Pressure Humidity Environment Sensor Smart control Zigbee Smart home For Xiaomi APP Mi home - China",
    RRP: 42.2,
    price: 15.99,
    id: "hemant13",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16514/goods_thumb_220-v3/9bd755e0fda6.jpg",
    title:
      "Aqara Induction LED Night Light Magnetic Installation with Human Body Light Sensor 2 Level Brightness 8 Month Standby Time - 2pcs China",
    RRP: 63.3,
    price: 28.99,
    id: "hemant14",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16417/goods_thumb_220-v3/21ff9307e5ee.jpg",
    title:
      "Smart Watch Men 400Mah Big Battery Music Play Fitness Tracker Bluetooth Call Sport Smartwatch 2021 Health Monitoring - Black China",
    RRP: 78.0,
    price: 32.99,
    id: "hemant15",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6919674405698334720/16528/goods_img_big-v3/67231d93e158.jpg",
    title:
      "Hiseeu 3MP PTZ WIFI Camera Outdoor 1536P 1080P 5X Digital Zoom Speed Dome IP Camera 5MP Audio P2P Network CCTV Surveillance - Spain 2MP 32 card EU Plug 3.6mm",
    RRP: 75.0,
    price: 32.0,
    id: "hemant16",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16504/goods_img_big-v7/28537de0e928.jpg",
    title:
      "Dreame D9 Robot Vacuum Cleaner For Home 3000Pa Strong Suction Sweeping Washing Mopping APP Control Smart Planned Home Cleaner - Poland",
    RRP: 499.0,
    price: 254.0,
    id: "hemant17",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16419/goods_img_big-v1/2e798c094788.jpg",
    title:
      "XIAOMI STYJ02YM Mijia Mi Robot Vacuum-Mop P Vacuum Cleaner 2 Sweeping Mopping Robot LDS wifi Mi home APP - Germany",
    RRP: 499.0,
    price: 275.0,
    id: "hemant18",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16419/goods_img_big-v1/404af76fa24b.jpg",
    title:
      "Original Xiaomi OLED Display Smart Air Purifier 2S - White - Poland",
    RRP: 290.0,
    price: 159.0,
    id: "hemant19",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6936702996411772928/16553/goods_img_big-v3/00d824a9cdcb.jpg",
    title:
      "Longer LK5 Pro 3D Printer.FDM Large Size 3D Printer.11.8x11.8x15.7Inch Big Print Size.90%Pre-Assembled.Dual Blower Kit.Silent Motherboard. - US",
    RRP: 369.0,
    price: 309.99,
    id: "hemant20",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16409/goods_img_big-v1/3278c8322553.jpg",
    title:
      "WILD MAN New Bike Bag Frame Front Top Tube Cycling Bag Waterproof 6.6in Phone Case Touchscreen Bag MTB Pack Bicycle Accessories - M5 White logo",
    RRP: 45.02,
    price: 19.59,
    id: "hemant21",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16395/goods_img_big-v2/97b6f4b89a7c.jpg",
    title:
      "2021 USB Electric Hair Clippers Rechargeable Shaver Beard Trimmer Professional Men Hair Cutting Machine Beard Barber Hair Cut - Black-Box",
    RRP: 20.78,
    price: 13.99,
    id: "hemant22",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16396/goods_img_big-v2/26fabb8ff742.jpg",
    title:
      "SOEYE Men Shaver Beard Trimmer Electric shaver for men Clipper MiYoupin Electric razor portable Shaving machine Facial epilato - BS001 box China",
    RRP: 43.11,
    price: 24.5,
    id: "hemant23",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16414/goods_img_big-v1/fb5902986b80.jpg",
    title:
      "USLION Magnetic USB Cable For iPhone 12 11 Xiaomi Samsung Type C Cable LED Fast Charging Data Charge Micro USB Cable Cord Wire - Red For iPhone 2m",
    RRP: 4.82,
    price: 3.56,
    id: "hemant24",
  },
  {
    image:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878028664286670848/16501/goods_img_big-v1/d01b6b72b516.jpg",
    title:
      "Haylou GT3 touch control TWS earphone wireless Bluetooth 5.0 headphone dual connection earbuds - Black",
    RRP: 24.29,
    price: 35.2,
    id: "hemant25",
  },
];

// let data = product_data;
// let containr_superdeals = document.getElementById("containr_superdeals");

let cart_storage = JSON.parse(localStorage.getItem("cart_data")) || [];

function appendproduct(product) {
  product.forEach((element) => {
    let div = document.createElement("div");

    let Image = document.createElement("img");
    // Image.style.width = "200px";
    let title = document.createElement("h3");
    let price = document.createElement("h4");
    let RRP = document.createElement("p");

    Image.src = element.image;
    title.innerText = element.title;
    price.innerText = `$ ${element.price}`;
    RRP.innerText = `RRP: $${element.RRP}`;
    let add_to_cart = document.createElement("button");
    add_to_cart.innerText = "Add to cart";

    add_to_cart.addEventListener("click", function () {
      if (addtocartfunction(element.id) === true) {
        alert("product added to cart");
        cart_storage.push(element);
        localStorage.setItem("cart_data", JSON.stringify(cart_storage));
      } else {
        alert("product is already present");
      }
    });
    div.append(Image, title, price, RRP, add_to_cart);

    document.querySelector("#containr_superdeals").append(div);
  });
}
appendproduct(product);

function addtocartfunction(id) {
  for (let i = 0; i < cart_storage.length; i++) {
    if (cart_storage[i].id === id) {
      return false;
    }
  }
  return true;
}
