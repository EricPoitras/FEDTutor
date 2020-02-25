var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");
var code = document.getElementById("code").contentWindow.document;
var submit = document.getElementById("submit");
var activity = 0;
var hint = 0;
var request = false;
var elapsed_time = 0;
var startTime, endTime;
var attempt = 1;
var rule = "Undefined";

var btn_export_report = document.getElementById("btn_export_report");

var module = document.getElementById("module");

var activity_1_item = document.getElementById("activity_1_item");
var activity_1_title = document.getElementById("activity_1_title");
var activity_1_content = document.getElementById("activity_1_content");
var activity_1_hint = document.getElementById("activity_1_hint");
var activity_1_success = document.getElementById("activity_1_success");
var activity_1_danger = document.getElementById("activity_1_danger");
var btn_hint_1 = document.getElementById("btn_hint_1");
var activity_1_card_success = document.getElementById("activity_1_card_success");
var activity_1_card_danger = document.getElementById("activity_1_card_danger");

var activity_2_item = document.getElementById("activity_2_item");
var activity_2_title = document.getElementById("activity_2_title");
var activity_2_content = document.getElementById("activity_2_content");
var activity_2_hint = document.getElementById("activity_2_hint");
var activity_2_success = document.getElementById("activity_2_success");
var activity_2_danger = document.getElementById("activity_2_danger");
var btn_hint_2 = document.getElementById("btn_hint_2");
var activity_2_card_success = document.getElementById("activity_2_card_success");
var activity_2_card_danger = document.getElementById("activity_2_card_danger");

var activity_3_item = document.getElementById("activity_3_item");
var activity_3_title = document.getElementById("activity_3_title");
var activity_3_content = document.getElementById("activity_3_content");
var activity_3_hint = document.getElementById("activity_3_hint");
var activity_3_success = document.getElementById("activity_3_success");
var activity_3_danger = document.getElementById("activity_3_danger");
var btn_hint_3 = document.getElementById("btn_hint_3");
var activity_3_card_success = document.getElementById("activity_3_card_success");
var activity_3_card_danger = document.getElementById("activity_3_card_danger");

// Add more activities as necessary...
