    
    
    
function firebaseinit() {

    console.log("Connected to API at api.fabricburger.co 10.0.0.1:5500")

        var config = {
        apiKey: "AIzaSyCJcUXqHVDV1TBpz3py7woWFgG4_klyyBo",
        authDomain: "fabric-burger-co.firebaseapp.com",
        projectId: "fabric-burger-co",
        storageBucket: "fabric-burger-co.appspot.com",
        messagingSenderId: "194551896772",
        appId: "1:194551896772:web:a6588d9c274f26ee98c791",
        databaseURL: "https://fabric-burger-co-default-rtdb.firebaseio.com",
        measurementId: "G-YXF8P02QTF"
        };
        app = firebase.initializeApp(config);
        database = firebase.database()

        updateNav()
}





