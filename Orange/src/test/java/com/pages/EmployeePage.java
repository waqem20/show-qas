package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.utils.BaseClass;

public class EmployeePage extends BaseClass{
	
	@FindBy(id="firstName")
	public WebElement firstName;
	
	@FindBy(id="middleName")
	public WebElement middleName;
	
	@FindBy(id="lastName")
	public WebElement lastName;
	
	@FindBy(id="employeeId")
	public WebElement employeeId;
	
	@FindBy(id="btnSave")
	public WebElement save;
	
	public EmployeePage() {
		PageFactory.initElements(driver, this);
	}
}
