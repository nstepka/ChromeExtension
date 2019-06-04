$(document).ready(function() {

  offerDiscount();


});







function offerDiscount() {
    wait(1000);

     $('[data-pa-name="price_drop"]')[0].click();

      wait(1000);
      setTimeout(offerToLikers, 2000);
}

function offerToLikers() {
   $("a.btn.white.private")[0].click();
  
       setTimeout(clickCalc, 3000);
   }

   function clickCalc() {
     $("#offer_to_likers_calculator").each(function (index) { $(this).get(0).click() });
     wait(1500);
     $(".offer_button")[2].click();
     $('[data-pa-name="apply_offer"]')[0].click();
     wait(3000);
     $("#shipping-discount-selection").click();
     wait(1500);
     $("#bundle_offer_form > div.modal-body > div.offer-container > div > div > div:nth-child(3) > div > div.dropdown-menu > div:nth-child(1)").click();
     wait(1500);
      $("#bundle_offer_form > div.modal-footer > button.btn.blue").click();
     redirectBackToCloset();

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
     console.log('changing window location...');
     console.log(page);
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
