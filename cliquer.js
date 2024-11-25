let nombre_de_clics = 0;
let nombre_de_grandsmagasins = 0;
let affichage_nombre_de_grandsmagasins = document.getElementById("nombre_de_grandsmagasins");
let nombre_de_petitmagasins = 0;
let affichage_nombre_de_petitsmagasins = document.getElementById("nombre_de_petitmagasins");
let nombre_à_changer = document.getElementById("nombre_à_changer");
let nombre_de_petitesusines = 0;
let affichage_nombre_de_petitesusines = document.getElementById("nombre_de_petitesusines");
let nombre_de_grandesusines = 0;
let affichage_nombre_de_grandesusines = document.getElementById("nombre_de_grandesusines");
let nombre_de_baraques_a_frites = 0;
let affichage_nombre_de_baraques_a_frites = document.getElementById("nombre_de_baraques_a_frites");
let nombre_d_aeroports = 0;
let affichage_nombre_d_aeroports = document.getElementById("nombre_d_aeroports");
let nombre_d_aeroportsInter = 0;
let affichage_nombre_d_aeroportsInter = document.getElementById("nombre_d_aeroports_inter");
let nombre_de_centraleNucleaire = 0;
let affichage_nombre_de_centraleNucleaire = document.getElementById("nombre_de_centraleNucleaire");
let clics_par_seconde = 0;
let affichage_clics_par_seconde = document.getElementById('clics_par_seconde');
let upgrade = document.getElementById('upgrade');
let cliquer = document.getElementById('cliquer');
let input = document.getElementById('in_options_dev');
let ajout = 0;
let bouton_petitMagasin = document.getElementById("bouton_petitMagasin");
let bouton_grandMagasin = document.getElementById("bouton_grandMagasin");
let bouton_petiteUsine = document.getElementById("bouton_petiteUsine");
let bouton_grandeUsine = document.getElementById("bouton_grandeUsine");
let bouton_centraleACharbon = document.getElementById("bouton_centraleACharbon");
let nombre_de_a_charbon = document.getElementById("nombre_de_a_charbon");
let nombre_de_centrale_a_charbon = 0;
let nombre_de_barrage_hydrolique = 0;
setTimeout(Fin_de_jeu, 5000)
function Fin_de_jeu() {
	if (nombre_de_clics >= 10000000000000000) {
		Swal.fire({
			icon: 'success',
			title: "Bravo, tu as terminé le jeu, en ayant plus de 10 millions de milliards d'euros !",
			text: 'Cette action réinitialisera tous tes progrès.',
			showCancelButton: true,
    		confirmButtonColor: '#3085d6',
			showCancelButton: false,
			denyButtonText: "Ne pas réninitialiser les progrès",
			denyButtonColor: "red",
			confirmButtonText: 'Réninitialiser les progrès',
			cancelButtonText: 'Annuler',
			showDenyButton: true
    		}).then((result) => {
			if (result.isConfirmed) {
				reset();
				setTimeout(Fin_de_jeu, 5000);
				}
				if (result.isDenied) {
					let texteDeBase = document.getElementById("texteDeBase");
					texteDeBase.textContent = "Jeu terminé";
				}
			})
	}
	else {
		setTimeout(Fin_de_jeu, 5000)
	}
}
function reset() {
	nombre_de_clics = 0;
	clics_par_seconde = 0;
	nombre_de_baraques_a_frites = 0;
	nombre_de_petitmagasins = 0;
	nombre_de_grandsmagasins = 0;
	nombre_de_petitesusines = 0;
	nombre_de_grandesusines = 0;
	nombre_de_grandesusines = 0;
	nombre_d_aeroports = 0;
	nombre_d_aeroportsInter = 0;
	nombre_de_centrale_a_charbon = 0;
	nombre_de_barrage_hydrolique = 0;
	nombre_de_centraleNucleaire = 0;
	actualiser()
	actualiser2()
}
function upgrade1() {
	if (nombre_de_clics >= 20) {
		upgrade.textContent = "Upgrade du clic : -70€ puis +4 par clic";
		cliquer.setAttribute("onclick", "cliquer2()");
		upgrade.setAttribute("onclick", "upgrade2()");
		nombre_de_clics -= 20;
		console.log('upgrade1');
		actualiser();
		}
	}
	function upgrade2() {
		if (nombre_de_clics >= 70) {
		upgrade.textContent = "Upgrade du clic : -500€ puis +10 par clic";
		cliquer.setAttribute("onclick", "cliquer4()");
		upgrade.setAttribute("onclick", "upgrade3()");
		nombre_de_clics -= 70;
		console.log('upgrade2');
		actualiser();
		}
	}
	function upgrade3() {
		if (nombre_de_clics >= 500) {
    		upgrade.textContent = "Upgrade du clic : -1 000 000€ puis +2000 par clic";
			cliquer.setAttribute("onclick", "cliquer10()");
			upgrade.setAttribute("onclick", "upgrade4()");
			nombre_de_clics -= 500;
			console.log('upgrade3');
			actualiser();
		}
	}
function upgrade4() {
	if (nombre_de_clics >= 100000) {
    	upgrade.textContent = "Upgrade du clic : -100 000 000€ puis +90000 par clic";
		cliquer.setAttribute("onclick", "cliquer200()");
		upgrade.setAttribute("onclick", "upgrade5()");
		nombre_de_clics -= 100000;
		console.log('upgrade4');
		actualiser();
	}
}
function upgrade5() {
	if (nombre_de_clics >= 100000000) {
		upgrade.textContent = "Upgrades au maximum";
		cliquer.setAttribute("onclick", "cliquer90000()");
    	nombre_de_clics -= 100000000;
		console.log('upgrade5');
		actualiser();
	}
}
function cliquer1() {
	nombre_de_clics += 1;
	actualiser();
	}
	function cliquer2() {
	nombre_de_clics += 2;
	actualiser();
}
function cliquer4() {
	nombre_de_clics += 4;
	actualiser();
}
function cliquer10() {
	nombre_de_clics += 10;
	actualiser();
}
function cliquer200() {
	nombre_de_clics += 2000;
	actualiser();
}
function cliquer90000() {
	nombre_de_clics += 90000;
	actualiser();
}

setTimeout(texteDeBase, 60000)
function texteDeBase() {
	let texteDeBase = document.getElementById("texteDeBase")
	texteDeBase.textContent = ""
	console.log("texteDeBase was by removed")
}
function actualiser() {
	nombre_à_changer.textContent = nombre_de_clics;
	affichage_nombre_de_petitsmagasins.textContent = nombre_de_petitmagasins;
	affichage_nombre_de_grandsmagasins.textContent = nombre_de_grandsmagasins;
	affichage_nombre_de_petitesusines.textContent = nombre_de_petitesusines;
	affichage_nombre_de_grandesusines.textContent = nombre_de_grandesusines;
	affichage_nombre_de_baraques_a_frites.textContent = nombre_de_baraques_a_frites;
	affichage_nombre_d_aeroports.textContent = nombre_d_aeroports;
	affichage_nombre_d_aeroportsInter.textContent = nombre_d_aeroportsInter;
	affichage_nombre_de_centraleNucleaire.textContent = nombre_de_centraleNucleaire;
	nombre_de_a_charbon.textContent = nombre_de_centrale_a_charbon;	
}
function actualiser2() {
	affichage_clics_par_seconde.textContent = clics_par_seconde;
}
europlus()
function europlus() {
nombre_de_clics += clics_par_seconde;
	actualiser()
	setTimeout(europlus, 1000)
}

//baraque à frites
function baraque_a_frites0() {
	if (nombre_de_clics >= 55) {
	nombre_de_clics -= 55;
	nombre_de_baraques_a_frites += 1;
	actualiser();
	clics_par_seconde += 1;
						actualiser2();
						console.log("Une baraque a frites à été achetée")
						bouton_petitMagasin.setAttribute("style", "background-color: darkviolet;")
						bouton_petitMagasin.setAttribute("onclick", "petitMagasin0()")
						
					}
				}

				// Petit Magasin
				function petitMagasin0() {
					if (nombre_de_clics >= 100) {
						nombre_de_clics -= 100;
						nombre_de_petitmagasins += 1;
						actualiser();
						clics_par_seconde += 2;
						actualiser2();
						console.log("Un petit magasin à été acheté")
						bouton_grandMagasin.setAttribute("style", "background-color: darkviolet;")
						bouton_grandMagasin.setAttribute("onclick", "grandMagasin0()")
					}	
				}

				//grand Magasin
				function grandMagasin0() {
					if (nombre_de_clics >= 500) {
						nombre_de_clics -= 500;
						nombre_de_grandsmagasins += 1;
						actualiser();
						clics_par_seconde += 12;
						actualiser2();
						console.log("Un grand magasin à été acheté")
						bouton_petiteUsine.setAttribute("style", "background-color: darkviolet;")
						bouton_petiteUsine.setAttribute("onclick", "petiteUsine0()")
					}
				}

				//petite usine
				function petiteUsine0() {
					if (nombre_de_clics >= 10000) {
						nombre_de_clics -= 10000;
						nombre_de_petitesusines += 1;
						actualiser();
						clics_par_seconde += 200;
						actualiser2();
						console.log("Une petite usine à été achetée")
						bouton_grandeUsine.setAttribute("style", "background-color: darkviolet;")
						bouton_grandeUsine.setAttribute("onclick", "grandeUsine0()")
					}
				}


				//grande usine
				function grandeUsine0() {
					if (nombre_de_clics >= 100000) {
						nombre_de_clics -= 100000;
						nombre_de_grandesusines += 1;
						actualiser();
						clics_par_seconde += 3000;
						actualiser2();
						console.log("Une grande usine à été achetée")
						bouton_aeroport.setAttribute("style", "background-color: darkviolet;")
						bouton_aeroport.setAttribute("onclick", "aeroport0()")
					}
				}



				//aeroport
				function aeroport0() {
					if (nombre_de_clics >= 5000000) {
						nombre_de_clics -= 5000000;
						nombre_d_aeroports += 1;
						actualiser();
						clics_par_seconde += 70000;
						actualiser2();
						console.log("Un aéroport à été acheté")
						bouton_aeroportInter.setAttribute("style", "background-color: darkviolet;")
						bouton_aeroportInter.setAttribute("onclick", "aeroportInter0()")
					}
				}
				
				
				//aeroport international
				function aeroportInter0() {
					if (nombre_de_clics >= 50000000) {
						nombre_de_clics -= 50000000;
						nombre_d_aeroportsInter += 1;
						actualiser();
						clics_par_seconde += 1000000;
						actualiser2();
						console.log("Un aéroport internationnal à été acheté")
						bouton_centraleACharbon.setAttribute("style", "background-color: darkviolet;")
						bouton_centraleACharbon.setAttribute("onclick", "centrale_a_charbon0()")
					}
				}
				
				//centrale a charbon
				function centrale_a_charbon0() {
					if (nombre_de_clics >= 700000000) {
						nombre_de_clics -= 700000000;
						nombre_de_centrale_a_charbon += 1;
						actualiser();
						clics_par_seconde += 50000000;
						actualiser2();
						console.log("Une centrale à charbon à été achetée")
						bouton_centraleNucleaire.setAttribute("style", "background-color: darkviolet;")
						bouton_centraleNucleaire.setAttribute("onclick", "centraleNucleaire0()")
					}
				}
				//centrale nucleaire
				function centraleNucleaire0() {
					if (nombre_de_clics >= 100000000000000) {
						nombre_de_clics -= 100000000000000;
						nombre_de_centraleNucleaire += 1;
						actualiser();
						clics_par_seconde += 50000000000;
						actualiser2();
						console.log("Une centrale nucléaire à été achetée")
					}
				}


				//option dev
				function valid_options_dev() {
					ajout = parseInt(input.value);
					if (nombre_de_clics + ajout >= 0) {
						nombre_de_clics += ajout;
						actualiser();
					}	
				}
				function Fin_de_jeu_dev() {
					nombre_de_clics = 10000000000000000;
					console.log("Fin du jeu avec les options devs");
					Fin_de_jeu();
					nombre_de_clics = 0;
					actualiser();
				}