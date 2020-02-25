// Load data from JSON object

document.addEventListener("DOMContentLoaded", event => {
	initiate_session(); // Updates text content, toggle display, and disables activities
	start(); // Set the start time to calculate elapsed time
});

// Handling Student Responses

submit.addEventListener("click", function() {
	update_livepreview(); // Display the code in the iframe
	end(); // Set the end time to define elapsed time
	store_response(grade_response()); // Stores the results of the response evaluation in JSON object
	start(); // Set the start time again to calculate elapsed time
});

// Tracking Hint Requests

btn_hint_1.addEventListener("click", function() {
	request = true;
});

btn_hint_2.addEventListener("click", function() {
	request = true;
});

btn_hint_3.addEventListener("click", function() {
	request = true;
});

// Add more as necessary...
