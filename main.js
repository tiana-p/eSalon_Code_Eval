$(document).ready(function () {
	// Only allows one option to be selected for gender
	$(".gender-radio:checkbox").on('click', function () {
		var $genderCheckBox = $(this);
		if ($genderCheckBox.is(":checked")) {
			var group = ".gender-radio:checkbox[name='" + $genderCheckBox.attr("name") + "']";
			$(group).prop("checked", false);
			$genderCheckBox.prop("checked", true);
		} else {
			$genderCheckBox.prop("checked", false);
		}
	});

	$(".submit-btn").click(function () {
		$(":input").each(function (index) {
			if ($(this).val() == "") {
				$("span").show();
			} else {
				// This will append the information but having some trouble with date and gender
				var submittedName = $("#form-enter-name").val();
				var submittedDOB = $("#month").val() + "/" + $("#day").val() + "/" + $("#year").val();
				var submittedGender = $('input[name=gender]:checked').val();
				var submittedMiscNotes = $("#miscNotes").val();

				$('#results-name').text(submittedName);
				$('#results-dob').text(submittedDOB);
				$('#results-gender').text(submittedGender);
				$('#results-misc').text(submittedMiscNotes);

				// $(".submitted-results").append("<p class='display-result-label'>" + $(this).attr("name") + ": </p> <p class='display-result-results'>" + $(this).val() + "</p>"); 
				$(".puppy-profile-wrapper").css("display", "none");
				$(".submitted-results-container").css("display", "block");
			}
		});
	});
});