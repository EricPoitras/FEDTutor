// Start a new session by loading the data in the user interface
function initiate_session() {
	$("#myModal2").modal("show");
	session_id = Math.round(Math.random() * 1000000000);
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
	try {
		activity_4_title.textContent = data.activities[3].title;
		activity_4_content.innerHTML = data.activities[3].content;
		activity_4_hint.innerHTML = data.activities[3].hint[hint].content;
		activity_4_success.style.display = "none";
		activity_4_danger.style.display = "none";
		activity_4_card_success.style.display = "none";
		activity_4_card_danger.style.display = "none";
	} catch {
		activity_4_item.style.display = "none";
		activity_3_item.style.borderBottom = "solid";
		activity_3_item.style.borderBottomWidth = "1px";
		activity_3_item.style.borderBottomColor = "rgba(0,0,0,.125)";
	}
	try {
		activity_5_title.textContent = data.activities[4].title;
		activity_5_content.innerHTML = data.activities[4].content;
		activity_5_hint.innerHTML = data.activities[4].hint[hint].content;
		activity_5_success.style.display = "none";
		activity_5_danger.style.display = "none";
		activity_5_card_success.style.display = "none";
		activity_5_card_danger.style.display = "none";
	} catch {
		activity_5_item.style.display = "none";
		activity_4_item.style.borderBottom = "solid";
		activity_4_item.style.borderBottomWidth = "1px";
		activity_4_item.style.borderBottomColor = "rgba(0,0,0,.125)";
	}
	try {
		activity_6_title.textContent = data.activities[5].title;
		activity_6_content.innerHTML = data.activities[5].content;
		activity_6_hint.innerHTML = data.activities[5].hint[hint].content;
		activity_6_success.style.display = "none";
		activity_6_danger.style.display = "none";
		activity_6_card_success.style.display = "none";
		activity_6_card_danger.style.display = "none";
	} catch {
		activity_6_item.style.display = "none";
		activity_5_item.style.borderBottom = "solid";
		activity_5_item.style.borderBottomWidth = "1px";
		activity_5_item.style.borderBottomColor = "rgba(0,0,0,.125)";
	}
	try {
		activity_7_title.textContent = data.activities[6].title;
		activity_7_content.innerHTML = data.activities[6].content;
		activity_7_hint.innerHTML = data.activities[6].hint[hint].content;
		activity_7_success.style.display = "none";
		activity_7_danger.style.display = "none";
		activity_7_card_success.style.display = "none";
		activity_7_card_danger.style.display = "none";
	} catch {
		activity_7_item.style.display = "none";
		activity_6_item.style.borderBottom = "solid";
		activity_6_item.style.borderBottomWidth = "1px";
		activity_6_item.style.borderBottomColor = "rgba(0,0,0,.125)";
	}
	try {
		activity_8_title.textContent = data.activities[7].title;
		activity_8_content.innerHTML = data.activities[7].content;
		activity_8_hint.innerHTML = data.activities[7].hint[hint].content;
		activity_8_success.style.display = "none";
		activity_8_danger.style.display = "none";
		activity_8_card_success.style.display = "none";
		activity_8_card_danger.style.display = "none";
	} catch {
		activity_8_item.style.display = "none";
		activity_7_item.style.borderBottom = "solid";
		activity_7_item.style.borderBottomWidth = "1px";
		activity_7_item.style.borderBottomColor = "rgba(0,0,0,.125)";
	}
	try {
		activity_9_title.textContent = data.activities[8].title;
		activity_9_content.innerHTML = data.activities[8].content;
		activity_9_hint.innerHTML = data.activities[8].hint[hint].content;
		activity_9_success.style.display = "none";
		activity_9_danger.style.display = "none";
		activity_9_card_success.style.display = "none";
		activity_9_card_danger.style.display = "none";
	} catch {
		activity_9_item.style.display = "none";
		activity_8_item.style.borderBottom = "solid";
		activity_8_item.style.borderBottomWidth = "1px";
		activity_8_item.style.borderBottomColor = "rgba(0,0,0,.125)";
	}
	try {
		activity_10_title.textContent = data.activities[9].title;
		activity_10_content.innerHTML = data.activities[9].content;
		activity_10_hint.innerHTML = data.activities[9].hint[hint].content;
		activity_10_success.style.display = "none";
		activity_10_danger.style.display = "none";
		activity_10_card_success.style.display = "none";
		activity_10_card_danger.style.display = "none";
	} catch {
		activity_10_item.style.display = "none";
		activity_9_item.style.borderBottom = "solid";
		activity_9_item.style.borderBottomWidth = "1px";
		activity_9_item.style.borderBottomColor = "rgba(0,0,0,.125)";
	}
	try {
		activity_11_title.textContent = data.activities[10].title;
		activity_11_content.innerHTML = data.activities[10].content;
		activity_11_hint.innerHTML = data.activities[10].hint[hint].content;
		activity_11_success.style.display = "none";
		activity_11_danger.style.display = "none";
		activity_11_card_success.style.display = "none";
		activity_11_card_danger.style.display = "none";
	} catch {
		//activity_11_item.style.display = "none";
		activity_10_item.style.borderBottom = "solid";
		activity_10_item.style.borderBottomWidth = "1px";
		activity_10_item.style.borderBottomColor = "rgba(0,0,0,.125)";
	}
	// Add more activities as necessary ...
}

// Display code in the iframe to preview
function update_livepreview() {
	code.open();
	code.writeln(
		"<!DOCTYPE html><head><style>" + css.value + "</style>" + "<title>W3C Validation</title></head><body>" + html.value + "<script>" + js.value + "</script></body>"
	);
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
		activity_1_card_danger.innerHTML = rule + "<br>" + w3c_validation;
		activity_1_card_success.style.display = "none";
	} else if (activity == 1) {
		activity_2_success.style.display = "none";
		activity_2_danger.style.display = "inline";
		activity_2_card_danger.style.display = "block";
		activity_2_card_danger.innerHTML = rule + "<br>" + w3c_validation;
		activity_2_card_success.style.display = "none";
	} else if (activity == 2) {
		activity_3_success.style.display = "none";
		activity_3_danger.style.display = "inline";
		activity_3_card_danger.style.display = "block";
		activity_3_card_danger.innerHTML = rule + "<br>" + w3c_validation;
		activity_3_card_success.style.display = "none";
	} else if (activity == 3) {
		activity_4_success.style.display = "none";
		activity_4_danger.style.display = "inline";
		activity_4_card_danger.style.display = "block";
		activity_4_card_danger.innerHTML = rule + "<br>" + w3c_validation;
		activity_4_card_success.style.display = "none";
	} else if (activity == 4) {
		activity_5_success.style.display = "none";
		activity_5_danger.style.display = "inline";
		activity_5_card_danger.style.display = "block";
		activity_5_card_danger.innerHTML = rule + "<br>" + w3c_validation;
		activity_5_card_success.style.display = "none";
	} else if (activity == 5) {
		activity_6_success.style.display = "none";
		activity_6_danger.style.display = "inline";
		activity_6_card_danger.style.display = "block";
		activity_6_card_danger.innerHTML = rule + "<br>" + w3c_validation;
		activity_6_card_success.style.display = "none";
	} else if (activity == 6) {
		activity_7_success.style.display = "none";
		activity_7_danger.style.display = "inline";
		activity_7_card_danger.style.display = "block";
		activity_7_card_danger.innerHTML = rule + "<br>" + w3c_validation;
		activity_7_card_success.style.display = "none";
	} else if (activity == 7) {
		activity_8_success.style.display = "none";
		activity_8_danger.style.display = "inline";
		activity_8_card_danger.style.display = "block";
		activity_8_card_danger.innerHTML = rule + "<br>" + w3c_validation;
		activity_8_card_success.style.display = "none";
	} else if (activity == 8) {
		activity_9_success.style.display = "none";
		activity_9_danger.style.display = "inline";
		activity_9_card_danger.style.display = "block";
		activity_9_card_danger.innerHTML = rule + "<br>" + w3c_validation;
		activity_9_card_success.style.display = "none";
	} else if (activity == 9) {
		activity_10_success.style.display = "none";
		activity_10_danger.style.display = "inline";
		activity_10_card_danger.style.display = "block";
		activity_10_card_danger.innerHTML = rule + "<br>" + w3c_validation;
		activity_10_card_success.style.display = "none";
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
		activity_1_card_success.innerHTML = rule;
		activity_1_card_danger.style.display = "none";
		activity_2_title.removeAttribute("disabled");
	} else if (activity == 2) {
		activity_2_success.style.display = "inline";
		activity_2_danger.style.display = "none";
		activity_2_card_success.style.display = "block";
		activity_2_card_success.innerHTML = rule;
		activity_2_card_danger.style.display = "none";
		activity_3_title.removeAttribute("disabled");
	} else if (activity == 3) {
		activity_3_success.style.display = "inline";
		activity_3_danger.style.display = "none";
		activity_3_card_success.style.display = "block";
		activity_3_card_success.innerHTML = rule;
		activity_3_card_danger.style.display = "none";
		activity_4_title.removeAttribute("disabled");
	} else if (activity == 4) {
		activity_4_success.style.display = "inline";
		activity_4_danger.style.display = "none";
		activity_4_card_success.style.display = "block";
		activity_4_card_success.innerHTML = rule;
		activity_4_card_danger.style.display = "none";
		activity_5_title.removeAttribute("disabled");
	} else if (activity == 5) {
		activity_5_success.style.display = "inline";
		activity_5_danger.style.display = "none";
		activity_5_card_success.style.display = "block";
		activity_5_card_success.innerHTML = rule;
		activity_5_card_danger.style.display = "none";
		activity_6_title.removeAttribute("disabled");
	} else if (activity == 6) {
		activity_6_success.style.display = "inline";
		activity_6_danger.style.display = "none";
		activity_6_card_success.style.display = "block";
		activity_6_card_success.innerHTML = rule;
		activity_6_card_danger.style.display = "none";
		activity_7_title.removeAttribute("disabled");
	} else if (activity == 7) {
		activity_7_success.style.display = "inline";
		activity_7_danger.style.display = "none";
		activity_7_card_success.style.display = "block";
		activity_7_card_success.innerHTML = rule;
		activity_7_card_danger.style.display = "none";
		activity_8_title.removeAttribute("disabled");
	} else if (activity == 8) {
		activity_8_success.style.display = "inline";
		activity_8_danger.style.display = "none";
		activity_8_card_success.style.display = "block";
		activity_8_card_success.innerHTML = rule;
		activity_8_card_danger.style.display = "none";
		activity_9_title.removeAttribute("disabled");
	} else if (activity == 9) {
		activity_9_success.style.display = "inline";
		activity_9_danger.style.display = "none";
		activity_9_card_success.style.display = "block";
		activity_9_card_success.innerHTML = rule;
		activity_9_card_danger.style.display = "none";
		activity_10_title.removeAttribute("disabled");
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
		version: "FEDTutor_v1.0_build02/28/20",
		session: session_id,
		username: username,
		gender: gender,
		age: age,
		degree: degree,
		university: university,
		gpa: gpa,
		activity: activity,
		html: html.value,
		css: css.value,
		js: js.value,
		hint_id: hint,
		request: request,
		evaluation: grade_response,
		rule: rule,
		w3c_validation: w3c_validation,
		elapsed_time: elapsed_time,
		attempt: attempt
	};
	this.data.responses.push(myObj);
	console.log(this.data);
	var urladress =
		"https://docs.google.com/forms/d/e/1FAIpQLScSxxD6AxEzekTYdPjvUP0TitGSvt6pRRrK-eZL0fP0g9QN9A/formResponse?" +
		"entry.1792772475=" +
		String(myObj.version) +
		"&entry.1894837576=" +
		String(myObj.session) +
		"&entry.1703769330=" +
		String(myObj.username) +
		"&entry.899979325=" +
		String(myObj.gender) +
		"&entry.1897082137=" +
		String(myObj.age) +
		"&entry.529363251=" +
		String(myObj.degree) +
		"&entry.1488014403=" +
		String(myObj.university) +
		"&entry.997300416=" +
		String(myObj.gpa) +
		"&entry.792179151=" +
		String(myObj.activity) +
		"&entry.1769579832=" +
		String(myObj.html) +
		"&entry.194875640=" +
		String(myObj.css) +
		"&entry.895369426=" +
		String(myObj.js) +
		"&entry.345947465=" +
		String(myObj.hint_id) +
		"&entry.470737931=" +
		String(myObj.request) +
		"&entry.1352313708=" +
		String(myObj.evaluation) +
		"&entry.853863687=" +
		String(myObj.rule) +
		"&entry.293645210=" +
		String(myObj.w3c_validation) +
		"&entry.1705190915=" +
		String(myObj.elapsed_time) +
		"&entry.1584769110=" +
		String(myObj.attempt) +
		"&submit=Submit";
	fetch(urladress, {
		method: "post",
		mode: "no-cors",
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(response => response.json())
		.then(data => console.log("data is", data))
		.catch(error => console.log("error is", error));
	var JSONdata = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data));
	btn_export_report.setAttribute("href", "data:" + JSONdata);
	btn_export_report.setAttribute("download", "JSONdata.json");

	update_activity(grade_response);
}

// Rules to evaluate responses - return either correct or incorrect for response evaluation
function grade_response() {
	var parsed_html = html.value
		.toString()
		.replace(/ /g, "")
		.replace(/"/g, "'");
	console.log(parsed_html);
	if (parsed_html.includes(data.activities[activity].solution[0].criteria) == false) {
		rule = "<strong>Tutor Feedback</strong><br>Opening tag is not mentioned";
		//console.log("Opening tag is not mentioned");
		return "incorrect";
	} else if (parsed_html.includes(data.activities[activity].solution[1].criteria) == false) {
		rule = "<strong>Tutor Feedback</strong><br>Closing tag is not mentioned";
		//console.log("Closing tag is not mentioned");
		return "incorrect";
	} else if (parsed_html.indexOf(data.activities[activity].solution[0].criteria) > parsed_html.lastIndexOf(data.activities[activity].solution[1].criteria)) {
		rule = "<strong>Tutor Feedback</strong><br>Opening tag is mentioned after the closing tag";
		//console.log("Opening tag is not mentioned prior to closing tag");
		return "incorrect";
	} else {
		rule = "<strong>Tutor Feedback</strong><br>Opening tag is mentioned before the closing tag";
		return "correct";
	}
}

async function HTML_W3_Validation() {
	var body_post = String(
		"<!DOCTYPE html><head><style>" + css.value + "</style>" + "<title>W3C Validation</title></head><body>" + html.value + "<script>" + js.value + "</script></body>"
	);
	await fetch("https://cors-anywhere.herokuapp.com/http://html5.validator.nu/?out=json", {
		method: "post",
		headers: {
			"Content-Type": "text/html; charset=UTF-8"
		},
		body: body_post
	})
		.then(response => response.json())
		.then(function(data) {
			//https://validator.w3.org/docs/errors.html
			console.log(data);
			w3c_validation = "<br><strong>W3C Markup Validation Service</strong><br>";
			for (var i = 0; i < data.messages.length; i++) {
				var number = i + 1;
				w3c_validation +=
					"<span> " +
					number +
					". " +
					String(data.messages[i].message)
						.replace(/</g, "<span><</span>")
						.replace(/"/g, "'") +
					" : </span><br>" +
					"<div contenteditable>" +
					String(data.messages[i].extract)
						.replace(/</g, "<span><</span>")
						.replace(/"/g, "'") +
					"</div>" +
					"</br>";
				//Do something
			}
			//console.log(w3c_validation);
			store_response(grade_response());
		})
		.catch(function(error) {
			w3c_validation = "<br><strong>W3C Markup Validation Service</strong>";
			console.log("error is", error);
			store_response(grade_response());
		});
}
