package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;

public class DesktopPage extends Utility {
    public DesktopPage() {
        PageFactory.initElements(driver, this);
    }
    private static final Logger log = LogManager.getLogger(DesktopPage.class.getName());


    @CacheLookup
    @FindBy(css = "div[class='page-title'] h1")
    WebElement pageTitle;

    @CacheLookup
    @FindBy(id = "products-orderby")
    WebElement sortBy;

    @CacheLookup
    @FindBy(id = "products-pagesize")
    WebElement display;

    @CacheLookup
    @FindBy(xpath = "//div[@class='products-container']//h2/a")
    List<WebElement> productTitleList;


    public String getPageTitleText() {
        String message = getTextFromElement(pageTitle);
        log.info("Getting page title " + pageTitle.toString());
        Reporter.log("Get pageTitle text " + pageTitle.getText() + "<br>");
        return message;
    }

    public void selectSortBy(String position) {
        selectByVisibleTextFromDropDown(sortBy, position);
        log.info("select position " + position.toString());
        Reporter.log("Sort by '" + position + "' position <br>");
    }

    public void selectDisplayPerPage(String number) {
        selectByVisibleTextFromDropDown(display, number);
        log.info("display product " + display.toString());
        Reporter.log("Display product '" + number + "' per page <br>");
    }

    public void selectProduct(String productName) {
        for (WebElement product : productTitleList) {
            if (product.getText().equals(productName)) {
                log.info("click on product " + product.toString());
                Reporter.log("Click on product '" + productName + "' : " + product.getText() + "<br>");
                clickOnElement(product);
                break;
            }
        }
    }
}
