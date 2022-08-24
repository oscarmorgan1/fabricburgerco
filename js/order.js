var cart = [];
var cartTotal = cart.length
var cartUI
var selectedStore = "FBC0001"
var selectedItem = "Planino Burger"


console.log(sessionStorage.getItem("Order ID"))
console.log(sessionStorage.getItem("Store ID"))
console.log(sessionStorage.getItem("Store UID"))

var orderID = sessionStorage.getItem("Order ID")
var storeID = sessionStorage.getItem("Store ID")
var storeUID = sessionStorage.getItem("Store UID")
var activeMenu = [];

console.log(cartTotal)



function pullMenu(menuType) {
    console.log("Pulling menu")
    if (menuType == "burger") {
        console.log("burger")

        database.ref("stores/" + storeID + "/menu/active").on('value', displayMenuTotal);
        function displayMenuTotal(menu){
        console.log(menu.val())
        activeMenu = menu.val()
        console.log(activeMenu.length);
    } 

}

function createItem() {

    var totalToCreate = activeMenu.length;
    var index = 1;

    if (index < totalToCreate) {
        //create div
        console.log(activeMenu[1])
        // create elemements

        //update prices
        index + 1
    } else if (index + 1 == totalToCreate) {

    }

}

function addtoCart() {

    var cartTotal = cart.length

    console.log(cartTotal)

    cart.push(selectedItem)

    console.log(cart)

    updateCart()
}


function updateCart() {

    if (cartUI == 1)
    document.createElement(cartUI)


    var element = document.createElement("div");
    element.appendChild(document.createTextNode('1x HAMBURGER'));
    document.getElementById('cart').appendChild(element);
    element.setAttribute('id', 'HELLO')
    element.setAttribute('class', 'cart-item')

    // database.ref("stores/" + selectedStore + "/menu/Planino Burger/price").on('value', displayPricing, errData);
    // function displayPricing(name2){
    //   console.log(name2.val())
    
    // }

     database.ref("master/itemarray").on('value', showMenu);
    
     function showMenu(gmenu){
        console.log(gmenu.val())
        var globalMenu = Array.from(gmenu.val());
        console.log(globalMenu)
        console.log(globalMenu.length)
        }

     }


    }