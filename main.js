$(document).ready(function() {
	$(".submit-btn").click(function() {
		$(".submitted-results").html("");
		$(":input").each(function(index){
			if($(this).val() == "") {
				$("span").show();
			} else {
    		$(".submitted-results").append("<p>" + $(this).attr("name") + ": </p> <p>" + $(this).val() + "</p>"); 
				// $(".puppy-profile-wrapper").css("display", "none");
				// $(".submitted-results-container").css("display", "block");
			}
   		});
	});
});