@remove
Feature: Remove photos

  Scenario: Remove photos from the collection successfully
    Given I log in with account
    And I create a private collection
    And I add 2 random photos to the newly created collection
    And I remove 1 photo from the newly created collection
    When I go to collection page
    Then I notice that the photo has been removed successfully from the collection
    And there is only 1 remaining photo in the collection