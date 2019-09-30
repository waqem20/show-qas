package com.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/test/resources/features"},
				 glue={"com.stepDefinitions"},
				 tags= {"@Employees"},
				 monochrome=true,
				 dryRun=true,
				 plugin = {
						 "pretty",
						 "html:reports/html-report",
						 "json:reports/json-report.json",
						 "junit:reports/junit-xml-report.xml",
						 "rerun:reports/cucumber-reports/rerun.txt"
							
				}		 
)
public class TestEmploeesRunner {

	
}
