engRadio = document.getElementById('eng');
rusRadio = document.getElementById('ru');
uaRadio = document.getElementById('ua');

/*Show which language now is*/
var applyLanguage = function(lang) {
	alert('now language is: ' + lang);
}

/*Show text in language checked and saving language to Local Storage*/
var currentLang = function(current) {
	var langEls = document.getElementsByClassName('lang-' + current);
	var langVisible = document.getElementsByClassName('visible');
	langVisibleLength = langVisible.length;
	for (var k = 0; k < langVisibleLength; k++) {
		langVisible[0].classList.remove('visible');
	}
	for (var i = 0; i < langEls.length; i++) {
		var langEl = langEls[i];
		langEl.classList.add('visible');
	}
	var $save = document.querySelector('html body button#save')
	$save.addEventListener('click', function() {
		//alert('Your language saved successfully in Local Storage!');
		localStorage.setItem("lang", current);
	});
}

/*This operations give possibility show you which language your browser saved in Local Storage
* and show text on this language
*/
if (localStorage.getItem('lang')){
	var localL=localStorage.getItem("lang");
	if(engRadio.value.toLowerCase()===localL){
		engRadio.checked=true;
		currentLang(localL);

	}
	if(rusRadio.value.toLowerCase()===localL){
		rusRadio.checked=true;
		currentLang(localL);
	}
	if(uaRadio.value.toLowerCase()===localL){
		uaRadio.checked=true;
		currentLang(localL);
	}
}
else {
	uaRadio.checked=true;
	currentLang('ua');
}
/*This is function which select current language by clicking on radio buttons */
var getCurrentLanguage = function() {
  var defaultLanguage = 'ua';
  var rusLanguage = 'ru';
  var engLanguage = 'eng';
  var currentL;

  engRadio.addEventListener('change', function(e) {
  	if (engRadio.checked) {
  		applyLanguage(engLanguage);
  		currentL = engLanguage;
  		currentLang(currentL);
  		engRadio.checked = true;
  		console.log(currentL);
  	}
  });

  rusRadio.addEventListener('change', function(e) {
  	if (rusRadio.checked) {
  		applyLanguage(rusLanguage);
  		currentL = rusLanguage;
  		currentLang(currentL);
  		rusRadio.checked = true;
  		console.log(currentL);
  	}
  });

  uaRadio.addEventListener('change', function(e) {
  	if (uaRadio.checked) {
  		applyLanguage(defaultLanguage);
  		currentL = defaultLanguage;
  		currentLang(currentL);
  		uaRadio.checked = true;
  		console.log(currentL);
  	}
  });
}

getCurrentLanguage();