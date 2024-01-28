describe('Csslocator', () =>{   

    it('Csslocator', () =>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("#search_query_top").type("shirts")
        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("shirt")
    })

    it('xpath check', () =>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".blockbestsellers[href='#blockbestsellers']").click()
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length',6)

    })
})