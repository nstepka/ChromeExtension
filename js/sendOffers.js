window.onload = function() {
shareCloset();
}


  var sendOffers = 2;
  var items = [];
  var status = false;
  var url = "";
  var discountPercent = .9;
  var num1 = 1;
    var discountPercent = .9;


  function shareCloset() {
  	sendOffers = chrome.storage.local.get('sendOffers', function (items) {
  	sendOffers = items.sendOffers;
        var closet = [];
  			closet = $(".tile");
        var www = "www.poshmark.com";
        url = closet[0].firstChild.pathname;

        var result = www.concat(url);
    window.location.href  = closet[0].firstChild.pathname;
      chrome.tabs.executeScript({
        file: 'itemPage.js'
         });


    sendOffers = 2;
  });
}
