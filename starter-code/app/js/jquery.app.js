var catObject = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    .done(function(data){
      var array = jQuery.parseJSON(catObject.responseText);
      for (var i = array.length - 1; i >= 0; i--) {
      	$("#cats").append("<li>" + array[i].name + " : " + array[i].note + "</li>");
      }
      return array;
  });

$("form").on("submit", function(){
	event.preventDefault();
	console.log("prevented default");
	var $catName = $("#cat-name").val();
	var $catNote = $("#cat-note").val();

	$.ajax({
  	 type: "POST",
 	 url: "https://ga-cat-rescue.herokuapp.com/api/cats",
 	 data: JSON.stringify({ "name": $catName, "note": $catNote }),
 	 datType: "json"
	}).done(function() {
   	console.log("Data Saved");
  });
});