$(document).ready(function() {
//offerDiscount();
  var discountPercent = .9;
  wait(1000);
  redirectBackToCloset();

});

function offerToLikers() {
  // $("a.btn.white.private")[0].click();
  // }
  // function clickCalc() {
  //   $("#offer_to_likers_calculator").each(function (index) { $(this).get(0).click() });
  //   wait(1500);
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
  wait(4000);
  chrome.storage.sync.get('sendOffers', function(offer) {
     var sendOffers = offer.sendOffers;
  //   alert(sendOffers);
  chrome.storage.sync.get('closetPage', function(page) {
  var closetPage = page.closetPage;

    sendOffers = 2;
    chrome.storage.sync.set({'sendOffers' : sendOffers});
  window.location.href = closetPage;

  });
  });
}
function offerDiscount() {

//  alert($(".btn.white").first().text());
    //var aTags = document.getElementsByClassName("btn white");
    //var searchText = "Price Drop";
    //var found = $('[data-pa-name="price_drop"]').text();

  //  console.log(`${found} is a thing`)
    $('[data-pa-name="price_drop"]')[0].click();

    setTimeout(offerToLikers, 2000);
    wait(1000);
    setTimeout(clickCalc, 5000);







    //------------------------^^^WORKING
//    for (var i = 0; i < aTags.length; i++) {
  //    if (aTags[i].textContent == searchText) {
    //    found = aTags[i];
  //      $(aTags).click();
    //    console.log($(aTags));
    //    break;
  //    }
  //  } //click price drop  not clicking
//     wait(1000);
     //alert("frick!");
  //    $("a.btn.white.private").click(); //click offer to likers
  //    console.log($("a.btn.white.private"));
  //    //alert("darn it 2");
  // //   wait(1000);
  //    $(".icon.calculator").click(); //loads the calculate offers tab to get the current lising price_calculator
  //   // wait(1000);
  //    var htmlPrice = document.getElementsByClassName("listing_price")[0].innerText;  //gets the price of the object
  //   // wait(1000);
  //    var actualPrice = htmlPrice.replace("$", "");  //removes the $ from the price.
  //    var discountPrice = actualPrice * .9;  //applies the discount
  //    discountPrice = Math.floor(discountPrice);  //rounds the number down to the a whole number amount
  //    $(".close")[3].click(); //closes the window where i got the price.
  //    document.getElementById("offer_form_amount").value = discountPrice;//inserts the price.
  //    document.querySelector(".shipping-discount-selection").click()  //selects teh discount drop_down
  //   $("main.experiences-header:nth-child(7) div.hide.modal.fade.expanded_offer_window.in:nth-child(2) form.new_offer_form div.modal-body:nth-child(9) div.offer-container div.form-group div.seller_shipping_discount_offer div.col-form-control:nth-child(3) div.dropdown.open:nth-child(1) div.dropdown-menu > div.dropdown-item:nth-child(1)").click();  //click the $1.50 discount
  //    $(".hide.modal.fade.expanded_offer_window.in").find(".btn.blue").click();  //SEND THE OFF
  //    $("main.experiences-header:nth-child(7) div:nth-child(1) div.modal.fade.hide.in:nth-child(9) div.modal-body div.modal-footer > a.btn.blue").click();
 }


 function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }


 }
