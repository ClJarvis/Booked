function validate() {
 	var username = document.getElementById("username").value;
 	var password = document.getElementById("Apassword").value;
    if (username === "2019" && password === "2525"){
		
	window.location = "success.html"; 
	return false;
	} else {
	alert("Try again!");
	}
}

function showPassword() {
	var x = document.getElementById("Apassword");
	if (x.type === "password") {
  	  x.type = "text";
	} else {
	  x.type = "password";
	}
}