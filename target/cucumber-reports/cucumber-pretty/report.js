$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/customerdeposit.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Customer deposit",
  "description": "",
  "id": "customer-deposit",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "login successfully",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.openWebsite(String)"
});
formatter.result({
  "duration": 12106238000,
  "status": "passed"
});
formatter.match({
  "location": "DepositTest.loginSuccesfully()"
});
formatter.result({
  "duration": 1325919900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Customer deposit",
  "description": "",
  "id": "customer-deposit;customer-deposit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I click deposit tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I type amount as 2000",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click submit deposit",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify that deposit successfully with amount as 2000",
  "keyword": "Then "
});
formatter.match({
  "location": "DepositTest.clickDepositTab()"
});
formatter.result({
  "duration": 2363271100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 17
    }
  ],
  "location": "DepositTest.setAmount(String)"
});
formatter.result({
  "duration": 2182964800,
  "status": "passed"
});
formatter.match({
  "location": "DepositTest.clickSubmit()"
});
formatter.result({
  "duration": 1110730100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 50
    }
  ],
  "location": "DepositTest.verifyLoginSuccesfully(String)"
});
formatter.result({
  "duration": 213500,
  "status": "passed"
});
});