window.onload = function() {



  setUpPopUp();
  offerScript();

};


//itemNumberInput

function setUpPopUp() {
  var minimumTime = 3;
  var maxShareTime = 5;
  var discountPercent = 10;
  var shareStatus = 0;
  var numberOfItems = 1
    $('#shareTimeMinimum').value = minimumTime;
    $('#shareTimeMaximum').value = maxShareTime;
    $('#discountPercent').value = discountPercent;
    $('#numberOfItems').value = numberOfItems;




}

function offerScript () {
$('#sendOffers').click(function() {
  //numberOfItems = document.getElementById('numberOfItems').value;
  //wont need if you click avability
  //chrome.storage.sync.set({'numberOfItems' : numberOfItems});

  sendOffers = 2;
  chrome.storage.sync.set({'sendOffers' : sendOffers});
  alert(sendOffers);



  chrome.tabs.executeScript({
    file: 'js/sendOffers.js'
     });


});
}
// function startSharing() {
//     document.getElementById('startSharing').onclick = function() {
//       var startingNumber = 0;
//       chrome.storage.local.set({'startingNumber': startingNumber});
//       numberOfItems = document.getElementById('numberOfItems').value;
//      minimumTime = document.getElementById('shareTimeMinimum').value;
//      maxShareTime = document.getElementById('shareTimeMaximum').value;
//      numberOfItems = document.getElementById('numberOfItems').value;
//      shareStatus = 1;
//
//      chrome.storage.local.set({'minimumTime': minimumTime});
//      chrome.storage.local.set({'maxShareTime': maxShareTime});
//      chrome.storage.local.set({'shareStatus' : shareStatus});
//      chrome.storage.local.set({'numberOfItems' : numberOfItems});
//
//
//      chrome.tabs.executeScript({
//        file: 'js/itemshare.js'
//         });
//
//
//      }
// }
//
// document.getElementById('startSharing').addEventListener('click', sendOffer);
// function sendOffer() {
// document.getElementById('sendOffers').onclick = function () {
//     discountPercent = document.getElementById('discountPercent').value;
//     chrome.storage.local.set({'discountPercent': discountPercent});
//     sendOffers = 1;
//     chrome.storage.local.set({'sendOffers': sendOffers});
//
//
//
//
//     chrome.tabs.executeScript({
//       file: 'js/sendOffers.js'
//        });
//
//
//
//
//
//   };
//
// }
