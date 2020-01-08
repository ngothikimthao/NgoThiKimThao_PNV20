# new feature
# Tags: optional

Feature: Customer deposit

  Background:
    Given Open website http://www.way2automation.com/angularjs-protractor/banking/#/customer
    Given login successfully

  Scenario: Customer deposit
    When I click deposit tab
    And I type amount as 2000
    And I click submit deposit
    Then I verify that deposit successfully with amount as 2000