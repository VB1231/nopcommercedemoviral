#@Login
Feature: Login Test
  As user I want to login into nop commerce website

  @smoke @regression
  Scenario: User should navigate to login page successfully
    Given I am on homepage for login
    When I click on login link from homepage
    Then I should see welcome sign in

  @sanity @regression
  Scenario: User should login successfully with valid credentials
    Given I am on homepage for login
    When I click on login link from homepage
    And I enter email "primeeight@gmail.com"
    And I enter password "abc123"
    And I click on login button
    Then I should navigate to login successfully from homepage

   @regression
  Scenario Outline: Verify the error message with invalid credentials
     Given I am on homepage for login
     When I click on login link from homepage
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message "<errorMessage>"
    Examples:
      | email              | password | errorMessage                                                                                |
      | abcd123@gmail.com  | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | xyz123@gmail.com   | abc123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | adfafasd@gmail.com | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
@regression
    Scenario: verifyThatUserShouldLogInSuccessFullyWithValidCredentials log out display
      Given I am on homepage for login
      When I click on login link from homepage
      And I enter registered email
      And  I enter password "Prime123"
      And I click on login button
      And I click on log out button
      Then I check login link displayed
