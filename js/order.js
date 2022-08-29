var cart = [];
var cartTotal = cart.length
var cartUI
var selectedStore = "FBC0001"
var selectedItem = "Planino Burger"
var totalToCreate;
    var index = 0;
    var targetItem;
    var targetCategory;


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
        targetCategory = "burgers"
        console.log(targetCategory)
        database.ref("stores/" + storeID + "/menu/" + targetCategory + "/active").on('value', displayMenuTotal);

        function displayMenuTotal(menu){
        console.log(menu.val())
        activeMenu = menu.val()
        console.log(activeMenu.length);

        totalToCreate = activeMenu.length;
        console.log(totalToCreate)
        console.log(index)
        
        createItem()
    } 

} else {
    console.log("error")
}



function createItem() {

    

    if (index < totalToCreate) {
        //create div
        create()      
    } else {
        console.log("called stack")
    }

   
}


function create() {
    console.log(activeMenu[1])
    console.log("HELLO")

   

    database.ref("stores/" + storeID + "/menu/" + targetCategory + "/active/" + index).on('value', displayMenuItem);
        function displayMenuItem(menu){
            console.log(menu.val())
            targetItem = menu.val()
            console.log(targetItem)
            fill()

        }


function fill() {
    

    var itemsection = document.getElementById("items")


    
    var newDIV = document.createElement('div');
    itemsection.appendChild(newDIV)

    if (index > 2) {
        newDIV.className = "column-4 tile grow project-3"
    } else {
        newDIV.className = "column-4 tile grow project-3 top-row"
    }

    var newImage = document.createElement('img');
    newDIV.appendChild(newImage)
    newImage.className = "image"

    database.ref("stores/" + storeID + "/menu/" + targetCategory + "/reference/" + targetItem + "/image").on('value', displayImage);
        function displayImage(image){
            newImage.src = image.val()
            console.log(image.val())
        }

    

    var newTitle = document.createElement('h2');
    newDIV.appendChild(newTitle)
    newTitle.className = "item-title"

    newTitle.innerHTML = targetItem

    var newDescription = document.createElement('h2');
    newDIV.appendChild(newDescription)
    newDescription.className = "item-description"


    database.ref("stores/" + storeID + "/menu/" + targetCategory + "/reference/" + targetItem + "/description").on('value', displayDescription);
        function displayDescription(description){
            newDescription.innerHTML = description.val()
        }

    var newButton = document.createElement('button');
    newDIV.appendChild(newButton)
    newButton.id = "productModal"
    newButton.className = "item-order"
    newButton.innerHTML = "+"

    newButton.addEventListener("click", productInfo.bind(null, targetItem));


    // newButton.onclick = function(){
    //     productInfo(targetItem)
    //     console.log()
    //   };


    // newButton.onclick = productInfo()

    var newPrice = document.createElement('h5');
    newDIV.appendChild(newPrice)
    newPrice.className = "price"

    database.ref("stores/" + storeID + "/menu/" + targetCategory + "/reference/" + targetItem + "/price").on('value', displayPrice);
        function displayPrice(price){
            newPrice.innerHTML = price.val()
        }
        
    newPrice.innerHTML = "$10"
    //update prices
    index = index + 1
    console.log(index)
    createItem()

}
    
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


    function productInfo(productName) {
        console.log(productName)
        var modal = document.getElementById("product-modal");
        modal.style.display = "block"
        document.getElementById("product-info-title").innerHTML = productName
        

        database.ref("stores/" + storeID + "/menu/" + targetCategory + "/reference/" + productName + "/image").on('value', displayImage);
        function displayImage(image){
            document.getElementById("product-info-productshot").src = image.val()
            
        }

        database.ref("stores/" + storeID + "/menu/" + targetCategory + "/reference/" + productName + "/description").on('value', displayDescription);
        function displayDescription(description){
            document.getElementById("product-info-description").innerHTML = description.val()
        }

        database.ref("stores/" + storeID + "/menu/" + targetCategory + "/reference/" + productName + "/price").on('value', displayPrice);
        function displayPrice(price){
            document.getElementById("product-info-price").innerHTML = price.val()
        }
        
        document.getElementById("add-to-cart").addEventListener("click", addtoCart.bind(null, productName));
    
    }


    // function disappear(ID) {
    //     alert(ID)
    // }

  

// Get the button that opens the modal


function addtoCart(cartItem) {


    var cartTotal = cart.length

    console.log(cartTotal)

    cart.push(cartItem)

    console.log(cart)

    document.getElementById("item-modal").style.display = "none"
    // updateCart()
}