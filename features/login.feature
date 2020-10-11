Feature: Opencart Login

  Scenario Outline: As a user, I can log into my account

    Given I am on the home page
    When I login with <username> and <password>
    Then I should see a header message saying <message>

    Examples:
      | username         | password  | message                   |
      | email@domain.com | test12345 | My Orders                 |