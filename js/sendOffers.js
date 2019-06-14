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
    chrome.storage.sync.get('loadCloset', function(closet) {
        var loadCloset = parseInt(closet.loadCloset);
        console.log(loadCloset + " LOAD CLOSET AMOUNT 1 = GO!");
        if (loadCloset == 1) {
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
                        if (maxCounter == 6) {
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
                    chrome.storage.sync.get('shareCloset', function(offer) {
                        var shareCloset = parseInt(offer.shareCloset);
                        console.log(shareCloset + "SHARED CLOSET VALUE!")
                        chrome.storage.sync.get('itemCounter', function(counter) {

                            var itemCounter = parseInt(counter.itemCounter);
                            console.log(itemCounter + "this is the item counter current number");
                            if (sendOffers == 1) {


                                console.log(closet.length);
                                var www = "www.poshmark.com";
                                console.log("hi!!!");
                                url = closet[itemCounter].firstChild.pathname;
                                var pageLink = www.concat(url);
                                window.location.href = url;
                                if (itemCounter == closet.length) {
                                    sendOffers = 2;
                                    chrome.storage.sync.set({
                                        'sendOffers': sendOffers
                                    });
                                    alert(itemCounter);
                                }
                            }
                            console.log(shareCloset + "shared closet");
                            if (shareCloset == 1) {

                              $('head').append(`<script>
                                var counter = 0;
                                $('.tile .share').each((i, el) => {

                                  setTimeout(() => {
                                    if ($('#captcha-popup').css('display') == 'block') {
                                      console.log("on page notifaction");

                                      var shareCloset = 2;
                                      
                                      closetPage = window.location.href;
                                      closetPage.replace("https://poshmark.com/closet/", "");
                                      window.location.href = closetPage;
                                      return false;
                                    }
                                    const shareBtn = $(el);
                                    shareBtn.trigger('click');

                                    setTimeout(() => {
                                      $('.internal-shares .pm-followers-share-link').trigger('click');
                                    }, 1000)
                                  }, 2000 * i);


                                });
                                    </script>`);
                                    if ($('#captcha-popup').css('display') == 'block') {
                                      shareCloset = 2;
                                      chrome.storage.sync.set({
                                          'shareCloset': shareCloset
                                      });
                                      loadCloset = 2;
                                      chrome.storage.sync.set({
                                          'loadCloset': loadCloset
                                      });

                                      console.log("script kick!");
                                      alert("CAPTCHA!!!!");
                                    }

                            }
                        });
                    });
                });
            }
        }
    });
}

function clickShareButton() {
  chrome.storage.sync.get('itemCounter', function(counter) {
  var itemCounter = parseInt(counter.itemCounter);
  console.log("here is the item counter " + itemCounter);
  $(".tile .share")[itemCounter].click();

  });
  setTimeout(shareItem(), 5000);
}

function shareItem () {
  chrome.storage.sync.get('itemCounter', function(counter) {
  var itemCounter = parseInt(counter.itemCounter);
  var itemID = $($(".tile")[itemCounter]).attr('id');
  var itemURL = "https://poshmark.com/listing/share?post_id=";
  console.log(itemCounter);
  itemURL = itemURL.concat(itemID);
  console.log(itemURL);
  $('head').append(`<script>
          $.post(\"${itemURL}\", function(data, status) {})
            .done(function(data, status, response) {
              console.log(status);
              console.log(response.status);
              localStorage.setItem('itemShareStatus', status);
              localStorage.setItem('statusCode', response.status);

            })
            .fail(function(data, status, response, error) {
              console.log(status);
              console.log(error);
              console.log(data.status);
              localStorage.setItem('itemShareStatus', status);
              localStorage.setItem('statusCode', data.status);
            });
        </script>`);


  });
}

function getCloset() {
    chrome.storage.sync.get('loadCloset', function(offer) {
        var loadCloset = parseInt(offer.loadCloset);
        console.log(loadCloset + " Is the closet loaded?  1. yes  2. no.");
        if (loadCloset == 1) {
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
