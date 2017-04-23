function go() {
	//forms values
	var school = document.getElementsByName("school")[0].value;
	var lector = document.getElementsByName("lector")[0].value;

	//content values
	var contentSchool = document.getElementsByClassName("content__school");
	var contentLector = document.getElementsByClassName("content__lector");
	var contentVideoShow = document.getElementsByClassName("content__video content__video_show")

	//short names
	var allSchool = "Все школы";
	var sri = "Школа разработки интерфейсов";
	var smr = "Школа мобильной разработки";
	var smd = "Школа мобильного дизайна";
	var noMod = "content__conteiner";
	var redMod = "content__conteiner_red";
	var greenMod = "content__conteiner_green";
	var blueMod	= "content__conteiner_blue";
	var noneMod = "content__conteiner_none";

	//school and lectors filtration
	if(school === allSchool){
		for (var i = contentSchool.length - 1; i >= 0; i--) {
			if(contentSchool[i].innerHTML === sri){
			contentSchool[i].parentElement.className = noMod + " " + redMod;
			}else if(contentSchool[i].innerHTML === smr){
				contentSchool[i].parentElement.className = noMod + " " + greenMod;
			}else if(contentSchool[i].innerHTML === smd){
				contentSchool[i].parentElement.className = noMod + " " + blueMod;
			}
		}
	}
	else if(school === sri){
		for (var i = contentSchool.length - 1; i >= 0; i--) {
			if(contentSchool[i].innerHTML === sri){
			contentSchool[i].parentElement.className = noMod + " " + redMod;
			}else if(contentSchool[i].innerHTML === smr){
				contentSchool[i].parentElement.className = noMod + " " + noneMod;
			}else if(contentSchool[i].innerHTML === smd){
				contentSchool[i].parentElement.className = noMod + " " + noneMod;
			}
		}
	}
	else if(school === smr){
		for (var i = contentSchool.length - 1; i >= 0; i--) {
			if(contentSchool[i].innerHTML === sri){
			contentSchool[i].parentElement.className = noMod + " " + noneMod;
			}else if(contentSchool[i].innerHTML === smr){
				contentSchool[i].parentElement.className = noMod + " " + greenMod;
			}else if(contentSchool[i].innerHTML === smd){
				contentSchool[i].parentElement.className = noMod + " " + noneMod;
			}
		}
	}
	else if(school === smd){
		for (var i = contentSchool.length - 1; i >= 0; i--) {
			if(contentSchool[i].innerHTML === sri){
			contentSchool[i].parentElement.className = noMod + " " + noneMod;
			}else if(contentSchool[i].innerHTML === smr){
				contentSchool[i].parentElement.className = noMod + " " + noneMod;
			}else if(contentSchool[i].innerHTML === smd){
				contentSchool[i].parentElement.className = noMod + " " + blueMod;
			}
		}
	}

	//grey color for passed lections whith video
	for (var i = contentVideoShow.length - 1; i >= 0; i--) {
		if (contentVideoShow[i].parentElement.className != "content__conteiner content__conteiner_none"){
			contentVideoShow[i].parentElement.className = noMod;
		} 
	}

	//lectors filtration
	for (var i = contentLector.length - 1; i >= 0; i--) {
		if (lector === "Все лекторы"){

		}else if (contentLector[i].innerHTML != lector) {
			contentLector[i].parentElement.className = noMod + " " + noneMod;
		}
	}

	//getting date interval variables
	var minDate = document.getElementsByName("minDate")[0].value; //Mindate form value
	var maxDate = document.getElementsByName("maxDate")[0].value; //Maxdate form value

	var contantDate = document.getElementsByClassName("content__date"); //lections date array
	
	//comparing lactions dates and date interval (whith moment.js). Setting display: none for falers.
	for (var i = 0 ; i < contantDate.length ; i++) {
		var contantDateClone = contantDate[i].innerHTML.split('.').reverse();
		contantDateClone[0] = "2016";
		contantDateClone = contantDateClone.join("-");
		if (!(moment(contantDateClone).isAfter(minDate) && moment(maxDate).isAfter(contantDateClone))){
			contantDate[i].parentElement.className = noMod + " " + noneMod;
		}
	}	
}


//simple toggler for menu button in mobile and tablet versions
function toggleClass() {
	if(document.getElementsByClassName("menu")[0].className === "menu"){
		document.getElementsByClassName("menu")[0].className = "menu menu_show";
		}
	else if (document.getElementsByClassName("menu menu_show")[0].className === "menu menu_show"){
		document.getElementsByClassName("menu menu_show")[0].className = "menu";
		} 
}	

//function for lector info toggle button!
function toggle(obj){
	var adoutLector = obj.nextSibling.nextSibling;
	if(adoutLector.className === "content__infoButton"){
		adoutLector.className = "content__infoButton content__infoButton_show";
		adoutLector.innerHTML = "Здесь находится информация о хорошем человеке: "+ obj.innerHTML;

	}
	else if (adoutLector.className === "content__infoButton content__infoButton_show"){
		adoutLector.className = "content__infoButton";
		} 
}

