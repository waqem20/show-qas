package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.utils.BaseClass;


public class DashBoardPage extends BaseClass{
	
	@FindBy(id="welcome")
	public WebElement welcome;
	
	@FindBy(linkText="PIM")
	public WebElement pim;
	
	@FindBy(id="MP_link")
	public WebElement marketPlace;
	
	@FindBy(linkText="Add Employee")
	public WebElement addEmp;

	public DashBoardPage() {
		PageFactory.initElements(driver, this);
	}
	
	
}
