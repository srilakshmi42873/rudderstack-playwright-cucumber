# RudderStack Automation Framework

This is a basic API automation framework using **CucumberJS** and **Axios** to test RudderStack’s HTTP event tracking.

## Features

- Sends event to RudderStack’s `/v1/track` API
- Reads credentials from `.env` files
- Uses `assert` to validate HTTP status
- Supports multiple environments: `dev`, `qa`, `prod`
- Includes GitHub Actions for daily test run

## Setup

```bash
npm install
npx playwright install
