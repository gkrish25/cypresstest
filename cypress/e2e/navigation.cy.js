describe("navigation scenario",()=>{
    it("naviation functionality",()=>{

        cy.visit("http://localhost/opencart/upload/index.php?route=account/login")
        cy.title().should('eq','Account Login')
        cy.ClickLink("Forgotten Password")
        cy.title().should('eq','Forgot Your Password?')
        cy.go('back')
        cy.title().should('eq','Account Login')
        cy.go('forward')
        cy.title().should('eq','Forgot Your Password?')
        cy.go(-1)
        cy.title().should('eq','Account Login')
        cy.go(1)
        cy.title().should('eq','Forgot Your Password?')
        cy.reload()

    })
})