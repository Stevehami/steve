function SaveEmployeeDetail(){
    validatecontrols();
}
 var gender;
function validatecontrols(){
    var fname = document.getElementById("fname");
    if (fname.value == "") {
        window.alert("please enter your name");
        fname.focus();
        return false;
    }
    var email = document.getElementById("email")
    if (email.value == "") {
        window.alert("please enter your valid email Id");
        email.focus();
        return false;
    }
    var contactnumber = document.getElementById("contactnumber")
    if (contactnumber.value == ""){
        window.alert("please enter your valid contact number");
        contactnumber.focus();
        return false;
    }
    var number = document.getElementById("number")
    if (number.value == ""){
        window.alert("please enter your pin number");
        dob.focus();
        return false;
    }
    var dob = document.getElementById("dob")
    if (dob.value == "") {
        window.alert("please enter your Date of Birth");
        dob.focus();
        return false;
    }
    
    var address = document.getElementById("address")
    if (address.value == "") {
        window.alert("please enter your address details");
        address.focus();
        return false;
    }
    
    var city = document.getElementById("city")
    if (city.value == "") {
        window.alert("please enter your city name");
        city.focus();
        return false;
    }
    getcontralvalues();
}
gender = document.querySelector('input[name="gender"]:checked');
if (gender === null) {
window.alert("Gender required!");
gender.focus();
return false;
}

function getControlValues() {
    alert("First Name= " + fname.value + "\n" + "\n" + "Email= " + email.value + "\n" + "Mobile= " + mobile.value + "\n" + "Gender= " + gender.value + "\n" + "DateOfBirth= " + dob.value + "\n" + "Address= " + address.value + "\n" + "City= " + city.value + "\n" + "Pin= " + pin.value + "\n" + "State= " + state.value + "\n" )
}
