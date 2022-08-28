let navbar=()=>{
    return`<div class="navbar">
    <a href="index.html" class="headlogo">
        <h1>
            <img src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png" alt="Error with URL">
        </h1>
    </a>

    <div id="navbarLine">

        <p>Save 3$ with App</p>
        <p>Support Center</p>
        <p>Ship To</p>
        <p>Language</p>
        <p>Country Website</p>
    </div>
 

<div id="searchBox">

  
    <input type="text" id="mainInput" placeholder="Search"><i class="fa-solid fa-magnifying-glass" id="searchlogo"></i>
   <a href="register.html"> 
       <i class="fa-regular fa-user" id="user" style="font-size: 25px;"></i><h4 id="userH">Sign In</h4>
   </a>

   <a href="">
       <i class="fa-regular fa-heart" id="favorites" style="font-size: 25px;"></i><h4 id="userF">Favorites</h4>
   </a>
   
   <a href="cart.html">
      <i class="fa fa-shopping-cart" id="cart" style="font-size:20px"></i><h4 id="userC">Cart</h4>
   </a>

</div>
</div>


<div id="banner">
<div id="bannerA">
    <a href="">
        <h3 class="head1">Category</h3>
    </a>
   
    <div id="bannerA2">
        <a href="superdeals.html">
            <h3 class="head2">SUPER DEALS</h3>
        </a>
        <a href="apponlypage.html">
            <h3 class="head3" >APP ONLY</h3>
        </a>
        <a href="newarrivalspage.html">
            <h3 class="head4">NEW ARRIVALS</h3>
        </a>

       
    </div>
</div> 

`
}

export default navbar ;