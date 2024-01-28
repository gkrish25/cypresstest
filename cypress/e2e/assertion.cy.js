describe(" Assertion",() =>{
    it("implicint Assertion",() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //cy.url().should('include','orangehrmlive.com')
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain','orangehrm')

        //Another method for above validation

        /*cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')*/

        //Another method for above validation       

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','orangE')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        cy.xpath("//a").should('have.length','5')  //5 is no of links

        cy.get("[name='username']").type("Admin")  //Provide value into input box

        cy.get("[name='username']").should('have.value','Admin')

    } )

    it("explicint Assertion",() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name='username']").type("Admin")
        cy.get("[placeholder='Password']").type('admin123')
        cy.get("[type='submit']").click()

        let expName="Paul Collings";

        cy.get(".oxd-userdropdown-name").then( (x) =>{

            //BDD Assertion
         let actName = x.text()  
          expect(actName).to.equal(expName)

          //TDD Assertion
          assert.equal(actName,expName)
          //assert.not.equal(actName,expName)

        })

    
    })

    
})