### Automation using Cypress automation framework

- This project has automated test scenarios for website - https://www.saucedemo.com/
- Used **Cypress** automation framework with **TypeScript** programming language for automation
- Added **CI workflows**
    - GitHub action for Pull request testing
        - https://github.com/AutomationFrameworks/Cypress/blob/master/.github/workflows/pull-request-tester.yaml
    - GitHub action for regression testing
        - https://github.com/AutomationFrameworks/Cypress/blob/master/.github/workflows/regression-cron.yaml

#### Steps to install project and run tests locally

1. Install node.js
2. Clone the repo: `git clone https://github.com/AutomationFrameworks/Cypress.git`
3. Run command: `npm install .`
4. Open cypress and run tests: `./node_modules/.bin/cypress open` or `npx cypress open`
