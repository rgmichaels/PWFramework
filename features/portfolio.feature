# features/portfolio.feature
Feature: Portfolio Site

  Scenario: Load and verify portfolio content
    Given I navigate to the portfolio site
    Then I should see the name "Robert Michaels"
