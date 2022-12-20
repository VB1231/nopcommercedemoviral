package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import com.nopcommerce.demo.utility.Utility;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

public class RegisterSteps {
    public static String email = new Utility().getRandomString(6) + "@gmail.com";
    SoftAssert softAssert= new SoftAssert();
    @Given("^I am on homepage for register$")
    public void iAmOnHomepageForRegister() {
    }

    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I Should navigate to register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
        Assert.assertEquals("Register", new RegisterPage().getRegisterText(), "Register page not displayed");

    }

    @And("^I select gender\"([^\"]*)\"$")
    public void iSelectGender(String gender) {
        new RegisterPage().selectGender(gender);

    }

    @And("^I enter first name\"([^\"]*)\"$")
    public void iEnterFirstName(String firstname) {
        new RegisterPage().enterFirstName(firstname);
    }

    @And("^I enter last name\"([^\"]*)\"$")
    public void iEnterLastName(String lastname) {
        new RegisterPage().enterLastName(lastname);

    }

    @And("^I select date of birth \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void iSelectDateOfBirth(String birthDay, String birthMonth, String birthYear) {
        new RegisterPage().selectDateOfBirth(birthDay, birthMonth, birthYear);

    }

    @And("^I enter email$")
    public void iEnterEmail() {
//new RegisterPage().enterEmail("viral@gmail.com");
        new RegisterPage().enterEmail(email);
    }


    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confirmPassword) {
        new RegisterPage().enterConfirmPassword(confirmPassword);

    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();

    }

    @And("^I should register completed$")
    public void iShouldRegisterCompleted() {
        Assert.assertEquals("Your registration completed", new RegisterPage().getYourRegCompletedText(),
                "Registration not successful");

    }

    @Then("^I click on continue button$")
    public void iClickOnContinueButton() {
        new RegisterPage().clickOnContinueButton();
    }


    @And("^I check firstName error message if empty$")
    public void iCheckFirstNameErrorMessageIfEmpty() {
      softAssert.assertEquals("First name is required.",
                new RegisterPage().getValidationErrorMessageForField("FirstName"),
                "FirstName field error message not displayed");

    }

    @And("^I check lastName error message if empty$")
    public void iCheckLastNameErrorMessageIfEmpty() {
        softAssert.assertEquals("Last name is required.",
                new RegisterPage().getValidationErrorMessageForField("LastName"),
                "LastName field error message not displayed");
    }

    @And("^I check email error message if empty$")
    public void iCheckEmailErrorMessageIfEmpty() {
        softAssert.assertEquals("Email is required.",
               new RegisterPage().getValidationErrorMessageForField("Email"),
                "Email field error message not displayed");

    }

    @And("^I check password error message if empty$")
    public void iCheckPasswordErrorMessageIfEmpty() {
        softAssert.assertEquals("Password is required.",
                new RegisterPage().getValidationErrorMessageForField("Password"),
                "Password field error message not displayed");

    }

    @And("^I check confirm password error message if empty$")
    public void iCheckConfirmPasswordErrorMessageIfEmpty() {
       softAssert.assertEquals("Password is required.",
               new RegisterPage().getValidationErrorMessageForField("ConfirmPassword"),
                "ConfirmPassword field error message not displayed");
       softAssert.assertAll();
    }
}
