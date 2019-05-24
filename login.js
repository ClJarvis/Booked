function validate() {
 	var username = document.getElementById("username").value;
 	var password = document.getElementById("password").value;
    if (username === "BOB" && password === "2525"){
		alert ("Login successfully");
	window.location = "success.html"; // Redirecting to other page.
	return false;
	}
}