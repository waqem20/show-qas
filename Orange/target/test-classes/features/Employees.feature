@Employees
Feature: Employees

	Background:
		Given I have logged into OrangeHRM

  @Smoke
  Scenario Outline: Add Employee
    And I navigated to the Add Employee Page
    When I provide "<firstName>" and "<middleName>" and "<lastName>"
    Then I successfully added an employee

    Examples: 
      | firstName  | middleName | lastName  |
      | waqem 		 |     u 			| haq 			|
      | joe 			 |     joe 		| star    	|
