const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')



const party = '25 Sept 2021 18:00:00'

function countdown () {
    const partyDate = new Date(party);
    const currentDate = new Date();

    const totalSeconds = (partyDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }  

}

countdown();

setInterval(countdown, 1000);



function lancerJeu(id) {
    // CHOIX DE L'UTILISATEUR
    let choixUtilisateur = id;
  
    // CHOIX DE L'ORDINATEUR
    let choixOrdinateur = Math.random(); 
  
    if (choixOrdinateur < 0.34) {
      choixOrdinateur = "caillou"
    } else if (choixOrdinateur <= 0.67) {
      choixOrdinateur = "papier"
    } else {
      choixOrdinateur = "ciseaux"
    }
  
    const resultatEl = document.getElementById("resultat")
    const gagne = function() {resultatEl.innerHTML = `Bravo tu as gagné!🎉🥳`}
    const perdu = () => resultatEl.innerHTML = `Ooooh non c'est perdu... 😓😓😓`
    const egalite = () => resultatEl.innerHTML = `Egalité 😅`
  
    // COMPARER LES RESULTATS
    function compare(utilisateur, ordinateur) {
  
      document.getElementById("mainOrdinateur").innerHTML = `Les Daft Punk ont choisi : ${ordinateur} !`
  
      if (utilisateur === ordinateur) {
        egalite();
      } else if (utilisateur === "caillou") {
        if (ordinateur === "ciseau") {
          gagne();
        } else if (ordinateur === "papier") {
          perdu();
        }
      } else if (utilisateur === "papier") {
        if (ordinateur === "ciseau") {
          perdu();
        } else if (ordinateur === "caillou") {
          gagne();
        }
      } else if (utilisateur === "ciseau") {
        if (ordinateur === "papier") {
          gagne();
        } else if (ordinateur === "caillou") {
          perdu();
        }
      }
    }
    compare(choixUtilisateur, choixOrdinateur);
  }
  