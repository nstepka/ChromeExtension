window.onload = function() {

loadPage();
displayBoardSetup();

};
loadPage();
function loadPage() {
  chrome.storage.sync.get("shareTimeMin", function(time) {
    console.log(time.shareTimeMin);
    var shareTimeMin = parseInt(time.shareTimeMin);
    console.log("here is share time " + shareTimeMin);
    if(time.shareTimeMin == undefined) {
      $('#shareTimeMin')[0].value = 3;
      console.log("test 1");
      var shareTimeMin = 3;
      chrome.storage.sync.set({'shareTimeMin' : shareTimeMin});

    } else {
        $('#shareTimeMin')[0].value = (time.shareTimeMin);
        var shareTimeMin = parseInt(time.shareTimeMin);
        console.log("test 2");
    }


 });
displayBoardSetup();



function displayBoardSetup() {
  setInterval(function() {
    chrome.storage.sync.get("displayBoard", function(list) {
      var displayBoard = list.displayBoard;
      displayBoard.forEach(function(element) {
        $('#displayBoard').append(element);
        console.log(element);

        chrome.storage.local.get("displayBoard", function(fetchedData2) {
          var list = fetchedData2.displayBoard.join("");
          displayBoard.innerHTML = list;
  });
      });
    });

  }, 5000);
};
 chrome.storage.sync.get("shareTimeMax", function(time) {
   console.log(time.shareTimeMax);
   var shareTimeMax = parseInt(time.shareTimeMax);
   console.log("here is share time " + shareTimeMax);
   if(time.shareTimeMax == undefined) {
     $('#shareTimeMax')[0].value = 5;
     console.log("test 3");
     var shareTimeMax = 5;
     chrome.storage.sync.set({'shareTimeMax' : shareTimeMax});

   } else {
       $('#shareTimeMax')[0].value = (time.shareTimeMax);
       var shareTimeMax = parseInt(time.shareTimeMax);
       console.log("test 4");

   }


 });



  chrome.storage.sync.get('shareCloset', function(offer) {
        var shareCloset = parseInt(offer.shareCloset);
        chrome.storage.sync.get('sendOffers', function(offer) {
                  var sendOffers = parseInt(offer.sendOffers);

            if(shareCloset == 1) {
              $("#shareCloset")[0].style.display = "none";
              $("#stopSharingCloset")[0].style.display = "block";
            }
            if(sendOffers == 1 ) {
              $("#sendOffers")[0].style.display = "none";
              $("#stopOffers")[0].style.display = "block";
            }


        });
        });

}


 $('#shareTimeMin').click(function() {

   var shareTimeMin = parseInt($('#shareTimeMin')[0].value);
   console.log(shareTimeMin);
   chrome.storage.sync.set({'shareTimeMin' : shareTimeMin});


 });


 $('#shareTimeMax').click(function() {

   var shareTimeMax = parseInt($('#shareTimeMax')[0].value);
   console.log(shareTimeMax);
   chrome.storage.sync.set({'shareTimeMax' : shareTimeMax});


 });


  $('#shareCloset').click(function() {
      var loadCloset = 1;
      $("#sendOffers")[0].style.display = "block";
      $("#stopOffers")[0].style.display = "none";
      $("#stopSharingCloset")[0].style.display = "block";
      $("#shareCloset")[0].style.display = "none";
      chrome.storage.sync.set({'loadCloset' : loadCloset});
      var sendOffers = 2;
      chrome.storage.sync.set({'sendOffers' : sendOffers});
      var shareCloset = 1;
      chrome.storage.sync.set({'shareCloset' : shareCloset});
      var itemCounter = 0;
      chrome.storage.sync.set({'itemCounter': itemCounter});
      var shareTimeMin = document.querySelector("#shareTimeMin").value;
      chrome.storage.sync.set({'shareTimeMin' : shareTimeMin});
      var shareTimeMax = document.querySelector("#shareTimeMax").value;
      chrome.storage.sync.set({'shareTimeMax' : shareTimeMax});
      console.log(shareTimeMin  + ' min!');
      console.log(shareTimeMax  + ' max!');
      console.log(itemCounter  + ' item counter');
      console.log(sendOffers  + ' sendOffers');
      console.log(shareCloset  + ' shareCloset');
      chrome.tabs.executeScript({
        file: 'js/sendOffers.js'
         });
  });

  $('#stopSharingCloset').click(function() {
    var loadCloset = 2;
    chrome.storage.sync.set({'loadCloset' : loadCloset});
    var sendOffers = 2;
    chrome.storage.sync.set({'sendOffers' : sendOffers});
    var shareCloset = 2;
    chrome.storage.sync.set({'shareCloset' : shareCloset});
    var itemCounter = 0;
    $("#stopSharingCloset")[0].style.display = "none";
    $("#shareCloset")[0].style.display = "block";
    chrome.storage.sync.set({'itemCounter': itemCounter});
    console.log(itemCounter  + ' item counter');
    console.log(shareCloset  + ' shareCloset');
    var sendOffers = 2;
    chrome.storage.sync.set({'sendOffers' : sendOffers});
    chrome.tabs.executeScript({
      file: 'js/sendOffers.js'
       });

  });


  $('#stopOffers').click(function() {
  var loadCloset = 2;
  chrome.storage.sync.set({'loadCloset' : loadCloset});
  var shareCloset = 2;
  chrome.storage.sync.set({'shareCloset' : shareCloset});
  var sendOffers = 2;
  chrome.storage.sync.set({'sendOffers' : sendOffers});
  console.log( sendOffers + 'stop offers');
  $("#sendOffers")[0].style.display = "block";
  $("#stopOffers")[0].style.display = "none";
  chrome.tabs.executeScript({
    file: 'js/sendOffers.js'
     });
  });

  $('#sendOffers').click(function() {
  var loadCloset = 1;
  chrome.storage.sync.set({'loadCloset' : loadCloset});
  $("#sendOffers")[0].style.display = "none";
  $("#stopOffers")[0].style.display = "block";
  var shareCloset = 2;
  $("#stopSharingCloset")[0].style.display = "none";
  $("#shareCloset")[0].style.display = "block";
  chrome.storage.sync.set({'shareCloset' : shareCloset});
  //numberOfItems = document.getElementById('numberOfItems').value;
  //wont need if you click avability
  //chrome.storage.sync.set({'numberOfItems' : numberOfItems});
  var discountFinder = $("input[name='discountPercent']:checked").val();
  if(discountFinder == 10) {
    var discountPercentage = 2;
    chrome.storage.sync.set({'discountPercentage' : discountPercentage});
  }

  if(discountFinder == 20) {
    var discountPercentage = 1;
    chrome.storage.sync.set({'discountPercentage' : discountPercentage});
  }

  if(discountFinder == 30) {
    var discountPercentage = 0;
    chrome.storage.sync.set({'discountPercentage' : discountPercentage});
  }


  var sendOffers = 1;
  console.log( sendOffers + 'send offers');
  chrome.storage.sync.set({'sendOffers' : sendOffers});
  var itemCounter = 0;
  chrome.storage.sync.set({'itemCounter' : itemCounter});

  var discountPercent = $("input[name='discountPercent']:checked").val();
  chrome.storage.sync.set({'discountPercent' : discountPercent});

  chrome.tabs.executeScript({
    file: 'js/sendOffers.js'
     });


});

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
// // }
// function sendSendOffers () {
//   $("#sendOffers")[0].style.display = "none";
//   $("#stopOffers")[0].style.display = "block";
// }
// function stopOffers() {
//   $("#sendOffers")[0].style.display = "block";
//   $("#stopOffers")[0].style.display = "none";
// }
// document.getElementById('sendOffers').addEventListener('click', sendOffers);
// document.getElementById('stopOffers').addEventListener('click', stopOffers);
