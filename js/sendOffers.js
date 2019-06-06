window.onload = function() {
    console.log('window has loaded');
    $("#availability > li:nth-child(2) > label")[0].click();
    getCloset();

    //($('#captcha-popup').css('display') != 'block')

};
getCloset();
var closet = [];
var items = [];
var status = false;
var url = "";
var num1 = 1;
var bottomOfPage = false;
var closetPage;
var maxCounter = 1;
//

function loadAllItems(closetPage, maxID) {
  chrome.storage.sync.get('sendOffers', function(offer) {
    var sendOffers = parseInt(offer.sendOffers);
    console.log(sendOffers + " offer number 2");
    if(sendOffers == 1) {
    if (maxID != null && maxCounter != 6 && bottomOfPage == false) {
        setTimeout(function() {
        $.get(closetPage + "&max_id=" + maxID, function(data) {
            //$( "#tiles-con" ).append( data.html );
            //maxID = data.max_id;
            console.log(maxID);

            if (maxID != null || maxCounter != 6) {
                maxCounter = maxCounter + 1;

                bottom = document.body.scrollHeight;
               	window.scrollTo(0, bottom);
                loadAllItems(closetPage, maxID);
            }
            if(maxCounter == 6) {
              bottomOfPage = true;
            }
        });
      }, 2000);
    } else {
        closet = $(".tile");
        console.log(closet.length + " does this ever happen?");
        bottomOfPage = true;
        chrome.storage.sync.get('sendOffers', function(offer) {
          var sendOffers = parseInt(offer.sendOffers);
          chrome.storage.sync.get('itemCounter', function(counter) {

            var itemCounter = parseInt(counter.itemCounter);
            console.log(itemCounter + "this is the item counter current number");
             if(sendOffers == 1) {


               console.log(closet.length);
               var www = "www.poshmark.com";
               console.log("hi!!!");
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
    }
  }
});
}

function getCloset() {
  chrome.storage.sync.get('sendOffers', function(offer) {
    var sendOffers = parseInt(offer.sendOffers);
    console.log(sendOffers + " offer number");
    if(sendOffers == 1) {
    wait(1500);
    maxID = $('div#tiles-con')[0].attributes[1].value;
    closetPage = window.location.href;
    closetPage.replace("https://poshmark.com/closet/", "");


    ////////////////////////////////////////////
    console.log(closetPage);
    wait(1500);
    loadAllItems(closetPage, maxID);

    chrome.storage.sync.set({
        'closetPage': closetPage
    });
     /////////////////////////
   }
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




function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
