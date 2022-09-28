var cart = [];
var cartTotal = cart.length;
var cartUI;
var selectedStore = "FBC0001"
var selectedItem = "Planino Burger"
var totalToCreate;
    var index = 0;
    var targetItem;
    var targetCategory;
    var creationIndex = 0;
    var cartIndex;
    var totalItems = 0;
    var tempProduct; 
    var pricingIndex = 0;
    var unitPrice;
    var cartPrice = 0;
    var discount = 0;
    var cartTarget;

var burgers = [];
var deserts = [];
var drinks = [];
var extras = [];
var deals = [];
var menuSections = ["burgers", "deserts", "drinks", "extras", "deals"]
var menuArchiveIndex = 0

// console.log(sessionStorage.getItem("Order ID"))
// console.log(sessionStorage.getItem("Store ID"))
// console.log(sessionStorage.getItem("Store UID"))

var orderID = sessionStorage.getItem("Order ID")
var storeID = sessionStorage.getItem("Store ID")
var storeUID = sessionStorage.getItem("Store UID")
var activeMenu = [];

// console.log(cart)


function getMenuArchive() {


    if (menuArchiveIndex < menuSections.length) {


        database.ref("stores/" + storeID + "/menu/" + menuSections[menuArchiveIndex] + "/active").on('value', getMenu);


        function getMenu(menu){


            // console.log(menu.val())
            
            if (menuSections[menuArchiveIndex] == "burgers") {
                burgers = menu.val()
                logMenu()
            } else if (menuSections[menuArchiveIndex] == "deserts") {
                deserts = menu.val()
                logMenu()
            } else if (menuSections[menuArchiveIndex] == "drinks") {
                drinks = menu.val()
                logMenu()
            } else if (menuSections[menuArchiveIndex] == "extras") {
                extras = menu.val()
                logMenu()
            } else if (menuSections[menuArchiveIndex] == "deals") {
                deals = menu.val()
                logMenu()
            }
    
            menuArchiveIndex = menuArchiveIndex + 1
            getMenuArchive()
        } 
    } else {
        console.log("Got all archive data")
        pullWebCart()
    }

    
}


function logMenu() {
    // console.log(burgers)
    // console.log(deserts)
    // console.log(drinks)
    // console.log(extras)
    // console.log(deals)
}

function pullMenu(menuType) {
    
    getMenuArchive()
   

    // console.log("Pulling menu")
    if (menuType == "?/burgers") {
        console.log("burger")
        targetCategory = "burgers"
        
    } else if (menuType == "?/drinks") {
        console.log("drinks")
        targetCategory = "drinks"
    } else if (menuType == "?/deserts") {
        console.log("deserts")
        targetCategory = "deserts"
    } else {
        // console.log("burger")
        targetCategory = "burgers"
    }

    // console.log(targetCategory)
        database.ref("stores/" + storeID + "/menu/" + targetCategory + "/active").on('value', displayMenuTotal);


function displayMenuTotal(menu){

    

    // console.log(menu.val())
    activeMenu = menu.val()
    // console.log(activeMenu.length);

    totalToCreate = activeMenu.length;
    // console.log(totalToCreate)
    // console.log(index)
    
    createItem()

} 






function createItem() {

    

    if (index < totalToCreate) {
        //create div
        create()      
    } else {
        // console.log("called stack")
    }

   
}


function create() {
    // console.log(activeMenu[1])
    // console.log("HELLO")

   

    database.ref("stores/" + storeID + "/menu/" + targetCategory + "/active/" + index).on('value', displayMenuItem);
        function displayMenuItem(menu){
            // console.log(menu.val())
            targetItem = menu.val()
            // console.log(targetItem)
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
            // console.log(image.val())
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
            newPrice.innerHTML = "$" + price.val()
        }
        
    newPrice.innerHTML = "$10"
    //update prices
    index = index + 1
    // console.log(index)
    createItem()

}
    
}




// function h() {

//     if (cartUI == 1)
//     document.createElement(cartUI)


//     var element = document.createElement("div");
//     element.appendChild(document.createTextNode('1x HAMBURGER'));
//     document.getElementById('cart').appendChild(element);
//     element.setAttribute('id', 'HELLO')
//     element.setAttribute('class', 'cart-item')

//     // database.ref("stores/" + selectedStore + "/menu/Planino Burger/price").on('value', displayPricing, errData);
//     // function displayPricing(name2){
//     //   console.log(name2.val())
    
//     // }

//      database.ref("master/itemarray").on('value', showMenu);
    
//      function showMenu(gmenu){
//         console.log(gmenu.val())
//         var globalMenu = Array.from(gmenu.val());
//         console.log(globalMenu)
//         console.log(globalMenu.length)
//         }

//      }


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
            document.getElementById("product-info-price").innerHTML = "$" + price.val()
        }

        database.ref("stores/" + storeID + "/menu/" + targetCategory + "/reference/" + productName + "/ingredients").on('value', displayIngredients);
        function displayIngredients(ingredients){
            document.getElementById("product-info-ingredients").innerHTML = "Ingredients: " + ingredients.val()
        }
        document.getElementById("add-to-cart").addEventListener("click", addtoCart.bind(null, productName));
   
        tempProduct = productName
    
    }


    // function disappear(ID) {
    //     alert(ID)
    // }

  

// Get the button that opens the modal
// document.getElementById("add-to-cart").addEventListener("click", addtoCart.bind(null, productName));



function openRequest() {
    document.getElementById("request-modal").style.display = "block"
   
}

function addtoCart(cartItem) {
    console.log("Adding to cart...")
    var cartTotal = cart.length

    console.log(cartTotal)
    console.log(cartItem + " about to be pushed")
    cart.push(cartItem)

    console.log(cart)
    console.log("Added to cart.")

    document.getElementById("product-modal").style.display = "none"
    document.getElementById("notif").classList.toggle('visible');

    firebase.database().ref("stores/" + storeID + "/orders/live/" + orderID).set({
        cart,
          });

        //   pullWebCart()
}


function getCart() {

    
    
    totalItems = cart.length
    creationIndex = 0
    cartPrice = 0
    console.log(totalItems)
    console.log(creationIndex)
    // console.log(totalItems)
    pricingIndex = 0
    var node = document.getElementById("cart")

    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
    updateCart()

    

}

function updateCart() {

   

    console.log(creationIndex, totalItems)
    if (creationIndex < totalItems) {
        //create div
     console.log("the creation index is" + creationIndex)
     console.log(cart[creationIndex])

        if (burgers.includes(cart[creationIndex]) == true) {
            console.log("It's a burger")
            cartTarget = "burgers"
        } else if (drinks.includes(cart[creationIndex]) == true) {
            console.log("It's a drink")
            cartTarget = "drinks"
        } else if (deserts.includes(cart[creationIndex]) == true) {
            console.log("It's a desert")
            cartTarget = "deserts"
        } else {
            console.log("Status Unkown")
        }
        console.log(cartTarget)
        
        console.log("Updating cart - More items need to be created")     

        var newItem = document.createElement('h2');
    
        document.getElementById("cart").appendChild(newItem)
        newItem.className = "cart-box"
    
        var newImage = document.createElement('img');
        newItem.appendChild(newImage)
        newImage.src = "/images/product_shots/burger.png"
        newImage.classList = "cart-image"

        database.ref("stores/" + storeID + "/menu/" + cartTarget + "/reference/" + cart[creationIndex] + "/image").on('value', displayImage);
        function displayImage(image){

            newImage.src = image.val()
        
            
        }

        var newItemDelete = document.createElement('h6')
        newItem.appendChild(newItemDelete)
        newItemDelete.innerHTML = "x"
        newItemDelete.id = "cardID-" + cart.length
        newItemDelete.classList = "cart-item-delete"
        newItemDelete.addEventListener("click", deleteItem.bind(null, cart.length - 1));
    
        var newItemText = document.createElement('h4')
        newItem.appendChild(newItemText)
        newItemText.innerHTML = "1x " + cart[creationIndex]

        // document.getElementById("add-to-cart").removeEventListener("click", addtoCart.bind(null, productName));
        document.getElementById("add-to-cart").replaceWith(document.getElementById("add-to-cart").cloneNode(true));
  
     

        creationIndex = creationIndex + 1
        console.log(creationIndex)
        updateCart()
    } else if (creationIndex >= totalItems){
        console.log("All items created")   
        upgradePricing()
    } else {
        console.log("Cart upgrade successful: Cart Index's are equal.")
        upgradePricing()
    }


    

         
        // pullWebCart()
    // setTimeout(function(){ document.getElementById("notif").classList.toggle('visible'); }, 5000);
}


function pullWebCart() {
    database.ref("stores/" + storeID + "/orders/live/" + orderID + "/cart").on('value', getLiveCart)
    function getLiveCart(liveCart){
       
        // console.log(liveCart.val())
        // console.log(parseInt(price.val()))
        if (liveCart.val() == null) {
            console.log("A web cart was not found for this order ID")
            console.log(cart)
        } else {
            cart = liveCart.val()
            console.log("WARNING! A web cart was found for this order ID")
            console.log(cart)
            getCart()
            // console.log(liveCart.val())
            // console.log("edhfbseiuyrgfuesrgfuterg" + cart)
            // getCart()
            
        }
    }
}
function upgradePricing() {


    console.log("THE PRICING INDEX IS " + pricingIndex)

   
    console.log("the creation index is" + pricingIndex)
    creationIndex = 0
     console.log(cart[creationIndex])
     console.log(deserts)
    console.log(cart)
        if (burgers.includes(cart[pricingIndex]) == true) {
            console.log("It's a burger")
            cartTarget = "burgers"
        } else if (drinks.includes(cart[pricingIndex]) == true) {
            console.log("It's a drink")
            cartTarget = "drinks"
        } else if (deserts.includes(cart[pricingIndex]) == true) {
            console.log("It's a desert")
            cartTarget = "deserts"
        }
    // console.log("length" + cart.length)
    if (pricingIndex < cart.length) {
        // console.log("its greater")
        console.log("the cart target" + cartTarget)
        database.ref("stores/" + storeID + "/menu/" + cartTarget + "/reference/" + cart[pricingIndex] + "/price").on('value', displayPrice);
        function displayPrice(price){
            console.log("Unit price = " + price.val())
            unitPrice = parseFloat(price.val())
            console.log("The item costs: " + unitPrice)
            cartPrice += unitPrice
            console.log(cartPrice)
            updatePricingUI()
            // console.log(parseInt(price.val()))
        }

        pricingIndex = pricingIndex + 1

        document.getElementById("subtotal-price").innerHTML = "SUBTOTAL: $" + cartPrice

        if (discount > 0) {
            cartPrice -= discount
            console.log(cartPrice)
        }

        const formatter = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,      
            maximumFractionDigits: 2,
         });
         
         console.log(formatter.format(cartPrice)); 
         

        // console.log(unitPrice)
        // console.log(cartPrice)
        // console.log(pricingIndex)
         
        upgradePricing()

    } else if (pricingIndex == cart.length) {
        console.log("Price upgrade successful: Pricing Index's are equal.")
        // console.log(cartPrice)
    } else {
        console.log("Price upgrade error: Pricing Index's are greater then cart total.")
        // console.log(cartPrice)
    }
    // console.log(pricingIndex + "data.track().pass[data391]" + totalItems)

}
function applyCoupon() {


    if (cart.length == 3) {
        if (cart[0] == "McFabric" && cart[1] == "The Big Burger" && cart[2] == "Maximano Stacker" ) {
            if (document.getElementById("couponField").value == "POGGRS") {
                document.getElementById("secretTile").style.display = "block"
            }}}
    
    
}

function updatePricingUI() {
    
    document.getElementById("discount-price").innerHTML = "DISCOUNT: -$" + discount
    document.getElementById("total-price").innerHTML = "TOTAL: $" + cartPrice
    

}


function deleteItem(row) {
    // console.log(row)
    cart.splice(row, 1)
    // console.log(cart)
    creationIndex = 0


    var node = document.getElementById("cart")

    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
    

    getCart();


}



function toggleMenu(type) {
    menuType = type
    targetCategory = type
}

function initiateCheckoutProcess() {
    window.open("/checkout.html?" + orderID, '_self')
}