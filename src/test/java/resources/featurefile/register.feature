Feature: Register
  As user I want to Register into nop commerce website


  @smoke @regression
  Scenario: verifyUserShouldNavigateToRegisterPageSuccessfully
    Given I am on homepage for register
    When  I click on register link
    Then I Should navigate to register page successfully

  @sanity @regression
  Scenario: User should create account successfully
    Given I am on homepage for register
    When  I click on register link
    And  I select gender"Male"
    And  I enter first name"prime"
    And I enter last name"test"
    And I select date of birth "22", "February", "1980"
    And I enter email
    And I enter password "Prime123"
    And I enter confirm password "Prime123"
    And I click on register button
    And I should register completed
    Then I click on continue button

  @regression
  Scenario: verifyThatFirstNameLastNameEmailPasswordAndConfirmPasswordFieldsAreMandatory
    Given I am on homepage for register
    When I click on register link
    And I click on register button
    And I check firstName error message if empty
    And I check lastName error message if empty
    And I check email error message if empty
    And I check password error message if empty
    And I check confirm password error message if empty
