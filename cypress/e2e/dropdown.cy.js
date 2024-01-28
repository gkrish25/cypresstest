describe("Handle Dropdown", ()=>{
    it.skip('dropdown with select', ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country")
        .select('Germany')
        .should('have.value','Germany')
    })

    it.skip('dropdown without select tag',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type('Italy').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Italy')

    })

    it.skip('autosuggest dropdown', () =>{
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi Capitals').click()
        cy.title().should('equal',"Delhi Capitals - Wikipedia")
    })

    it ("dynamic dropdown", () =>{
        cy.visit("https://www.google.com/")
        cy.get("[name='q']").type('cypress Automation')
        cy.wait(3000)
        cy.get("div.wM6W7d>span").should('have.length','12')
        cy.get("div.wM6W7d>span").each(($el, index, $list) =>{
            if($el.text()=='cypress automation tool advantages')
            {
                cy.wrap($el).click()
            }
            
        })
        cy.get("[name='q']").should('have.value','cypress automation tool advantages')

    })
})