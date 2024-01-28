describe("handeling Tabs",()=>{
    it.skip("Approach one",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get(".example>a").invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.go('back')   // go back to parent tab
        cy.title().should('include','The Internet')
    })
    it("Approach two",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("[href='/windows/new']").then((e)=>{
            let url = e.prop('href')
            cy.visit(url)
        })
        cy.go('back')   // go back to parent tab
        cy.title().should('include','The Internet')
    })
})