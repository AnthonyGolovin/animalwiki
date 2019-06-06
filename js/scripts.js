$(document).ready(function() {
var animals;

$("select#animals").change(function(){
  animals = $("select#animals").val();
  if (animals ==1) {
    $(".Rpanda").show();
    $(".Lion").hide();
    $(".Gbear").hide();
  } else if (animals ==2) {
    $(".Lion").show();
    $(".Rpanda").hide();
    $(".Gbear").hide();
}   else if (animals ==3) {
    $(".Gbear").show();
    $(".Rpanda").hide();
    $(".Lion").hide();
}
});
});
