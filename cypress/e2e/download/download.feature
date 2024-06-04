@download
Feature: Download photo

  Scenario: Download photo successfully
    Given I log in with account
    When I open a random photo
    And I download this photo
    Then I notice that the image is downloadable and the correct image has been saved