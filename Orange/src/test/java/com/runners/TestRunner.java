package com.runners;

//import java.io.File;

//import org.junit.AfterClass;
import org.junit.runner.RunWith;

//import com.cucumber.listener.Reporter;
//import com.utils.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources/features"},
				 glue = {"com.stepDefinitions"},
				 dryRun = true,
				 monochrome = true,
				 tags = {"@Login"},
				 plugin = {
						 "pretty",
						 "html:target/html-report",
						   "json:target/json-report.json",
						   "junit:target/junit-xml-report.xml"
							
				}		 
				 
				)
public class TestRunner {
//	
//	@AfterClass
//	 public static void writeExtentReport() {
//	 Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));
//	 }
	

}
 