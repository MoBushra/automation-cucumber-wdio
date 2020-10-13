Feature: Search items on Opencart

  Scenario Outline: As a user, I can search items on the site

    Given I am on the home page
    When I search <searchItem> on the site
    Then I should see results containing <searchItem>

    Examples:
      | searchItem |
      | iPhone     |
      | Samsung    |
      | Canon      |