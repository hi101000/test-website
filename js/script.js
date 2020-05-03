function hola(){
	alert("Hi!");
}
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  document.cookie='username=x; expires=expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  if (x=='Ishan'){
  	window.close();
  }
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
/*function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}*/