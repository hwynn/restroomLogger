function clearInput(){
	document.getElementById("nogender").checked=true;
	document.getElementById("nohandicap").checked=true;
	document.getElementById("floor").value="none";
	document.getElementById("findme").disabled = true;
}

function check(){
	var gender = document.querySelector('input[name="gender"]:checked');
	var handicap = document.querySelector('input[name="gender"]:checked');
	var floor = document.getElementById("floor").value;
	if((gender=="none")||(handicap=="none")||(floor=="none")){
		document.getElementById("findme").disabled = true;
	}
	else{
		document.getElementById("findme").disabled = false;
	}
}

function tellMe(){
	console.log("gender: " + document.querySelector('input[name="gender"]:checked').value);
	console.log("handicap: " + document.querySelector('input[name="handicap"]:checked').value);
	console.log(document.getElementById("floor").value);
	var gender = document.querySelector('input[name="gender"]:checked');
	var handicap = document.querySelector('input[name="gender"]:checked');
	var floor = document.getElementById("floor").value;
}
				
function findMe(){
	var x = document.getElementById("whereinfo");
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(my_position){
			//we're using an XMLHttpRequest!
			//http://www.openjs.com/articles/ajax_xmlhttp_using_post.php
			xmlhttp=new XMLHttpRequest();
			//variable name vN
			//variable data vD
			//these will be packaged and sent into the xmlhttp request
			var	vN_LA = "lat=";
			var	vD_LA = my_position.coords.latitude.toString();
			var vN_LO = "long=";
			var	vD_LO = my_position.coords.longitude.toString();
			var vN_A = "accy=";
			var	vD_A = my_position.coords.accuracy.toString();
			var vN_T = "t=";
			var	vD_T = my_position.timestamp.toString();
				
			var url = "places.php";
			x.innerHTML = "You're here!<br>" + 
			"latitude: " + my_position.coords.latitude + 
			"<br>longitude: " + my_position.coords.longitude +
			"<br>accuracy: " + my_position.coords.accuracy +
			"<br>time: " + my_position.timestamp;
			var params = vN_LA + vD_LA + "&" + vN_LO + vD_LO + "&" + vN_A + vD_A + "&" + vN_T + vD_T;
			xmlhttp.open("POST", url, true);

			//This is what the php documentation page said to use for request headers. I have no clue what they do.
			xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xmlhttp.setRequestHeader("Content-length", params.length);
			xmlhttp.setRequestHeader("Connection", "close");

			xmlhttp.onreadystatechange = function() {//I think does AJAX stuff when everything is ready.
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					alert(xmlhttp.responseText);
				}
			}
			xmlhttp.send(params);
		});
	}
	else {
		x.innerHTML = "Sorry. We couldn't get it to work.";
	}
}