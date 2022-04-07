Feature: Google Test

Background: I open the Google Website
    Given I open the Google Homepage

Scenario: I navigate to the weather tab
    When I type "White Dwarf" in the search field
    And I hit enter
    Then I am directed to the search results


