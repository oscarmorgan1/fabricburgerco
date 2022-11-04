var pickedID;
var method;


function pickup() {
    console.log("picked")

    var pickuptile = document.getElementById("pickup")
    method = "pickup"
    var delivereytile = document.getElementById("deliverey")
    var savedtile = document.getElementById("saved")
    var headertext = document.getElementById("banner-text")
    var searchbox = document.getElementById("searchdiv")
    var op = 1;  // initial opacity

    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            pickuptile.style.display = 'none';
            delivereytile.style.display = 'none';
            savedtile.style.display = 'none';
            savedtile.style.display = 'none';
            headertext.style.display = 'none';
            headertext.innerHTML = "Where would you like to <br> experience Fabric?"
            headertext.style.display = 'block';
            searchbox.style.display = 'block';

        }
        pickuptile.style.opacity = op;
        pickuptile.style.filter = 'alpha(opacity=' + op * 100 + ")";
        delivereytile.style.opacity = op;
        delivereytile.style.filter = 'alpha(opacity=' + op * 100 + ")";
        savedtile.style.opacity = op;
        savedtile.style.filter = 'alpha(opacity=' + op * 100 + ")";
        headertext.style.opacity = op;
        headertext.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 30);

}

function delivery() {
    console.log("picked")

    var pickuptile = document.getElementById("pickup")
    
    var delivereytile = document.getElementById("deliverey")
    var savedtile = document.getElementById("saved")
    var headertext = document.getElementById("banner-text")
    var searchbox = document.getElementById("searchdiv")
    var findstore = document.getElementById("find-store")
    var op = 1;  // initial opacity

    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            pickuptile.style.display = 'none';
            delivereytile.style.display = 'none';
            savedtile.style.display = 'none';
            savedtile.style.display = 'none';
            headertext.style.display = 'none';
            headertext.innerHTML = "Where should we bring <br> the Fabric experience?"
            findstore.innerHTML = "Enter your address"
            headertext.style.display = 'block';
            searchbox.style.display = 'block';

        }
        pickuptile.style.opacity = op;
        pickuptile.style.filter = 'alpha(opacity=' + op * 100 + ")";
        delivereytile.style.opacity = op;
        delivereytile.style.filter = 'alpha(opacity=' + op * 100 + ")";
        savedtile.style.opacity = op;
        savedtile.style.filter = 'alpha(opacity=' + op * 100 + ")";
        headertext.style.opacity = op;
        headertext.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 30);

}

function postcodePicked() {
    var searchdiv = document.getElementById("searchdiv")
    var storediv = document.getElementById("storediv")
    var headertext = document.getElementById("banner-text")
    console.log("gg")
    searchdiv.className = 'cssdownanimation sequence fadeOutBottom searchdiv'
    setTimeout(function() {
        searchdiv.style.display = 'none';
        storediv.style.display = 'block';
        headertext.innerHTML = "Fabric Burger Co."
      }, 500);
}


function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}






document.getElementById("myUL").style.display = "none";
function myFunction() {


var l_search = document.getElementById("myInput").value
var l_count = l_search.length;

console.log(l_count)
   
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");


    if (l_count < 4) {
        document.getElementById("myUL").style.display = "none";
    } else {
        document.getElementById("myUL").style.display = "block";
    }

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    if (document.getElementById("myInput").value == "") {
        document.getElementById("myUL").style.display = "none";
        }
}


var postcodeval;
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




function store() {
   


var FBC0001 = ["2905", "2906", "2620"]
var FBC0002 = ["2900","2902", "2903", "2904", "2905"]
var FBC0003 = ["2611"]
var FBC0004 = ["2605", "2606", "2607"]
var FBC0005 = ["2600","2603", "2604", "2609", "2620"]
var FBC0006 = ["2614","2615","2616","2617"]
var FBC0007 = ["2618", "2911","2912", "2913", "2914"]
var FBC0008 = ["2600","2601","2602","2609","2612"]


    var storename;
    console.log(postcodeval)

    
    if (FBC0001.includes(postcodeval) == true) {
        console.log("store1")
        storename = "Lanyon"
        postcodePicked()
        pickedID = "FBC0001"
        
        // document.getElementById("store").innerHTML = " " + storename;
    } else if (FBC0002.includes(postcodeval) == true) {
        console.log("store2")
        storename = "Greenway"
        pickedID = "FBC0002"
        postcodePicked()
        // document.getElementById("store").innerHTML = " " + storename;
    } else if (FBC0003.includes(postcodeval) == true) {
        console.log("store3")
        storename = "Weston Creek"
        pickedID = "FBC0003"
        postcodePicked()
        // document.getElementById("store").innerHTML = " " + storename;
    } else if (FBC0004.includes(postcodeval) == true) {
        console.log("store4")
        storename = "Phillip"
        pickedID = "FBC0004"
        postcodePicked()
        // document.getElementById("store").innerHTML = " " + storename;
    } else if (FBC0005.includes(postcodeval) == true) {
        console.log("store5")
        storename = "Kingston Foreshore"
        pickedID = "FBC0005"
        postcodePicked()
        // document.getElementById("store").innerHTML = " " + storename;
    } else if (FBC0006.includes(postcodeval) == true) {
        console.log("store6")
        storename = "Belconnen"
        pickedID = "FBC0006"
        postcodePicked()
        // document.getElementById("store").innerHTML = " " + storename;
    } else if (FBC0007.includes(postcodeval) == true) {
        console.log("store7")
        storename = "Gungahlin"
        pickedID = "FBC0007"
        postcodePicked()
        // document.getElementById("store").innerHTML = " " + storename;
    } else if (FBC0008.includes(postcodeval) == true) {
        console.log("store8")
        storename = "Braddon"
        pickedID = "FBC0008"
        postcodePicked()
        // document.getElementById("store").innerHTML = " " + storename;
    }

}

var storeUID;

function startOrder() {

console.log(pickedID)
     database.ref("master/storeid/" + pickedID).on('value', displayID);
    function displayID(id){
        storeUID = id.val();
   console.log(id.val())


   document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
   function makeid() {
    var sec = "";

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      sec += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return sec;
  }
  
  var sec1 = makeid()
  var sec2 = makeid()
  var sec3 = makeid()
  var sec4 = makeid()
  var sec5 = makeid()

  console.log(sec1);
  console.log(sec2);
  console.log(sec3);
  console.log(sec4);
  console.log(sec5);

  var orderID = sec1 + "-" + sec2 + "-" + sec3 + "-" + sec4 + "-" + sec5
  console.log(orderID)


var OrderID = sessionStorage.setItem("Order ID", orderID)
var PickedID = sessionStorage.setItem("Store ID", pickedID)
var StoreUID = sessionStorage.setItem("Store UID", storeUID)
var Service = sessionStorage.setItem("Service Method", method)
 window.open("/order.html", '_self')

}

    
}

function allStores() {


    var searchdiv = document.getElementById("searchdiv")
    var storediv = document.getElementById("storediv")
    var headertext = document.getElementById("banner-text")
    var splitscreen = document.getElementById("split-screen")
    var storetiles = document.getElementById("store1")
    console.log("gg")
    searchdiv.className = 'cssdownanimation sequence fadeOutBottom searchdiv'

    setTimeout(function() {
        searchdiv.style.display = 'none';
        
        headertext.style.display = 'none';
        splitscreen.style.display = 'none';
        document.getElementById("store1").style.display = 'block'
        document.getElementById("store2").style.display = 'block'
        document.getElementById("store3").style.display = 'block'
        document.getElementById("store4").style.display = 'block'
        document.getElementById("store5").style.display = 'block'
        document.getElementById("store6").style.display = 'block'
        document.getElementById("store7").style.display = 'block'
        document.getElementById("store8").style.display = 'block'
        document.getElementById("store9").style.display = 'block'


      }, 500);
    


        
    }