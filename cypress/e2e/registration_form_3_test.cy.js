beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html')
})

/*
BONUS TASK: add visual tests for registration form 3
Task list:
* Create test suite for visual tests for registration form 3 (describe block)
* Create tests to verify visual parts of the page:
    * radio buttons and its content
    * dropdown and dependencies between 2 dropdowns:
        * list of cities changes depending on the choice of country
        * if city is already chosen and country is updated, then city choice should be removed
    * checkboxes, their content and links
    * email format
 */
describe('Visual tests for Registration Form 3', () => {
    it('should display radio buttons with proper labels for newsletter frequency', () => {
        cy.get('input[type="radio"]').should('have.length', 4);
        cy.get('label[for="newsletterDaily"]').should('contain', 'Daily');
        cy.get('label[for="newsletterWeekly"]').should('contain', 'Weekly');
        cy.get('label[for="newsletterMonthly"]').should('contain', 'Monthly');
        cy.get('label[for="newsletterNever"]').should('contain', 'Never');
        cy.get('#newsletterDaily').check().should('be.checked');
    });
});
/*
BONUS TASK: add functional tests for registration form 3
Task list:
* Create second test suite for functional tests
* Create tests to verify logic of the page:
    * all fields are filled in + corresponding assertions
    * only mandatory fields are filled in + corresponding assertions
    * mandatory fields are absent + corresponding assertions (try using function)
    * add file functionlity(google yourself for solution!)
 */