$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Employees.feature");
formatter.feature({
  "name": "Employees",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Employees"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I navigated to the Add Employee Page",
  "keyword": "And "
});
formatter.step({
  "name": "I provide \"\u003cfirstName\u003e\" and \"\u003cmiddleName\u003e\" and \"\u003clastName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I successfully added an employee",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "middleName",
        "lastName"
      ]
    },
    {
      "cells": [
        "waqem",
        "u",
        "haq"
      ]
    },
    {
      "cells": [
        "joe",
        "joe",
        "star"
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
  "name": "I have logged into OrangeHRM",
  "keyword": "Given "
});
formatter.match({
  "location": "DashBoardSteps.i_have_logged_into_OrangeHRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Employees"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I navigated to the Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "DashBoardSteps.i_navigated_to_the_Add_Employee_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I provide \"waqem\" and \"u\" and \"haq\"",
  "keyword": "When "
});
formatter.match({
  "location": "DashBoardSteps.i_provide_and_haq(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I successfully added an employee",
  "keyword": "Then "
});
formatter.match({
  "location": "DashBoardSteps.i_successfully_added_an_employee()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have logged into OrangeHRM",
  "keyword": "Given "
});
formatter.match({
  "location": "DashBoardSteps.i_have_logged_into_OrangeHRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Employees"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I navigated to the Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "DashBoardSteps.i_navigated_to_the_Add_Employee_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I provide \"joe\" and \"joe\" and \"star\"",
  "keyword": "When "
});
formatter.match({
  "location": "DashBoardSteps.i_provide_and_haq(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I successfully added an employee",
  "keyword": "Then "
});
formatter.match({
  "location": "DashBoardSteps.i_successfully_added_an_employee()"
});
formatter.result({
  "status": "skipped"
});
});