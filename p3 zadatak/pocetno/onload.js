/**
 * 
 */

// Prilikom ucitavanja stranice uzimamo parametre iz browsera
// Gde nam se nalaze korisnicko ime i lozinka
window.onload = function(){
	var podaci = window.location.search.substring(1).split("&");
	if(podaci=="")
	{
		window.location = "login.html";
	}
	// Obradjujemo te podatke tako da izvucemo i korisnicko ime i lozinku
	var ime = podaci[0].split("=")[1];
	var lozinka = podaci[1].split("=")[1];

	// U zavisnosti od korisnickog imena kreiramo maloprodajnog ili veleprodajnog korisnika
	// TODO Napraviti korisnika u zavisnosti od imena
	
	//Poziv metode stampaj
	korisnik.stampaj();
	
};