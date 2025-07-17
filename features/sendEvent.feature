Feature: Send Event to RudderStack

  Scenario: Send a test event using API and validate response
    Given I have event data
    When I send the event to RudderStack
    Then the response status should be 200