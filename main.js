$(document).ready(function() {
	$(".submit-btn").click(function() {
		$(".submitted-results").html("");
		$(":input").each(function(index){
			if($(this).val() == "") {
				$("span").show();
			} else {
            // This will append the information but having some trouble with date and gender
    		$(".submitted-results").append("<p class='display-result-label'>" + $(this).attr("name") + ": </p> <p class='display-result-results'>" + $(this).val() + "</p>"); 
				 $(".puppy-profile-wrapper").css("display", "none");
				 $(".submitted-results-container").css("display", "block");
			}
   		});
	});
});