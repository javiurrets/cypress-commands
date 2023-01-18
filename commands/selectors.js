/// <reference types='Cypress' />
describe('Selector examples', () => {
    it('Example of Selectors via WebdriverUni Contact Us Page', () => {
        cy.visit ("https://automationteststore.com/index.php?rt=content/contact")

        //By tag name
        cy.get ('input')

        //By atribute name and value
        cy.get ('input[name="first_name"]')

        //By ID
       // cy.get ('input[id="ContactUsFrm_first_name"]')
        cy.get('#ContactUsFrm')

        //By class
        cy.get ("form")

        //By multiple classes
        cy.get('[class="navbar-collapse collapse"]')

        //By two different atributes
        cy.get ('[name="email"][id="ContactUsFrm_email"]')

        //By Xpath
        cy.xpath ('//input[@name="first_name"]')

    });
}); 