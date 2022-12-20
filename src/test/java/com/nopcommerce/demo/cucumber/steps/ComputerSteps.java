package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.*;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.List;

public class ComputerSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().getWelcomeText();
        Assert.assertEquals("Login page not displayed", expectedMessage, actualMessage);
    }

    @When("^I click on computer tab$")
    public void iClickOnComputerTab() {
        new HomePage().clickOnMenuTab("Computers");

    }

    @Then("^I should navigate to computer page successfully$")
    public void iShouldNavigateToComputerPageSuccessfully() {
        String expectedMessage = "Computers";
        String actualMessage = new ComputerPage().getPageTitleText();
        org.testng.Assert.assertEquals(expectedMessage, actualMessage, "Computers page not displayed");
    }

    @And("^I click on desktop tab$")
    public void iClickOnDesktopTab() {
        new ComputerPage().clickOnSubMenu("Desktops");
    }

    @Then("^I should navigate to desktop page successfully$")
    public void iShouldNavigateToDesktopPageSuccessfully() {
        String expectedMessage = "Desktops";
        String actualMessage = new DesktopPage().getPageTitleText();
        org.testng.Assert.assertEquals(expectedMessage, actualMessage, "Desktops page not displayed");
    }
    @And("^I select build your own product \"([^\"]*)\"$")
    public void iSelectBuildYourOwnProduct(String product)  {
        new DesktopPage().selectProduct(product);
    }
    @And("^I select following users details$")
    public void iSelectFollowingUsersDetails(DataTable dataTable) {
        List<List<String>> userList = dataTable.asLists(String.class);
        for (List<String>e:userList) {
            new BuildYourOwnComputerPage().selectProcessor(e.get(0));
            new BuildYourOwnComputerPage().selectRam(e.get(1));
            new BuildYourOwnComputerPage().selectHDD(e.get(2));
            new BuildYourOwnComputerPage().selectOS(e.get(3));
            new BuildYourOwnComputerPage().selectOS(e.get(4));
        }
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^I should navigate product has been added$")
    public void iShouldNavigateProductHasBeenAdded() {
        String expectedMessage = "The product has been added to your shopping cart";
        String actualMessage = new BuildYourOwnComputerPage().getProductAddedMessage();
        org.testng.Assert.assertEquals(expectedMessage, actualMessage, "Product does not added to cart");

    }



}
