window.onload = function() {
  console.log('window has loaded');
getCloset();
wait(2000);
};

  var items = [];
  var status = false;
  var url = "";
  var discountPercent = .9;
  var num1 = 1;
    var discountPercent = .9;

  //
   function getCloset() {
     //document.querySelector("#availability > li:nth-child(2) > label").click();
     var closetPage = window.location.href;
     console.log('this should be for teh page that only has tiles');
     console.log(closetPage);

     chrome.storage.sync.set({'closetPage' : closetPage});
     //window.location.href
     chrome.storage.sync.get('sendOffers', function(offer) {
       var sendOffers = parseInt(offer.sendOffers);
       chrome.storage.sync.get('itemCounter', function(counter) {
         var itemCounter = parseInt(counter.itemCounter);
          if(sendOffers == 1) {
            var closet = [];
            closet = $(".tile");
            var www = "www.poshmark.com";
            url = closet[itemCounter].firstChild.pathname;
            var pageLink = www.concat(url);
            window.location.href = url;
            if(itemCounter == closet.length) {
              sendOffers = 2;
              chrome.storage.sync.set({'sendOffers' : sendOffers});
              alert(itemCounter);
            }
          }
       })
     });
   };
  //   chrome.storage.sync.get('sendOffers', function(offer) {
  //     alert(parseInt(offer.sendOffers));
  //document.querySelector("#availability > li:nth-child(2) > label")
  //   });
    // alert(sendOffers);
    //     var closet = [];
  	// 		closet = $(".tile");
    //     var www = "www.poshmark.com";
    //     url = closet[0].firstChild.pathname;
    //
    //     var result = www.concat(url);
    //     //alert(result);
    //     wait(10000);
    // // window.location.href  = closet[0].firstChild.pathname;
    // //   chrome.tabs.executeScript({
    // //     file: 'itemPage.js'
    // //      });
    //
    //
    // sendOffers = 2;




function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
