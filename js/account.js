var userid;



function gotUser() {
    console.log("auth")
    userid = firebase.auth().currentUser.uid;
    console.log(userid)

    dashboardUpdate()
}


function dashboardUpdate() { 

    database.ref("users/" + userid + "/Account/Points").on('value', displayPoints);
    function displayPoints(points){
        document.getElementById("points").innerHTML = points.val()
    }

    database.ref("users/" + userid + "/Account/First Name").on('value', displayFirstName);
    function displayFirstName(fn){
        document.getElementById("name").innerHTML = "Welcome, " + fn.val() + "!"
        document.getElementById("firstname").value = fn.val()
    }

    database.ref("users/" + userid + "/Account/Last Name").on('value', displayLastName);
    function displayLastName(ln){
        document.getElementById("lastname").value = ln.val()
    }

    database.ref("users/" + userid + "/Account/Email").on('value', displayEmail);
    function displayEmail(email){
        document.getElementById("email").value = email.val()
    }

    database.ref("users/" + userid + "/Account/DOB").on('value', displayDOB);
    function displayDOB(dob){
        document.getElementById("dob").value = dob.val()
    }

    database.ref("users/" + userid + "/Account/Join Date").on('value', displayJoinDate);
    function displayJoinDate(joined){
        document.getElementById("joined").innerHTML = "Member since " + joined.val()
    }

}


function save() {
    document.getElementById("load").style.display = "block"
}
