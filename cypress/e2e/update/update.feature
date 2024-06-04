@update
Feature: Update the username

  Scenario: Update the username URL in the Profile page
    Given I log in with account
    And I go to the Profile page
    When I click Edit tags link
    And I edit the username field
    And I click the Update Account button
    And I go to profile page
    Then I observe that it will take me to the Profile page
    And My full name is displayed