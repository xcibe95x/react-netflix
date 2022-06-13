// PHP $_GET Request Equivalent
// Da utente di PHP ho rubato questo Gist, che mi crea quello che è il comando $_GET['variabile']
// Su PHP permette di scrivere una variabile nell'url, e potremo passare il valore
// Nella pagina html e sostituire l'immagine linkando diversi URL dalla index

// Emulate PHP $_GET
var $_GET = new Array();
function GET() {
	var url = location.search.replace("?", "").split("&");
	for (var index = 0; index < url.length; index++) {
		var value = url[index].split("=");
		$_GET[value[0]] = value[1];
	}
}
GET();


// Replace User Profile on Page Load
window.onload = function() {

	// No User - Show Default Profile Icon

	let profile = document.getElementById("profile-picture");
	let god = document.getElementById("god-name");
	let god2 = document.getElementById("god-name-cards");


	if ($_GET['user'] == '') {
		profile.innerHTML = `<img src="./assets/img/profiles/ProfilePicture1.png" alt="Profileimg">`;
		god.innerHTML = `Zeus`;
		god2.innerHTML = `Zeus`;
	}

	if ($_GET['user'] == "zeus") {
		profile.innerHTML = `<img src="./assets/img/profiles/ProfilePicture1.png" alt="Profileimg">`;
		god.innerHTML = `Zeus`;
		god2.innerHTML = `Zeus`;
	}

	if ($_GET['user'] == "ade") {
		profile.innerHTML = `<img src="./assets/img/profiles/ProfilePicture2.png" alt="Profileimg">`;
		god.innerHTML = `Ade`;
		god2.innerHTML = `Ade`;
	}

	if ($_GET['user'] == "poseidone") {
		profile.innerHTML = `<img src="./assets/img/profiles/ProfilePicture3.png" alt="Profileimg">`;
		god.innerHTML = `Poseidone`;
		god2.innerHTML = `Poseidone`;
	}

	if ($_GET['user'] == "apollo") {
		profile.innerHTML = `<img src="./assets/img/profiles/ProfilePicture4.png" alt="Profileimg">`;
		god.innerHTML = `Apollo`;
		god2.innerHTML = `Apollo`;
	}

	if ($_GET['id'] == "god") {
		profile.innerHTML = `<img src="./assets/img/profiles/ProfilePicture${$_GET['pic']}.png" alt="Profileimg">`;
		god.innerHTML = $_GET['user'];
		god2.innerHTML = $_GET['user'];
	}

}


// Funzione Place Holder
function AddGod() {
	
	const pics = ["1", "2", "3", "5"];
	const gods = ["Era", "Demetra", "Estia", "Atena", "Artemide", "Afrodite", "Ares", "Efesto", "Hermes", "Dioniso"];
	const randomNumber = pics[Math.floor(Math.random() * pics.length)];
	const randomElement = gods[Math.floor(Math.random() * gods.length)];
	let newGod = randomElement;
	let newPic = randomNumber;
	let newUser = document.getElementById("profiles");
	newUser.innerHTML = `<div class="profile"><a href="./home.html?user=${newGod}&id=god&pic=${newPic}"><img src="./assets/img/profiles/ProfilePicture${newPic}.png" alt="Profile5"></a><h4>${newGod}</h4></div>` + newUser.innerHTML;

}