package com.stepDefinitions;

import org.junit.Assert;

//import com.aventstack.extentreports.ExtentTest;
//import com.aventstack.extentreports.GherkinKeyword;
//import com.aventstack.extentreports.gherkin.model.Feature;
//import com.aventstack.extentreports.gherkin.model.Scenario;
import com.listener.ExtentReportListener;
import com.pages.DashBoardPage;
import com.pages.LoginPage;
import com.utils.BaseClass;
import com.utils.CommonMethod;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep extends ExtentReportListener {
	LoginPage login;
	DashBoardPage dashBoard;
	

	@Given("OrangHRM logo is displayed")
	public void oranghrm_logo_is_displayed() throws Exception {
		login = new LoginPage();
		dashBoard = new DashBoardPage();
		BaseClass.browsers();
//	    ExtentTest logInfo = null; 
//	    try {
//	    	test = extent.createTest(Feature.class, "Login feature");
//	    	test = test.createNode(Scenario.class, "Valid login");
//	    	logInfo = test.createNode(new GherkinKeyword("Given"), "oranghrm_logo_is_displayed");
//	    	BaseClass.browsers();
//	    	logInfo.pass("Opened chrome browser");
//	    }catch(AssertionError | Exception e) {
//	    	testStepHandle("FAIL",driver,logInfo,e);
//	    	//Assert.assertTrue(login.logo.isDisplayed());
//	    }
	   
	}

	@When("I enter {string} and {string}")
	public void i_enter_and(String value1, String value2) {
		login = new LoginPage();
		CommonMethod.enterValue(login.username, value1);
	    CommonMethod.enterValue(login.password, value2);
		
//		ExtentTest logInfo = null; 
//	    try {
//	    	logInfo = test.createNode(new GherkinKeyword("When"), "i_enter_and_Admin_admin123");
//	    	CommonMethod.enterValue(login.username, value1);
//		    CommonMethod.enterValue(login.password, value2);
//	    	logInfo.pass("Credentials Pass");
//	    }catch(AssertionError | Exception e) {
//	    	testStepHandle("FAIL",driver,logInfo,e);
//	    }
	    
	}

	@When("I click login button")
	public void i_click_login_button() {
		login = new LoginPage();
		CommonMethod.clickValue(login.click);
		
//		ExtentTest logInfo = null; 
//	    try {
//	    	logInfo = test.createNode(new GherkinKeyword("And"), "i_click_login_button");
//	    	CommonMethod.clickValue(login.click);
//	    	logInfo.pass("Credentials Pass");
//	    }catch(AssertionError | Exception e) {
//	    	testStepHandle("FAIL",driver,logInfo,e);
//	    }		
	}
	@Then("Login is successful")
	public void login_is_successful() {
		dashBoard = new DashBoardPage();
		dashBoard.welcome.getText();
		
		
	}

	@Given("I have enter {string} and {string}")
	public void i_have_enter_and(String v1, String v2) {
		login = new LoginPage();
	    CommonMethod.enterValue(login.username, v1);
	    CommonMethod.enterValue(login.password, v2);
	}

	@Given("I will click login button")
	public void i_will_click_login_button() {
		login = new LoginPage();
		CommonMethod.clickValue(login.click);
	}

	@Then("I see error message {string}")
	public void i_see_error_message(String errMessage) {
		login = new LoginPage();
		String actualError = login.errorMessage.getText();
		Assert.assertEquals(errMessage, actualError);
	}
}
