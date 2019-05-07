$(document).ready(function() {
offerDiscount();
  var discountPercent = .9;
})



function offerDiscount() {
wait(1000);
//  alert($(".btn.white").first().text());
     $(".btn.white").first().click();  //click price drop  not clicking
     wait(10000);
     alert("fucerk");
     $("a.btn.white.private").click(); //click offer to likers
     alert("fuck2");
     wait(1000);
     $(".icon.calculator").click(); //loads the calculate offers tab to get the current lising price_calculator
     wait(1000);
     var htmlPrice = document.getElementsByClassName("listing_price")[0].innerText;  //gets the price of the object
     wait(1000);
     var actualPrice = htmlPrice.replace("$", "");  //removes the $ from the price.
     var discountPrice = actualPrice * .9;  //applies the discount
     discountPrice = Math.floor(discountPrice);  //rounds the number down to the a whole number amount
     $(".close")[3].click(); //closes the window where i got the price.
     document.getElementById("offer_form_amount").value = discountPrice;//inserts the price.
     document.querySelector(".select-shipping-label").click()  //selects teh discount drop_down
     $(".d-ib")[0].click();  //click the $1.50 discount
     $(".hide.modal.fade.expanded_offer_window.in").find(".btn.blue").click();  //SEND THE OFF

 }


 function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }

 }
