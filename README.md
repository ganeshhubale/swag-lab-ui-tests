### Automation using Cypress automation framework

- This project has automated test scenarios for website - https://www.saucedemo.com/
- Used **Cypress** automation framework with **JavaScript** programming language for automation
- Added **CI workflows**
    - GitHub action for Pull request testing
        - https://github.com/ganeshhubale/swag-lab-ui-tests/blob/master/.github/workflows/pull-request-tester.yaml
    - GitHub action for regression testing
        - https://github.com/ganeshhubale/swag-lab-ui-tests/blob/master/.github/workflows/regression-cron.yaml

#### Steps to install project and run tests locally

1. Install node.js
2. Clone the repo: `git clone https://github.com/ganeshhubale/swag-lab-ui-tests.git`
3. Run command: `npm install .`
4. Open cypress and run tests: `./node_modules/.bin/cypress open` or `npx cypress open`

### Test cases automated
1. Authentication scenarios
    - Login to Swag Labs application
    - should retain session after page reload
    - should show error message on empty fields
    - should show error message on wrong username and password values
    - Logout from Swag Labs application
    - should logout after session expires
2. Verify Sorting Functionality (Name: A-Z)
Steps:

Navigate to the inventory page.
Select the "Name (A to Z)" option from the sort dropdown.
Verify that items are sorted alphabetically in ascending order by their names.
3. Verify Sorting Functionality (Name: Z-A)
Steps:

Navigate to the inventory page.
Select the "Name (Z to A)" option from the sort dropdown.
Verify that items are sorted alphabetically in descending order by their names.
4. Verify Sorting Functionality (Price: Low to High)
Steps:

Navigate to the inventory page.
Select the "Price (Low to High)" option from the sort dropdown.
Verify that items are sorted in ascending order of their prices.
5. Verify Sorting Functionality (Price: High to Low)
Steps:

Navigate to the inventory page.
Select the "Price (High to Low)" option from the sort dropdown.
Verify that items are sorted in descending order of their prices.
6. Add a Single Item to the Cart
Steps:

Navigate to the inventory page.
Click the "Add to Cart" button for a specific item.
Verify the cart count increments to 1.
Verify the item appears in the cart.
7. Add Multiple Items to the Cart
Steps:

Navigate to the inventory page.
Add multiple items to the cart by clicking "Add to Cart" for several items.
Verify the cart count matches the number of items added.
Verify all added items appear in the cart.
8. Remove an Item from the Cart
Steps:

Add an item to the cart.
Navigate to the cart page.
Click the "Remove" button for the item.
Verify the cart count decrements.
Verify the item is no longer in the cart.
9. Empty the Cart
Steps:

Add multiple items to the cart.
Navigate to the cart page.
Remove all items from the cart.
Verify the cart count is 0.
Verify the cart is empty.
10. Verify Cart Persistence
Steps:

Add items to the cart.
Reload the inventory page.
Verify the cart count and items persist after the reload.
11. Proceed to Checkout (Standard User)
Steps:

Add items to the cart.
Click the cart icon and then "Checkout".
Enter valid details (First Name, Last Name, Zip Code).
Verify the user is redirected to the checkout overview page.
12. Complete a Purchase
Steps:

Add items to the cart and proceed to checkout.
Enter valid details on the checkout page.
Click "Finish" on the checkout overview page.
Verify the success message and that the cart is empty.
13. Verify Checkout Validation Messages
Steps:

Add items to the cart and proceed to checkout.
Leave the First Name, Last Name, or Zip Code fields blank.
Click "Continue".
Verify validation messages appear for required fields.
14. Verify Removing an Item from Checkout Page
Steps:

Add multiple items to the cart.
Proceed to checkout.
Remove an item from the checkout overview page.
Verify the total price updates accordingly.
15. Verify Total Price Calculation
Steps:

Add multiple items to the cart.
Proceed to the checkout overview page.
Verify the total price matches the sum of item prices plus tax.


