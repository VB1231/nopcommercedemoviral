#@Login
Feature: Computer Test
  As user I want to login into nop commerce website


  @smoke @regression
  Scenario: verifyUserShouldNavigateToComputerPageSuccessfully
    Given I am on homepage
    When I click on computer tab
    Then I should navigate to computer page successfully

  @sanity @regression
  Scenario:verifyUserShouldNavigateToDesktopsPageSuccessfully
    Given I am on homepage
    When I click on computer tab
    And  I click on desktop tab
    Then I should navigate to desktop page successfully

  @regression
  Scenario: verifyThatUserShouldBuildYourOwnComputerAndAddToCartSuccessfully
    Given I am on homepage
    When I click on computer tab
    And  I click on desktop tab
    And  I select build your own product "Build your own computer"
    And I select following users details

      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]    | Total Commander [+$5.00]   |
    And I click on add to cart button
    Then I should navigate product has been added


