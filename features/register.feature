Feature: Opencart Registration

  Scenario Outline: As a visitor, I can register an account

    Given I am on the home page
    When I register as a new user
    Then I should see a success message saying <message>

    Examples:
    | message   |
    | Congratulations! Your new account has been successfully created!  |