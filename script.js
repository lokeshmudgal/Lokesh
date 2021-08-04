
function validate() {
    var name = document.getElementById("txtName").value;
    var address = document.getElementById("txtAddress").value;
    var email = document.getElementById("txtEmail").value;
    var phone = document.getElementById("txtPhone").value;
    var message = document.getElementById("txtMsg").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if(address.length < 10){
        text = "Please Enter Correct Address";
        error_message.innerHTML = text;
        return false;
      }
      if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
      }
      if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
      }
      if(message.length <= 10){
        text = "Please Enter More Than 10 Characters";
        error_message.innerHTML = text;
        return false;
      }
      alert("Form Submitted Successfully!");
      return true;
}