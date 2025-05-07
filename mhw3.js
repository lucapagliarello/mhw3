/* funzione per il bottone iscriviti | accesso  */
function onButtonClick() {
  document.body.classList.add('no-scroll'); 
  modalView.classList.remove('hidden'); 
}

function onModalClick(event) {
  if (event.target === modalView) {
    closeModal();
  }
}

function closeModal() {
  document.body.classList.remove('no-scroll'); 
  modalView.classList.add('hidden'); 
}

function closeModalOnX() {
  closeModal();
}

const accesso = document.querySelector(".button-accesso");
const modalView = document.querySelector('#modal-view');
const closeButton = document.querySelector('#X');

accesso.addEventListener('click', onButtonClick);
modalView.addEventListener('click', onModalClick);
closeButton.addEventListener('click', closeModalOnX);

/* pulsante Mostra Altri articoli per aggiungere ulteriori articoli nella home */

function mostraAltro(event) {
  const extraContainer = document.querySelector('#flex-container-extra').parentElement;
  const bottone = event.currentTarget;
  const link = bottone.querySelector('a');

  const isHidden = extraContainer.classList.contains('hidden');

  if (isHidden) {
    extraContainer.classList.remove('hidden');
    link.textContent = 'Mostra meno articoli';
  } else {
    extraContainer.classList.add('hidden');
    link.textContent = 'Mostra altri articoli';
  }
}

const toggleButton = document.querySelector('#mostra-altro');
toggleButton.addEventListener('click', mostraAltro);

/* Funzione quando si passa con il mouse le varie categorie donna-uomo ecc. che si aprono le "sottocategorie" */

function showSubMenu(button) {
  const submenu = document.querySelectorAll('div[data-submenu]');
  for (let i = 0; i < submenu.length; i++) {
    const data = submenu[i].dataset.submenu;
    if (data === button) {
      submenu[i].classList.remove('hidden');
    } else {
      submenu[i].classList.add('hidden');
    }
  }
}

function hideSubMenu(button) {
  const submenu = document.querySelectorAll('div[data-submenu]');
  for (let i = 0; i < submenu.length; i++) {
    const data = submenu[i].dataset.submenu;
    if (data === button) {
      submenu[i].classList.add('hidden');
    }
  }
}

function mostraData(event) {
  const button = event.currentTarget.dataset.button;
  showSubMenu(button);
}

function nascondiData(event) {
  const button = event.currentTarget.dataset.button;
  hideSubMenu(button);
}

function nascondiSubMenu(event) {
  const submenu = event.currentTarget.parentElement;
  submenu.classList.add('hidden');
}

const linkSingolo = document.querySelectorAll('.link-singolo');

for (let i = 0; i < linkSingolo.length; i++) {
  linkSingolo[i].addEventListener("mouseover", mostraData);
}

const linkMobile = document.querySelectorAll('.link-mobile');

for(let i = 0; i < linkMobile.length; i++) {
  linkMobile[i].addEventListener("mouseover", mostraData);
}

const subMenu = document.querySelectorAll('.submenu');

for(let i=0; i < subMenu.length; i++){
  subMenu[i].addEventListener("mouseleave", nascondiSubMenu);
}

function showSubSubMenu(key) {
  const allRightSubmenus = document.querySelectorAll('[data-submenu-right]');
  for (let i = 0; i < allRightSubmenus.length; i++) {
    const submenuKey = allRightSubmenus[i].dataset.submenuRight;
    if (submenuKey === key) {
      allRightSubmenus[i].classList.remove('hidden');
    } else {
      allRightSubmenus[i].classList.add('hidden');
    }
  }
}

function hideSubSubMenuRight() {
  const allRightSubmenus = document.querySelectorAll('[data-submenu-right]');
  for (let i = 0; i < allRightSubmenus.length; i++) {
    allRightSubmenus[i].classList.add('hidden');
  }
}

function handleMouseOver(event) {
  const key = event.currentTarget.dataset.subsubmenu;
  showSubSubMenu(key);
}

function handleMouseLeave() {
  hideSubSubMenuRight();
}

const subsubmenuLinks = document.querySelectorAll('[data-subsubmenu]');
for (let i = 0; i < subsubmenuLinks.length; i++) {
  subsubmenuLinks[i].addEventListener('mouseover', handleMouseOver);
}

const submenuRight = document.querySelectorAll('.submenu-right');
for (let i = 0; i < submenuRight.length; i++) {
  submenuRight[i].addEventListener('mouseleave', handleMouseLeave);
}

/* Menu a tendina versione mobile */

function showMenuMobile(){
  mobileMenu.classList.toggle('hidden');
}

const menuIcon = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobile-menu');

menuIcon.addEventListener('click', showMenuMobile);

/* Cambiamento immagine numero di like, quando clicco sull'immagine, modificando l'attributo src*/

function onLikeClick(event) {
  const likeButton = event.currentTarget;
  const heartImg = likeButton.querySelector('img');
  const likeCount = likeButton.querySelector('span');
  const initialLikes = parseInt(likeButton.dataset.likes);

  let liked = heartImg.src.includes('cuorepieno.png');

  if (liked) {
    liked = false;
    updateHeartImage(heartImg, liked);
    updateLikeCount(likeCount, liked, initialLikes, likeButton);
  } else {
    liked = true;
    updateHeartImage(heartImg, liked);
    updateLikeCount(likeCount, liked, initialLikes, likeButton);
  }
}

function updateHeartImage(heartImg, liked) {
  if (liked) {
    heartImg.src = 'cuorepieno.png';
  } else {
    heartImg.src = 'like.png';
  }
}

function updateLikeCount(likeCount, liked, initialLikes, likeButton) {
  let newLikeCount;
  if (liked) {
    newLikeCount = initialLikes + 1;
  } else {
    newLikeCount = initialLikes - 1;
  }

  likeCount.textContent = newLikeCount;

  likeButton.dataset.likes = newLikeCount;
}

const allLikes = document.querySelectorAll('.likes');
for (let i = 0; i < allLikes.length; i++) {
  allLikes[i].addEventListener('click', onLikeClick);
}

/* Funzione per aprire il box del cambio-valuta */

function cambioValuta(event) {
  console.log('Cambio valuta cliccato!');
  const wrapper = document.querySelector('.wrapper');

  wrapper.classList.toggle('hidden');
}

const cerchio = document.querySelector('.cerchio-vinted');
cerchio.addEventListener('click', cambioValuta);

/* API di ExchangeRate per poter effettuare il cambio valuta da una moneta all'altra */

const currencies = ["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTC","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VES","VND","VUV","WST","XAF","XAG","XAU","XCD","XDR","XOF","XPD","XPF","XPT","YER","ZAR","ZMW","ZWL"]; 

let apiKey = "SECRET";

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");
const result = document.getElementById("result");

currencies.forEach((currency) => {
  const option1 = document.createElement("option");
  option1.value = currency;
  option1.text = currency;
  fromDropDown.add(option1);

  const option2 = document.createElement("option");
  option2.value = currency;
  option2.text = currency;
  toDropDown.add(option2);
});

// Valori di default
fromDropDown.value = "USD";
toDropDown.value = "INR";

function onResponse(response) {
  return response.json();
}

function onJson(json) {
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;

  const fromRate = json.conversion_rates[fromCurrency];
  const toRate = json.conversion_rates[toCurrency];
  const convertedAmount = (amount / fromRate) * toRate;

  result.innerHTML = "";

  const textNode = document.createTextNode(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
  result.appendChild(textNode);
}

function convertCurrency(event) {
  event.preventDefault();

  const fromCurrency = fromDropDown.value;

  const amount = document.querySelector("#amount").value;
  if (amount.length === 0) {
    alert("Inserisci un importo valido!");
    return;
  }

  const api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  fetch(api)
    .then(onResponse)
    .then(onJson);
}

const form = document.getElementById("currency-form");
form.addEventListener("submit", convertCurrency);



/* API di Open Library che consente la ricerca multipla di libri in 
base alla lingua, al titolo, all'autore e all'anno di pubblicazione */


function onJsonRicerca(json) {
  const libreria = document.querySelector('#library-view');
  libreria.innerHTML = '';
  
  let numeroRisultati = json.num_found;
  if (numeroRisultati > 16)
    numeroRisultati = 16;

  for (let i = 0; i < numeroRisultati; i++) {
    const libro = json.docs[i];
    const titolo = libro.title;
    const copertina = 'http://covers.openlibrary.org/b/id/' + libro.cover_i + '-M.jpg';

    const contenitore = document.createElement('div');
    contenitore.classList.add('book');

    const immagine = document.createElement('img');
    immagine.src = copertina;

    const didascalia = document.createElement('span');
    didascalia.textContent = titolo;

    contenitore.appendChild(immagine);
    contenitore.appendChild(didascalia);
    libreria.appendChild(contenitore);
  }
}

function onResponseRicerca(response) {
  return response.json();
}

function eseguiRicerca(evento) {
  evento.preventDefault();

  const testo = document.querySelector('#search').value;
  const criterio = document.querySelector('#criteria').value;
  const lingua = document.querySelector('#language-api').value;

  if (testo === '') {
    alert('Inserisci un valore da cercare.');
    return;
  }

  let url = 'https://openlibrary.org/search.json?' + criterio + '=' + encodeURIComponent(testo);
  if (lingua !== '') {
    url += '&language=' + encodeURIComponent(lingua);
  }

  console.log('Eseguo ricerca con URL: ' + url);
  fetch(url).then(onResponseRicerca).then(onJsonRicerca);
}

const form2 = document.querySelector('form');
form2.addEventListener('submit', eseguiRicerca);