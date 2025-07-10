# features/portfolio.feature
Feature: Portfolio Page

  Scenario: Load and verify portfolio content
    Given I navigate to the portfolio site
    Then I should see the name "Robert Michaels"
    #And I should see a "GitHub" link
    #And I should see a "Resume" link
