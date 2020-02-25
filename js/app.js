// Start a new session by loading the data in the user interface
function initiate_session() {
	module.textContent = data.module.type; // Update module title
	// Attempts to load data in each activity and toggles activity list items if data is unavailable
	try {
		activity_1_title.textContent = data.activities[0].title;
		activity_1_content.innerHTML = data.activities[0].content;
		activity_1_hint.innerHTML = data.activities[0].hint[hint].content;
		activity_1_success.style.display = "none";
		activity_1_danger.style.display = "none";
		activity_1_card_success.style.display = "none";
		activity_1_card_danger.style.display = "none";
	} catch {
		activity_1_item.style.display = "none";
	}
	try {
		activity_2_title.textContent = data.activities[1].title;
		activity_2_content.innerHTML = data.activities[1].content;
		activity_2_hint.innerHTML = data.activities[1].hint[hint].content;
		activity_2_success.style.display = "none";
		activity_2_danger.style.display = "none";
		activity_2_card_success.style.display = "none";
		activity_2_card_danger.style.display = "none";
	} catch {
		activity_2_item.style.display = "none";
		activity_1_item.style.borderBottom = "solid";
		activity_1_item.style.borderBottomWidth = "1px";
		activity_1_item.style.borderBottomColor = "rgba(0,0,0,.125)";
	}
	try {
		activity_3_title.textContent = data.activities[2].title;
		activity_3_content.innerHTML = data.activities[2].content;
		activity_3_hint.innerHTML = data.activities[2].hint[hint].content;
		activity_3_success.style.display = "none";
		activity_3_danger.style.display = "none";
		activity_3_card_success.style.display = "none";
		activity_3_card_danger.style.display = "none";
	} catch {
		activity_3_item.style.display = "none";
		activity_2_item.style.borderBottom = "solid";
		activity_2_item.style.borderBottomWidth = "1px";
		activity_2_item.style.borderBottomColor = "rgba(0,0,0,.125)";
	}
	// Add more activities as necessary ...
}

// Display code in the iframe to preview
function update_livepreview() {
	code.open();
	code.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>");
	code.close();
}

// Calculate elapsed time for each activity - start and end time
function start() {
	startTime = new Date();
}

function end() {
	endTime = new Date();
	var timeDiff = endTime - startTime; //in ms
	// strip the ms
	timeDiff /= 1000;

	// get seconds
	var seconds = Math.round(timeDiff);
	elapsed_time = seconds;
}

// Close the session
function close_activity() {
	if (activity >= this.data.activities.length) {
		submit.disabled = true;
		$("#myModal").modal("show");
	}
}

// Updates the user interface by showing failure for current activity
function decrement_activity() {
	if (activity == 0) {
		activity_1_success.style.display = "none";
		activity_1_danger.style.display = "inline";
		activity_1_card_danger.style.display = "block";
		activity_1_card_danger.textContent = rule;
		activity_1_card_success.style.display = "none";
	} else if (activity == 1) {
		activity_2_success.style.display = "none";
		activity_2_danger.style.display = "inline";
		activity_2_card_danger.style.display = "block";
		activity_2_card_danger.textContent = rule;
		activity_2_card_success.style.display = "none";
	} else if (activity == 2) {
		activity_3_success.style.display = "none";
		activity_3_danger.style.display = "inline";
		activity_3_card_danger.style.display = "block";
		activity_3_card_danger.textContent = rule;
		activity_3_card_success.style.display = "none";
	} else {
	}
}

// Updates the user interface by showing progress for previous activity, and toggling the next one
function increment_activity() {
	activity = activity + 1;

	if (activity == 1) {
		activity_1_success.style.display = "inline";
		activity_1_danger.style.display = "none";
		activity_1_card_success.style.display = "block";
		activity_1_card_success.textContent = rule;
		activity_1_card_danger.style.display = "none";
		activity_2_title.removeAttribute("disabled");
	} else if (activity == 2) {
		activity_2_success.style.display = "inline";
		activity_2_danger.style.display = "none";
		activity_2_card_success.style.display = "block";
		activity_2_card_success.textContent = rule;
		activity_2_card_danger.style.display = "none";
		activity_3_title.removeAttribute("disabled");
	} else if (activity == 3) {
		activity_3_success.style.display = "inline";
		activity_3_danger.style.display = "none";
		activity_3_card_success.style.display = "block";
		activity_3_card_success.textContent = rule;
		activity_3_card_danger.style.display = "none";
		//activity_4_title.removeAttribute("disabled");
	} else {
	}

	close_activity();
	// Add more activities as necessary...
}

// Updates the activity by resetting variable values & Call increment_activity function
function update_activity(grade_response) {
	if (grade_response == "correct") {
		// Reset all problem variables
		attempt = 1;
		request = false;

		increment_activity(); // Show success for previous activity, show next one in user interface
	} else {
		// Reset all problem variables
		attempt = attempt + 1;

		decrement_activity(); // Show failure for current activity
	}
}

// Store the response variables in JSON and update download project file & Call update_activity function
function store_response(grade_response) {
	var myObj = {
		activity: activity,
		html: html.value,
		css: css.value,
		js: js.value,
		hint_id: hint,
		request: request,
		evaluation: grade_response,
		rule: rule,
		elapsed_time: elapsed_time,
		attempt: attempt
	};
	this.data.responses.push(myObj);
	console.log(this.data);
	var JSONdata = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data));
	btn_export_report.setAttribute("href", "data:" + JSONdata);
	btn_export_report.setAttribute("download", "JSONdata.json");

	update_activity(grade_response);
}

// Rules to evaluate responses - return either correct or incorrect for response evaluation
function grade_response() {
	if (html.value.toString().includes(data.activities[activity].solution[0].criteria) == false) {
		rule = "Opening tag is not mentioned";
		//console.log("Opening tag is not mentioned");
		return "incorrect";
	} else if (html.value.toString().includes(data.activities[activity].solution[1].criteria) == false) {
		rule = "Closing tag is not mentioned";
		//console.log("Closing tag is not mentioned");
		return "incorrect";
	} else if (html.value.toString().indexOf(data.activities[activity].solution[0].criteria) > html.value.toString().indexOf(data.activities[activity].solution[1].criteria)) {
		rule = "Opening tag is mentioned after the closing tag";
		//console.log("Opening tag is not mentioned prior to closing tag");
		return "incorrect";
	} else {
		rule = "Opening tag is mentioned before the closing tag";
		return "correct";
	}
}
