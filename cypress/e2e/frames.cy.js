import("cypress-iframe")
describe("handeling frames",()=>{
    it.skip("Approach one",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.wait(2000)
        const iframe = cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type("Welcome{ctrl+a}")
        cy.get("button[title='Bold']").click()
    })

    it.skip("Approach two- Using Custom Command",()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.wait(2000)
        cy.getIframe('#mce_0_ifr').clear().type("Welcome{ctrl+a}")
        cy.get("button[title='Bold']").click()
    })

    it("Approach three-Cypress Plugin",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr')  //Load the frame
        cy.iframe("#mce_0_ifr").clear().type("Good Morning{ctrl+a}")
        cy.get("button[title='Italic']").click()

    })

})