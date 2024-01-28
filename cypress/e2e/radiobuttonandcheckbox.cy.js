describe("Check UI Elements", () =>{

    it("check Radio button", () =>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("input#male").should('be.visible')  //behaviour of element
        cy.get("input#female").should('be.visible')

        //selecting radio button
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')

        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')
    })

    it("checking Checkbox", () =>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("[type='checkbox'][id='monday']").should('be.visible')  //visibility
        
        //selecting single checkbox

        cy.get("[type='checkbox'][id='monday']").check().should('be.checked')

        //unselecting check box

        cy.get("[type='checkbox'][id='monday']").uncheck().should('not.be.checked')

        //Selecting all checkbox

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //selecting first check box

        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()

    })

})