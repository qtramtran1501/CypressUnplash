@follow
Feature: Follow a photographer

  Scenario: Follow a photographer successfully
    Given I log in with account
    And I click the first photo on home page
    When I hover on icon user at the top left corner
    And I click the Follow button
    Then I observe button text turn into Following