# Automation using Cypress Automation Framework

This project automates test scenarios for the website - [https://www.saucedemo.com/](https://www.saucedemo.com/).

- **Framework**: Cypress Automation Framework
- **Language**: JavaScript
- **CI Workflows**:
  - **Check code formatting**: [pull-request-tester.yaml](https://github.com/ganeshhubale/swag-lab-ui-tests/blob/master/.github/workflows/code-format.yaml)
  - **Regression Testing**: [regression-cron.yaml](https://github.com/ganeshhubale/swag-lab-ui-tests/blob/master/.github/workflows/regression-cron.yaml)

## Steps to Install Project and Run Tests Locally

1. Install [Node.js](https://nodejs.org/).
2. Clone the repository:
   ```bash
   git clone https://github.com/ganeshhubale/swag-lab-ui-tests.git
   ```
3. Install project dependencies:
   ```bash
   npm install .
   ```
4. Open Cypress and run the tests:
   ```bash
   ./node_modules/.bin/cypress open
   ```
   or
   ```bash
   npx cypress open
   ```

## Test Cases Automated

### 1. **Authentication Scenarios**

- Login to Swag Labs application.
  - Should retain session after page reload.
  - Should show an error message on empty fields.
  - Should show an error message for invalid username and password.
- Logout from Swag Labs application.
  - Should log out after session expires.

### 2. **Verify Sorting Functionality**

- **Name: A-Z**
  - Navigate to the inventory page.
  - Select "Name (A to Z)" from the sort dropdown.
  - Verify items are sorted alphabetically in ascending order by name.
- **Name: Z-A**
  - Navigate to the inventory page.
  - Select "Name (Z to A)" from the sort dropdown.
  - Verify items are sorted alphabetically in descending order by name.
- **Price: Low to High**
  - Navigate to the inventory page.
  - Select "Price (Low to High)" from the sort dropdown.
  - Verify items are sorted in ascending order of their prices.
- **Price: High to Low**
  - Navigate to the inventory page.
  - Select "Price (High to Low)" from the sort dropdown.
  - Verify items are sorted in descending order of their prices.

### 3. **Cart Functionality**

- **Add a Single Item to the Cart**
  - Navigate to the inventory page.
  - Click "Add to Cart" for an item.
  - Verify the cart count increments to 1 and the item appears in the cart.
- **Add Multiple Items to the Cart**
  - Navigate to the inventory page.
  - Add multiple items by clicking "Add to Cart."
  - Verify the cart count matches the number of added items.
  - Verify all items appear in the cart.
- **Remove an Item from the Cart**
  - Add an item to the cart.
  - Navigate to the cart page.
  - Click "Remove" for the item.
  - Verify the cart count decrements and the item is removed.
- **Empty the Cart**
  - Add multiple items to the cart.
  - Navigate to the cart page.
  - Remove all items from the cart.
  - Verify the cart count is 0 and the cart is empty.
- **Verify Cart Persistence**
  - Add items to the cart.
  - Reload the inventory page.
  - Verify the cart count and items persist after the reload.

### 4. **Checkout Functionality**

- **Proceed to Checkout (Standard User)**
  - Add items to the cart.
  - Click the cart icon and then "Checkout."
  - Enter valid details (First Name, Last Name, Zip Code).
  - Verify redirection to the checkout overview page.
- **Complete a Purchase**
  - Add items to the cart and proceed to checkout.
  - Enter valid details on the checkout page.
  - Click "Finish" on the checkout overview page.
  - Verify the success message and that the cart is empty.
- **Verify Checkout Validation Messages**
  - Add items to the cart and proceed to checkout.
  - Leave required fields blank (e.g., First Name, Last Name, Zip Code).
  - Click "Continue."
  - Verify validation messages appear for required fields.
- **Verify Total Price Calculation**
  - Add multiple items to the cart.
  - Proceed to the checkout overview page.
  - Verify the total price matches the sum of item prices plus tax.
