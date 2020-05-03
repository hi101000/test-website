function hola(){
	alert("Hi!")
}
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x=='Ishan'){
  	window.close()
  }
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
