function validate() {
 	var username = document.getElementById("username").value;
 	var password = document.getElementById("password").value;
    if (username === "BOB" && password === "2525"){
		
	window.location = "success.html"; 
	return false;
	} else {
	alert("Try again!");
	}
}