package com.listener;

import org.openqa.selenium.WebDriver;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.markuputils.ExtentColor;
import com.aventstack.extentreports.markuputils.MarkupHelper;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

public class ExtentReportListener {
	
	public static ExtentHtmlReporter htmlReporter = null;
	public static ExtentReports extent = null;
	public static ExtentTest test = null;
	public static WebDriver driver;
	
	public static ExtentReports setUp() {
		htmlReporter=new ExtentHtmlReporter(System.getProperty("user.dir")+"./reports/cucumber-reports/report.html");
		
		htmlReporter.config().setDocumentTitle("Automation Report");//Title of the report
		htmlReporter.config().setReportName("Functional Report");//Name of the report
		htmlReporter.config().setTheme(Theme.DARK);//Or Standard ....color
		
		htmlReporter.start();
		extent = new ExtentReports();
		extent.attachReporter(htmlReporter);
		
		extent.setSystemInfo("Hostname", "LocalHost");
		extent.setSystemInfo("Operating System", System.getProperty("os.name"));
		extent.setSystemInfo("User Name", "Waqem");
		extent.setSystemInfo("Browser", "Chrome");
		
		return extent;
	}
	
	public static void testStepHandle(String testStatus, WebDriver driver, ExtentTest extentTest, Throwable throwable) {
		switch(testStatus) {
		case "FAIL":
			extentTest.fail(MarkupHelper.createLabel("Test Case is Failed", ExtentColor.RED));
			extentTest.error(throwable.fillInStackTrace());
			
			if(driver != null) {
				driver.quit();
			}
		break;
		
		case "PASS":
			extentTest.pass(MarkupHelper.createLabel("Test Case is Passed", ExtentColor.GREEN));
			break;
		
		default:
			break;
		}
	}

}
