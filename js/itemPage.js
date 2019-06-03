$(document).ready(function() {
  wait(3000);
  $('[data-pa-name="price_drop"]').each(function (index) { $(this).get(0).click() });
  wait(1500);
  $("a.btn.white.private").each(function (index) { $(this).get(0).click() });
  wait(1500);
  setTimeout($("#offer_to_likers_calculator").each(function (index) { $(this).get(0).click() }), 5000);
  wait(1500);
  //offerToLikers();
//offerDiscount();
  // var discountPercent = .9;
  // wait(1500);
  //  $('[data-pa-name="price_drop"]')[0].click();
  //  wait(1500);
  //  $("a.btn.white.private")[0].click();
  //  wait(1500);
  //  $("#offer_to_likers_calculator").each(function (index) { $(this).get(0).click() });
  //  wait(1500);
  //  $(".offer_button")[2].click();
  //  $('[data-pa-name="apply_offer"]')[0].click();
  //  wait(1500);
  //  $("#shipping-discount-selection")[0].click();
  //  wait(1500);
  //  $("#bundle_offer_form > div.modal-body > div.offer-container > div > div > div:nth-child(3) > div > div.dropdown-menu > div:nth-child(1)").click();
  //  wait(1500);
  //  $("#bundle_offer_form > div.modal-footer > button.btn.blue").click();
  //  wait(1500);
  //  $("#offer-congrats-popup > div > div.modal-footer > a")[0].click();

//  redirectBackToCloset();

});







function offerDiscount() {
//
// //  alert($(".btn.white").first().text());
//     //var aTags = document.getElementsByClassName("btn white");
//     //var searchText = "Price Drop";
//     //var found = $('[data-pa-name="price_drop"]').text();
//
//   //  console.log(`${found} is a thing`)
    console.log('hello!');
    wait(1000);
     $('[data-pa-name="price_drop"]').each(function (index) { $(this).get(0).click() });

     console.log('hell123123o!');
// //
     wait(1000);
     setTimeout(offerToLikers, 2000);
     wait(1000);
//   wait(1000);
  //  setTimeout(clickCalc, 3000);
    wait(4000);

//     wait(1000);
//
//
//
//
//y
//
//
//     //------------------------^^^WORKING
// //    for (var i = 0; i < aTags.length; i++) {
//   //    if (aTags[i].textContent == searchText) {
//     //    found = aTags[i];
//   //      $(aTags).click();
//     //    console.log($(aTags));
//     //    break;
//   //    }
//   //  } //click price drop  not clicking
// //     wait(1000);
//      //alert("frick!");
//   //    $("a.btn.white.private").click(); //click offer to likers
//   //    console.log($("a.btn.white.private"));
//   //    //alert("darn it 2");
//   // //   wait(1000);
//   //    $(".icon.calculator").click(); //loads the calculate offers tab to get the current lising price_calculator
//   //   // wait(1000);
//   //    var htmlPrice = document.getElementsByClassName("listing_price")[0].innerText;  //gets the price of the object
//   //   // wait(1000);
//   //    var actualPrice = htmlPrice.replace("$", "");  //removes the $ from the price.
//   //    var discountPrice = actualPrice * .9;  //applies the discount
//   //    discountPrice = Math.floor(discountPrice);  //rounds the number down to the a whole number amount
//   //    $(".close")[3].click(); //closes the window where i got the price.
//   //    document.getElementById("offer_form_amount").value = discountPrice;//inserts the price.
//   //    document.querySelector(".shipping-discount-selection").click()  //selects teh discount drop_down
//   //   $("main.experiences-header:nth-child(7) div.hide.modal.fade.expanded_offer_window.in:nth-child(2) form.new_offer_form div.modal-body:nth-child(9) div.offer-container div.form-group div.seller_shipping_discount_offer div.col-form-control:nth-child(3) div.dropdown.open:nth-child(1) div.dropdown-menu > div.dropdown-item:nth-child(1)").click();  //click the $1.50 discount
//   //    $(".hide.modal.fade.expanded_offer_window.in").find(".btn.blue").click();  //SEND THE OFF
//   //    $("main.experiences-header:nth-child(7) div:nth-child(1) div.modal.fade.hide.in:nth-child(9) div.modal-body div.modal-footer > a.btn.blue").click();
//  }

}

function offerToLikers() {
   $("a.btn.white.private").each(function (index) { $(this).get(0).click() });
   }

   function clickCalc() {
     $("#offer_to_likers_calculator")
     wait(1500);
     $(".offer_button")[2].click();
     $('[data-pa-name="apply_offer"]')[0].each(function (index) { $(this).get(0).click() });
     wait(3000);
     $("#shipping-discount-selection").each(function (index) { $(this).get(0).click() });
     wait(1500);
     $("#bundle_offer_form > div.modal-body > div.offer-container > div > div > div:nth-child(3) > div > div.dropdown-menu > div:nth-child(1)").each(function (index) { $(this).get(0).click() });
     wait(1500);
     $("#bundle_offer_form > div.modal-footer > button.btn.blue").each(function (index) { $(this).get(0).click() });
     wait(1500);
     //$("#offer-congrats-popup > div > div.modal-footer > a")[0].click();

     //   $(".offer_button")[2].click();
     //   wait(1500);
     //
     //   $('[data-pa-name="apply_offer"]')[0].click();
     //   wait(1500);
     //   $("#shipping-discount-selection")[0].click();
     //   wait(1500);
     //   document.querySelector("#bundle_offer_form > div.modal-body > div.offer-container > div > div > div:nth-child(3) > div > div.dropdown-menu > div:nth-child(1)").click();
     //   wait(1000);
     //   document.querySelector("#bundle_offer_form > div.modal-footer > button.btn.blue").click();
   }

   function redirectBackToCloset() {

     chrome.storage.sync.get('itemCounter', function(counter) {
        var itemCounter = parseInt(counter.itemCounter) + 1;
     //   alert(sendOffers);
     chrome.storage.sync.get('closetPage', function(page) {
     var closetPage = page.closetPage;
       //
       // sendOffers = 2
     chrome.storage.sync.set({'itemCounter' : itemCounter});
     window.location.href = closetPage;

     });
     });
   }

 function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
}
