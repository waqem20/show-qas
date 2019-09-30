$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "OrangHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.oranghrm_logo_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Valid login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I enter \"Admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.i_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.i_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Login is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.login_is_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "name": "I see error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "waqem",
        "hello123",
        "Invalid credentials"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "OrangHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.oranghrm_logo_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I enter \"waqem\" and \"hello123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.i_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.i_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.i_see_error_message(String)"
});
formatter.result({
  "status": "skipped"
});
});