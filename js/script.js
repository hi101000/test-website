function hola(){
	alert('Im coming for you!')
}
<script>
function myFunction() {
  var x = document.getElementById("frm1");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  if (text!=Ishan Roychowdhury){
  	document.write('Haha! nice try theif')
  	window.close()
  }
  document.getElementById("demo").innerHTML = text;
}
</script>