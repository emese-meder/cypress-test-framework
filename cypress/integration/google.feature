Feature: Google Test

Background: I open the Google Website
    Given I open the Google Homepage

Scenario: I search for a term
    When I type "White Dwarf" in the search field
    And I hit enter
    Then I am directed to the search results


