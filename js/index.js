function setById(id, val) {
   document.getElementById(id).innerHTML = val;
}

function updateScreens() {
	var ScrW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	var ScrH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
	setById("screenWidth", ScrW + " pixels wide");
	setById("screenHeight", ScrH + " pixels high");
	if (ScrH > 590) {
		setById("snoopDogg", "That's higher than Snoop Dogg!")
	} else {
		setById("snoopDogg", " ")
	}
}
