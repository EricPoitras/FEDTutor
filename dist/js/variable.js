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
var w3c_validation = "";

var session_id = 0;
var username = "";
var gender = "";
var age = "";
var degree = "";
var university = "";
var gpa = "";

var input_username = document.getElementById("input_username");
var gender_Radios1 = document.getElementById("gender_Radios1");
var gender_Radios2 = document.getElementById("gender_Radios2");
var gender_Radios3 = document.getElementById("gender_Radios3");
var gender_Radios4 = document.getElementById("gender_Radios4");
var gender_Radios5 = document.getElementById("gender_Radios5");
var input_age = document.getElementById("input_age");
var input_degree = document.getElementById("input_degree");
var input_university = document.getElementById("input_university");
var input_gpa = document.getElementById("input_gpa");

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

var activity_4_item = document.getElementById("activity_4_item");
var activity_4_title = document.getElementById("activity_4_title");
var activity_4_content = document.getElementById("activity_4_content");
var activity_4_hint = document.getElementById("activity_4_hint");
var activity_4_success = document.getElementById("activity_4_success");
var activity_4_danger = document.getElementById("activity_4_danger");
var btn_hint_4 = document.getElementById("btn_hint_4");
var activity_4_card_success = document.getElementById("activity_4_card_success");
var activity_4_card_danger = document.getElementById("activity_4_card_danger");

var activity_5_item = document.getElementById("activity_5_item");
var activity_5_title = document.getElementById("activity_5_title");
var activity_5_content = document.getElementById("activity_5_content");
var activity_5_hint = document.getElementById("activity_5_hint");
var activity_5_success = document.getElementById("activity_5_success");
var activity_5_danger = document.getElementById("activity_5_danger");
var btn_hint_5 = document.getElementById("btn_hint_5");
var activity_5_card_success = document.getElementById("activity_5_card_success");
var activity_5_card_danger = document.getElementById("activity_5_card_danger");

var activity_6_item = document.getElementById("activity_6_item");
var activity_6_title = document.getElementById("activity_6_title");
var activity_6_content = document.getElementById("activity_6_content");
var activity_6_hint = document.getElementById("activity_6_hint");
var activity_6_success = document.getElementById("activity_6_success");
var activity_6_danger = document.getElementById("activity_6_danger");
var btn_hint_6 = document.getElementById("btn_hint_6");
var activity_6_card_success = document.getElementById("activity_6_card_success");
var activity_6_card_danger = document.getElementById("activity_6_card_danger");

var activity_7_item = document.getElementById("activity_7_item");
var activity_7_title = document.getElementById("activity_7_title");
var activity_7_content = document.getElementById("activity_7_content");
var activity_7_hint = document.getElementById("activity_7_hint");
var activity_7_success = document.getElementById("activity_7_success");
var activity_7_danger = document.getElementById("activity_7_danger");
var btn_hint_7 = document.getElementById("btn_hint_7");
var activity_7_card_success = document.getElementById("activity_7_card_success");
var activity_7_card_danger = document.getElementById("activity_7_card_danger");

var activity_8_item = document.getElementById("activity_8_item");
var activity_8_title = document.getElementById("activity_8_title");
var activity_8_content = document.getElementById("activity_8_content");
var activity_8_hint = document.getElementById("activity_8_hint");
var activity_8_success = document.getElementById("activity_8_success");
var activity_8_danger = document.getElementById("activity_8_danger");
var btn_hint_8 = document.getElementById("btn_hint_8");
var activity_8_card_success = document.getElementById("activity_8_card_success");
var activity_8_card_danger = document.getElementById("activity_8_card_danger");

var activity_9_item = document.getElementById("activity_9_item");
var activity_9_title = document.getElementById("activity_9_title");
var activity_9_content = document.getElementById("activity_9_content");
var activity_9_hint = document.getElementById("activity_9_hint");
var activity_9_success = document.getElementById("activity_9_success");
var activity_9_danger = document.getElementById("activity_9_danger");
var btn_hint_9 = document.getElementById("btn_hint_9");
var activity_9_card_success = document.getElementById("activity_9_card_success");
var activity_9_card_danger = document.getElementById("activity_9_card_danger");

var activity_10_item = document.getElementById("activity_10_item");
var activity_10_title = document.getElementById("activity_10_title");
var activity_10_content = document.getElementById("activity_10_content");
var activity_10_hint = document.getElementById("activity_10_hint");
var activity_10_success = document.getElementById("activity_10_success");
var activity_10_danger = document.getElementById("activity_10_danger");
var btn_hint_10 = document.getElementById("btn_hint_10");
var activity_10_card_success = document.getElementById("activity_10_card_success");
var activity_10_card_danger = document.getElementById("activity_10_card_danger");
// Add more activities as necessary...