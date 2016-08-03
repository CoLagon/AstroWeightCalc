

function calc() {
	var userWeight = document.getElementById("wt").value;
	var userPlanet = document.getElementById("pt").value;
	var result = document.getElementById("Math");
	result.innerHTML =  (userWeight * userPlanet);

}

