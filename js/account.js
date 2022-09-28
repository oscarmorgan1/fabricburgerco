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
    }

    database.ref("users/" + userid + "/Account/Join Date").on('value', displayJoinDate);
    function displayJoinDate(joined){
        document.getElementById("joined").innerHTML = "Member since " + joined.val()
    }

}
