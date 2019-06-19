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


        if (loadCloset == 1 && $('#captcha-popup').css('display') == undefined) {
            if (maxID != null && maxCounter != 1 && bottomOfPage == false) {
                setTimeout(function() {
                    $.get(closetPage + "&max_id=" + maxID, function(data) {
                        //$( "#tiles-con" ).append( data.html );
                        //maxID = data.max_id;
                        console.log(maxID);

                        if (maxID != null || maxCounter != 1) {
                            maxCounter = maxCounter + 1;

                            bottom = document.body.scrollHeight;
                            window.scrollTo(0, bottom);
                            loadAllItems(closetPage, maxID);
                        }
                        if (maxCounter == 1) {
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

                            if ($('#captcha-popup').css('display') != undefined) {
                              shareCloset = 2;
                              closetPage = window.location.href;
                              closetPage.replace("https://poshmark.com/closet/", "");
                              window.location.href = closetPage;
                              alert("CAPTCHA!!!!");
                              chrome.storage.sync.set({
                                  'shareCloset': shareCloset
                              });
                              loadCloset = 2
                              chrome.storage.sync.set({
                                  'loadCloset': loadCloset
                              });
                            }
                            if (shareCloset == 1) {

                                $('head').append(`<script>
                                var counter = 0;
                                var displayBoard = [];
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
                                    var item = $('.tile')[i].innerText;
                                    item = item.split("BOUTIQUE")[0];
                                    item = item.trim();
                                    item = '<div style="background-color: #d2f8d2; padding: 3px; padding-left: 15px; margin: 2px;"><li>Successfully shared ' + item + '</li></div>';
                                    console.log(item);
                                    displayBoard.push(item);
                                    localStorage.setItem('displayBoard', JSON.stringify(displayBoard));
                                    shareBtn.trigger('click');

                                    setTimeout(() => {


                                      $('.internal-shares .pm-followers-share-link').trigger('click');

                                    }, 1000)
                                    var numOfItems = parseInt($('.tile .share').length);
                                    console.log(i + "this is i");
                                    console.log(numOfItems + "number of items");
                                    var quiter = parseInt(i);
                                    console.log(quiter + "this is quiter");
                                    if(quiter == 5 - 1) {
                                      closetPage = window.location.href;
                                      console.log("fuck you fucker");
                                      closetPage.replace("https://poshmark.com/closet/", "");
                                      window.location.href = closetPage;
                                    }
                                  }, 1500 * i);


                                });
                                    </script>`);




                                //old click!

                                //  $("#share-popup > div.modal-body > div > div.internal-share-con > ul > li:nth-child(2) > a > div > div.party-info > div.share-title").click();
                                //$('.internal-shares .pm-followers-share-link').trigger('click');
                                // if ($('#captcha-popup').css('display') == 'block') {
                                //   var shareCloset = 2;
                                //   chrome.storage.sync.set({
                                //       'shareCloset': shareCloset
                                //   });
                                //   loadCloset = 2;
                                //   chrome.storage.sync.set({
                                //       'loadCloset': loadCloset
                                //   });
                                //
                                //   console.log("script kick!");
                                //   alert("CAPTCHA!!!!");
                                // }

                            }
                        });
                    });
                });
            }
        }
    });
}


function displayBoardSetup() {
  setInterval(function() {
    var displayBoard = [];
    displayBoard = JSON.parse(localStorage.getItem("displayBoard"));
    chrome.storage.sync.set({'displayBoard' : displayBoard});
    }, 500);
}

function clickShareButton() {
    chrome.storage.sync.get('itemCounter', function(counter) {
        var itemCounter = parseInt(counter.itemCounter);
        console.log("here is the item counter " + itemCounter);
        $(".tile .share")[itemCounter].click();

    });
    setTimeout(shareItem(), 5000);
}

function shareItem() {
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
        if ($('#captcha-popup').css('display') != undefined) {
            alert("CAPTCHA!!!!");
            loadCloset = 2;
            chrome.storage.sync.set({
                'loadCloset': loadCloset
            });
            var shareCloset = 2;
            chrome.storage.sync.set({
                'shareCloset': shareCloset
            });
        }
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
