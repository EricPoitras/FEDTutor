// Load data from JSON object

document.addEventListener("DOMContentLoaded", event => {
	initiate_session(); // Updates text content, toggle display, and disables activities
	start(); // Set the start time to calculate elapsed time
});

// Handling Student Responses

submit.addEventListener("click", function() {
	update_livepreview(); // Display the code in the iframe
	end(); // Set the end time to define elapsed time
	HTML_W3_Validation();
	start(); // Set the start time again to calculate elapsed time
});

input_username.addEventListener("keyup", function() {
	username = input_username.value;
});

gender_Radios1.addEventListener("change", function() {
	gender = gender_Radios1.value;
});

gender_Radios2.addEventListener("change", function() {
	gender = gender_Radios2.value;
});

gender_Radios3.addEventListener("change", function() {
	gender = gender_Radios3.value;
});

gender_Radios4.addEventListener("change", function() {
	gender = gender_Radios4.value;
});

gender_Radios5.addEventListener("change", function() {
	gender = gender_Radios5.value;
});

input_age.addEventListener("keyup", function() {
	age = input_age.value;
});

input_degree.addEventListener("keyup", function() {
	degree = input_degree.value;
});

input_university.addEventListener("keyup", function() {
	university = input_university.value;
});

input_gpa.addEventListener("keyup", function() {
	gpa = input_gpa.value;
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

btn_hint_4.addEventListener("click", function() {
	request = true;
});

btn_hint_5.addEventListener("click", function() {
	request = true;
});

btn_hint_6.addEventListener("click", function() {
	request = true;
});

btn_hint_7.addEventListener("click", function() {
	request = true;
});

btn_hint_8.addEventListener("click", function() {
	request = true;
});

btn_hint_9.addEventListener("click", function() {
	request = true;
});

btn_hint_10.addEventListener("click", function() {
	request = true;
});

// Add more as necessary...

activity_1_reference.addEventListener("click", function() {
	reference = true;
});

activity_2_reference.addEventListener("click", function() {
	reference = true;
});

activity_3_reference.addEventListener("click", function() {
	reference = true;
});

activity_4_reference.addEventListener("click", function() {
	reference = true;
});

activity_5_reference.addEventListener("click", function() {
	reference = true;
});

activity_6_reference.addEventListener("click", function() {
	reference = true;
});

activity_7_reference.addEventListener("click", function() {
	reference = true;
});

activity_8_reference.addEventListener("click", function() {
	reference = true;
});

activity_9_reference.addEventListener("click", function() {
	reference = true;
});

activity_10_reference.addEventListener("click", function() {
	reference = true;
});

// Add more if necessary...

btn_solution_1.addEventListener("click", function(){
	solution = true;
});

btn_solution_2.addEventListener("click", function(){
	solution = true;
});

btn_solution_3.addEventListener("click", function(){
	solution = true;
});

btn_solution_4.addEventListener("click", function(){
	solution = true;
});

btn_solution_5.addEventListener("click", function(){
	solution = true;
});

btn_solution_6.addEventListener("click", function(){
	solution = true;
});

btn_solution_7.addEventListener("click", function(){
	solution = true;
});

btn_solution_8.addEventListener("click", function(){
	solution = true;
});

btn_solution_9.addEventListener("click", function(){
	solution = true;
});

btn_solution_10.addEventListener("click", function(){
	solution = true;
});
