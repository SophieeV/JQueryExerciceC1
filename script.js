$(document).ready(function(){
  var countClic = 0;
  $("#b1").click(function(){count++;
      $("#number").text("nombre de clics: " + countClic);
  });
});
