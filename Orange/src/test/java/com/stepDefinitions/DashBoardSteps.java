package com.stepDefinitions;


import com.pages.DashBoardPage;
import com.pages.EmployeePage;
import com.pages.LoginPage;
import com.utils.BaseClass;
import com.utils.CommonMethod;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DashBoardSteps {
	LoginPage login;
	DashBoardPage board;
	EmployeePage emp;
	
	String firstName;
	String middleName;
	String lastName;
	
	@Given("I have logged into OrangeHRM")
	public void i_have_logged_into_OrangeHRM() {
	    BaseClass.browsers(); 
	    login = new LoginPage();
	    board = new DashBoardPage();
	    emp = new EmployeePage();
	    login.login(BaseClass.prop.getProperty("userName"), BaseClass.prop.getProperty("passWord"));
	    
	}

	@Given("I navigated to the Add Employee Page")
	public void i_navigated_to_the_Add_Employee_Page() {
	    CommonMethod.click(board.pim);
	    CommonMethod.click(board.addEmp);
	    
	}

	@When("I provide {string} and {string} and {string}")
	public void i_provide_and_haq(String firstName, String middleName, String lastName) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		CommonMethod.enterValue(emp.firstName, firstName);
		CommonMethod.enterValue(emp.middleName, middleName);
		CommonMethod.enterValue(emp.lastName, lastName);
	    
	}

	@Then("I successfully added an employee")
	public void i_successfully_added_an_employee() {
		emp.save.click();
	    
	}

	

}
