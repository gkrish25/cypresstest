describe("customcommands",()=>{

it("createnewCommand",()=>{
    cy.visit("http://localhost/opencart/upload/index.php?route=account/login")
    cy.ClickLink("Forgotten Password")
    cy.title().should('eq','Forgot Your Password?')
})

it.only("Login to Open cart",()=>{
    cy.visit("http://localhost/opencart/upload/index.php?route=account/login")
    cy.fixture('opencart').then((data)=>{
        cy.OpencartLogin(data.username,data.password) 
    })
})

})