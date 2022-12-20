$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#@Login"
    }
  ],
  "line": 2,
  "name": "Computer Test",
  "description": "As user I want to login into nop commerce website",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4573356100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "verifyUserShouldNavigateToComputerPageSuccessfully",
  "description": "",
  "id": "computer-test;verifyusershouldnavigatetocomputerpagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to computer page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 106363900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 929112000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "duration": 43722600,
  "status": "passed"
});
formatter.after({
  "duration": 738503000,
  "status": "passed"
});
formatter.before({
  "duration": 2263162100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "verifyUserShouldNavigateToDesktopsPageSuccessfully",
  "description": "",
  "id": "computer-test;verifyusershouldnavigatetodesktopspagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should navigate to desktop page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 851528700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopTab()"
});
formatter.result({
  "duration": 378007100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 37174600,
  "status": "passed"
});
formatter.after({
  "duration": 699614000,
  "status": "passed"
});
formatter.before({
  "duration": 2282835400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verifyThatUserShouldBuildYourOwnComputerAndAddToCartSuccessfully",
  "description": "",
  "id": "computer-test;verifythatusershouldbuildyourowncomputerandaddtocartsuccessfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select build your own product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select following users details",
  "rows": [
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 27
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 28
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should navigate product has been added",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 17300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 932464900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopTab()"
});
formatter.result({
  "duration": 812951700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 33
    }
  ],
  "location": "ComputerSteps.iSelectBuildYourOwnProduct(String)"
});
formatter.result({
  "duration": 1040506200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectFollowingUsersDetails(DataTable)"
});
formatter.result({
  "duration": 985137500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 51070300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateProductHasBeenAdded()"
});
formatter.result({
  "duration": 241321400,
  "status": "passed"
});
formatter.after({
  "duration": 705205700,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#@Login"
    }
  ],
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2270596900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage for login",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link from homepage",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see welcome sign in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepageForLogin()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLinkFromHomepage()"
});
formatter.result({
  "duration": 798208700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeWelcomeSignIn()"
});
formatter.result({
  "duration": 32308500,
  "status": "passed"
});
formatter.after({
  "duration": 754101600,
  "status": "passed"
});
formatter.before({
  "duration": 1936118600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage for login",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link from homepage",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"primeeight@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should navigate to login successfully from homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepageForLogin()"
});
formatter.result({
  "duration": 45900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLinkFromHomepage()"
});
formatter.result({
  "duration": 792429600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "primeeight@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 109922000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 88822400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 732717800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginSuccessfullyFromHomepage()"
});
formatter.result({
  "duration": 45255200,
  "status": "passed"
});
formatter.after({
  "duration": 684059100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage for login",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link from homepage",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 29,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 30,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 31,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 32,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1880545600,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage for login",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link from homepage",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepageForLogin()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLinkFromHomepage()"
});
formatter.result({
  "duration": 360863200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 99815700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 80878700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 290859600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 40169900,
  "status": "passed"
});
formatter.after({
  "duration": 739463100,
  "status": "passed"
});
formatter.before({
  "duration": 1834668900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage for login",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link from homepage",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepageForLogin()"
});
formatter.result({
  "duration": 15300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLinkFromHomepage()"
});
formatter.result({
  "duration": 372708800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 87715300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 79743000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 290194900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 44297300,
  "status": "passed"
});
formatter.after({
  "duration": 723723600,
  "status": "passed"
});
formatter.before({
  "duration": 1893914800,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage for login",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link from homepage",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepageForLogin()"
});
formatter.result({
  "duration": 15600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLinkFromHomepage()"
});
formatter.result({
  "duration": 799395400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 97968200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 82010900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 735750600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 66870400,
  "status": "passed"
});
formatter.after({
  "duration": 684197900,
  "status": "passed"
});
formatter.before({
  "duration": 2296854700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verifyThatUserShouldLogInSuccessFullyWithValidCredentials log out display",
  "description": "",
  "id": "login-test;verifythatusershouldloginsuccessfullywithvalidcredentials-log-out-display",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on homepage for login",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I click on login link from homepage",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I enter registered email",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter password \"Prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on log out button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I check login link displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepageForLogin()"
});
formatter.result({
  "duration": 20200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLinkFromHomepage()"
});
formatter.result({
  "duration": 824254300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterRegisteredEmail()"
});
formatter.result({
  "duration": 102388300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 84982400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 761710900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogOutButton()"
});
formatter.result({
  "duration": 40102681500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Log out\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [528913b4dca7a89eafd6a66eb14071f2, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\viral\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50887}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50887/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 528913b4dca7a89eafd6a66eb14071f2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLogOutLink(HomePage.java:72)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginSteps.iClickOnLogOutButton(LoginSteps.java:71)\r\n\tat ✽.And I click on log out button(login.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iCheckLoginLinkDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 850302900,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register",
  "description": "As user I want to Register into nop commerce website",
  "id": "register",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2423185800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "verifyUserShouldNavigateToRegisterPageSuccessfully",
  "description": "",
  "id": "register;verifyusershouldnavigatetoregisterpagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage for register",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepageForRegister()"
});
formatter.result({
  "duration": 56200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 807346100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 42655600,
  "status": "passed"
});
formatter.after({
  "duration": 705169500,
  "status": "passed"
});
formatter.before({
  "duration": 2309492800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should create account successfully",
  "description": "",
  "id": "register;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage for register",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select gender\"Male\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter first name\"prime\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter last name\"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select date of birth \"22\", \"February\", \"1980\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter email",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter password \"Prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter confirm password \"Prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should register completed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepageForRegister()"
});
formatter.result({
  "duration": 31600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 453641000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.iSelectGender(String)"
});
formatter.result({
  "duration": 70885300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 72006900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 65992200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 24
    },
    {
      "val": "February",
      "offset": 30
    },
    {
      "val": "1980",
      "offset": 42
    }
  ],
  "location": "RegisterSteps.iSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 243769000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iEnterEmail()"
});
formatter.result({
  "duration": 83389200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 90843400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 83991200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 543764600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldRegisterCompleted()"
});
formatter.result({
  "duration": 37489200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 316821400,
  "status": "passed"
});
formatter.after({
  "duration": 718302000,
  "status": "passed"
});
formatter.before({
  "duration": 2056086300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verifyThatFirstNameLastNameEmailPasswordAndConfirmPasswordFieldsAreMandatory",
  "description": "",
  "id": "register;verifythatfirstnamelastnameemailpasswordandconfirmpasswordfieldsaremandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage for register",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I check firstName error message if empty",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I check lastName error message if empty",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I check email error message if empty",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I check password error message if empty",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I check confirm password error message if empty",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepageForRegister()"
});
formatter.result({
  "duration": 760700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 405790800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 80417400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iCheckFirstNameErrorMessageIfEmpty()"
});
formatter.result({
  "duration": 51660100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iCheckLastNameErrorMessageIfEmpty()"
});
formatter.result({
  "duration": 45100800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iCheckEmailErrorMessageIfEmpty()"
});
formatter.result({
  "duration": 69268100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iCheckPasswordErrorMessageIfEmpty()"
});
formatter.result({
  "duration": 71054500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iCheckConfirmPasswordErrorMessageIfEmpty()"
});
formatter.result({
  "duration": 70752400,
  "status": "passed"
});
formatter.after({
  "duration": 695952200,
  "status": "passed"
});
});