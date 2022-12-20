package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeText;

    @CacheLookup
    @FindBy(id = "Email")
    WebElement emailField;

    @CacheLookup
    @FindBy(name = "Password")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Log in')]")
    WebElement loginButton;

    @CacheLookup
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;

    public String getWelcomeText() {
        String message = getTextFromElement(welcomeText);
        log.info("Getting text from : " + welcomeText.toString());
       return message;
    }

    public void enterEmailId(String email) {
        sendTextToElement(emailField, email);
        log.info("enter email" +emailField.toString());
        Reporter.log("Enter email " + email + " to email field " + emailField.getText() + "<br>");
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
        log.info("enter password" +passwordField.toString());
        Reporter.log("Enter password " + password + " to password field " + passwordField.getText() + "<br>");
    }

    public void clickOnLoginButton() {
        clickOnElement(loginButton);
        log.info("click on login button" +loginButton.toString());
        Reporter.log("Clicking on Login Button <br>");
    }

    public String getErrorMessage() {
        String message = getTextFromElement(errorMessage);
        log.info("get error message" +errorMessage.toString());
        Reporter.log("Getting error message : " + errorMessage.getText() + "<br>");
        return message;
    }
}
