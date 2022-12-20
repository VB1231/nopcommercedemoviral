package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginSteps {

    @Given("^I am on homepage for login$")
    public void iAmOnHomepageForLogin() {
    }

    @When("^I click on login link from homepage$")
    public void iClickOnLoginLinkFromHomepage() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should see welcome sign in$")
    public void iShouldSeeWelcomeSignIn() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().getWelcomeText();
        Assert.assertEquals("Login page not displayed", expectedMessage, actualMessage);
    }

    @Then("^I should navigate to login successfully from homepage$")
    public void iShouldNavigateToLoginSuccessfullyFromHomepage() {
        String expectedErrorMessage = "Login was unsuccessful. Please correct the errors and try again.\n"
                + "No customer account found";
        String actualErrorMessage = new LoginPage().getErrorMessage();
        org.testng.Assert.assertEquals(expectedErrorMessage, actualErrorMessage, "Error message not displayed");

    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new LoginPage().enterEmailId(email);

    }


    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should navigate to login successfully$")
    public void iShouldNavigateToLoginSuccessfully() {
        String expectedErrorMessage = "Login was unsuccessful. Please correct the errors and try again.\n"
                + "No customer account found";
        String actualErrorMessage = new LoginPage().getErrorMessage();
        org.testng.Assert.assertEquals(expectedErrorMessage, actualErrorMessage, "Error message not displayed");
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage) {
        Assert.assertEquals("Error message not displayed", errorMessage, new LoginPage().getErrorMessage());
    }


    @And("^I click on log out button$")
    public void iClickOnLogOutButton() {
        new HomePage().clickOnLogOutLink();
    }

    @Then("^I check login link displayed$")
    public void iCheckLoginLinkDisplayed() {
        org.testng.Assert.assertTrue(new HomePage().isLogInLinkDisplay(), "Login link is not displayed");
    }


    @And("^I enter registered email$")
    public void iEnterRegisteredEmail() {
        new RegisterSteps().iEnterEmail();
    }
}
