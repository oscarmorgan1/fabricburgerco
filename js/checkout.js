var firstName;
    var lastName;
    var email;
    var phone;
    var fullAddress;
    var unit;
    var street;
    var suburb;
    var state;
    var zip;


function validateDetails() {

     firstName = document.getElementById("fn").value
     lastName = document.getElementById("ln").value
     email = document.getElementById("e").value 
     phone = document.getElementById("pn").value
     fullAddress = document.getElementById("ad1").value + " " + document.getElementById("suburb").value + " " + document.getElementById("s").value + " " + document.getElementById("zip").value




    document.getElementById("your-details-tab").innerHTML = "Your Details" + " | " + firstName + " " + lastName + " | " + fullAddress

    document.getElementById("cd-n").innerHTML = firstName + " " + lastName

    document.getElementById("cd-fa").innerHTML = fullAddress

    document.getElementById("cd-c").innerHTML = email + " | " + phone




}




function savedDetails() {



    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          


            document.getElementById("sd-fa").style.display = "block"
            document.getElementById("sd-c").style.display = "block"

            database.ref("users/" + firebase.auth().currentUser.uid + "/Account/First Name").on('value', displayFirstName);
            function displayFirstName(fn){
                firstName = fn.val()
                document.getElementById("fn").value = firstName
                
            }
        
            database.ref("users/" + firebase.auth().currentUser.uid + "/Account/Last Name").on('value', displayLastName);
            function displayLastName(ln){
                lastName = ln.val()
                document.getElementById("sd-n").innerHTML = firstName + " " + lastName
                document.getElementById("ln").value = lastName
            }
        
            database.ref("users/" + firebase.auth().currentUser.uid + "/Account/Email").on('value', displayEmail);
            function displayEmail(email){
                email = email.val()
                document.getElementById("e").value = email
                

                database.ref("users/" + firebase.auth().currentUser.uid + "/Account/Phone").on('value', displayPhone);
                function displayPhone(pn){
                phone = pn.val()
                document.getElementById("sd-c").innerHTML = email + " | " + phone
                document.getElementById("pn").value = phone
            }
            }

            

            database.ref("users/" + firebase.auth().currentUser.uid + "/Account/Address/Full").on('value', displayAddress);
            function displayAddress(ad){
                fullAddress = ad.val()
                document.getElementById("sd-fa").innerHTML = fullAddress
            }


            database.ref("users/" + firebase.auth().currentUser.uid + "/Account/Address/Parts/Unit").on('value', displayUnit);
            function displayUnit(un){
                unit = un.val()
            }

            database.ref("users/" + firebase.auth().currentUser.uid + "/Account/Address/Parts/Street").on('value', displayStreet);
            function displayStreet(sn){
                street = sn.val()
                document.getElementById("ad1").value = unit + " " + street
            }

            database.ref("users/" + firebase.auth().currentUser.uid + "/Account/Address/Parts/Suburb").on('value', displaySuburb);
            function displaySuburb(sub){
                suburb = sub.val()
                document.getElementById("suburb").value = suburb
            }

            database.ref("users/" + firebase.auth().currentUser.uid + "/Account/Address/Parts/State").on('value', displayState);
            function displayState(stn){
                state = stn.val()
                document.getElementById("s").value = state
            }

            database.ref("users/" + firebase.auth().currentUser.uid + "/Account/Address/Parts/Zip").on('value', displayZip);
            function displayZip(zn){
                zip = zn.val()
                document.getElementById("zip").value = zip
            }
            
            
         

            document.getElementById("sd-fa").innerHTML = fullAddress
            document.getElementById("sd-current-tick").style.display = "block"
            document.getElementById("sd-current-tick").checked = "true"
            
                    
        } else {
  
        }
  
  
      })

}


function orderIntent() {
    var modal = document.getElementById("myModal");


  modal.style.display = "block";

  setTimeout(function() {
  
    document.getElementById("ld-gif").src = "/images/onetick.gif"
    document.getElementById("status-text").innerHTML = "Order Placed"
    document.getElementById("terms-text").innerHTML = "You'll be automatically redirected"


    setTimeout(function() {
  
        window.open("/track.html", '_self')
      }, 3000);
  }, 2000);


}