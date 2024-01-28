describe("capturescreeshot",()=>{
    it("capture",()=>{
        cy.visit("http://localhost/opencart/upload/index.php?route=account/login")
        cy.screenshot('homepage')
        cy.get(".list-group").screenshot('NewRegistration')
    })
})