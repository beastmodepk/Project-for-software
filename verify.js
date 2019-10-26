const verify = () => {
	const password = "pa$ta&mu$hrooms";
	let guess = document.getElementById("Pass-field843").value;
	if (guess !== password) {
		alert("Incorrect Password. Try again.")
	}
	else {
		window.location.replace("https://docs.google.com/document/d/e/2PACX-1vRHVh_6rfdr109I1IJMgjo6WEmE2CeFoJXNu67UqejKrEXITBSyD07H1kSY1Pk0lESKOtbaDY-IFjqu/pub")
	}
}