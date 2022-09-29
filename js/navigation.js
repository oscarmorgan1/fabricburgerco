

function updateNav() {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        console.log(firebase.auth().currentUser.uid)
          {
            var userid = firebase.auth().currentUser.uid
            database.ref("users/" + userid + "/Account/First Name").on('value', displayFirstName);

             function displayFirstName(fn){
             document.getElementById("Name").innerHTML = ("Welcome, " + fn.val())
             }

            
          }
        } else {
          document.getElementById("Name").innerHTML = ("Login")
          document.getElementById("Name").href="login.html"; 
          document.getElementById("Account").style.display = 'none'
          document.getElementById("Action").style.display = "none";
        }
      })
}




function LogoutProcess() {


    firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	  firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    {window.open("dashboard.html",'_self');}
	  } else {

	  }
	})

	}).catch(function(error) {
	  // An error happened.
	});
}