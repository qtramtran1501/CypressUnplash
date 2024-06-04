@list
Feature: List of liked photos

  Scenario: List of liked photos
    Given I log in with account
    And I like 3 random photos
    When I go to like page
    Then I see the number of likes is 3
    And 3 photos appear in Likes section