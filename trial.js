var orderID = "JOpf1-bLcZS-OGapu-vOoST-K1P1Z"
var firstName = "Oscar"


function sendEmail() {
   

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mail@fabricburger.co",
        Password : "1678CA9744BAB28CC51091A07A1D221A448F",
        To : 'oscar.morgan001@gmail.com',
        From : "mail@fabricburger.co",
        Subject : "Thanks for Ordering.",
        Body : "Hi " + firstName + ", <br> <br> <br> Thanks for ordering. Your order number is " + orderID + "<br> <br> You can track the progress of your order <button> <a href=\"fabricburger.co/track\">here</a></button>. <br> <br> <br> -Fabric Burger Co." 
       }).then(
      message => alert(message)
    );


    }