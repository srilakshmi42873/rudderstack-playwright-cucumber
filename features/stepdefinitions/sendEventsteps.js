const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const assert = require('assert');
require('dotenv').config();

let response;

Given('I have event data', function () {
  this.eventPayload = {
    event: 'Automation Test Event',
    userId: 'test-user-001',
    properties: {
      message: 'RudderStack Event from Cucumber Playwright Script',
      timestamp: new Date().toISOString(),
    },
  };
});

When('I send the event to RudderStack', async function () {
  const url = `${process.env.DATA_PLANE_URL}/v1/track`;
  const encodedKey = Buffer.from(`${process.env.WRITE_KEY}:`).toString('base64'); // Correct Basic Auth format

  try {
    response = await axios.post(url, this.eventPayload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedKey}`, // ✅ fixed
      },
    });
  } catch (err) {
    response = err.response;
    console.error('❌ Request failed:', response?.status, response?.data);
  }
});


Then('the response status should be {int}', function (expectedStatus) {
  assert.strictEqual(response.status, expectedStatus);
});
