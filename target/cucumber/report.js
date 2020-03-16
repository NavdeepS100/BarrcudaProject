$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OneDriveBarracudaAssignement.feature");
formatter.feature({
  "line": 1,
  "name": "Search Job in Proquest Application",
  "description": "",
  "id": "search-job-in-proquest-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search Job on Proquest Webpage.",
  "description": "",
  "id": "search-job-in-proquest-application;search-job-on-proquest-webpage.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to \"\u003curl\u003e\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter\"\u003cemail\u003e\" and \"\u003cpassword\u003e\" on OneDrive.",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on signinButton",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user validate the Page.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on upload button and click on file.",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user upload file from drive",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "search-job-in-proquest-application;search-job-on-proquest-webpage.;",
  "rows": [
    {
      "cells": [
        "url",
        "email",
        "password"
      ],
      "line": 13,
      "id": "search-job-in-proquest-application;search-job-on-proquest-webpage.;;1"
    },
    {
      "cells": [
        "https://onedrive.live.com/about/en-us/signin/",
        "Navdeepsingh100@gmail.com",
        "Sahilsamridhi!00"
      ],
      "line": 14,
      "id": "search-job-in-proquest-application;search-job-on-proquest-webpage.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5790893600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search Job on Proquest Webpage.",
  "description": "",
  "id": "search-job-in-proquest-application;search-job-on-proquest-webpage.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to \"https://onedrive.live.com/about/en-us/signin/\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter\"Navdeepsingh100@gmail.com\" and \"Sahilsamridhi!00\" on OneDrive.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on signinButton",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user validate the Page.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on upload button and click on file.",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user upload file from drive",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://onedrive.live.com/about/en-us/signin/",
      "offset": 19
    }
  ],
  "location": "OneDriveLoginPage.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 1525499200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Navdeepsingh100@gmail.com",
      "offset": 11
    },
    {
      "val": "Sahilsamridhi!00",
      "offset": 43
    }
  ],
  "location": "OneDriveLoginPage.user_enter_and_on_OneDrive(String,String)"
});
formatter.result({
  "duration": 1970548300,
  "status": "passed"
});
formatter.match({
  "location": "OneDriveLoginPage.user_click_on_signinButton()"
});
formatter.result({
  "duration": 12581731299,
  "status": "passed"
});
formatter.match({
  "location": "OneDriveLoginPage.user_validate_the_Page()"
});
formatter.result({
  "duration": 8879001,
  "status": "passed"
});
formatter.match({
  "location": "OneDriveLoginPage.user_click_on_upload_button_and_click_on_file()"
});
formatter.result({
  "duration": 10316233399,
  "status": "passed"
});
formatter.match({
  "location": "OneDriveLoginPage.user_upload_file_from_drive()"
});
formatter.result({
  "duration": 56600,
  "status": "passed"
});
formatter.after({
  "duration": 742539900,
  "status": "passed"
});
});