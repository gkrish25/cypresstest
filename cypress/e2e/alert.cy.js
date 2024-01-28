describe("alert",()=>{

    //simple alert

it.skip("simple alert",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()

    cy.on('window:alert',(t)=>{
        expect(t).to.contains('I am a JS Alert')
    })
    cy.get("#result").should('have.text','You successfully clicked an alert') //check text present on screen after closing alert
})

it.skip("confirm Alert",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm')
    })
//closing alert by using ok buton default option
    cy.get("#result").should('have.text','You clicked: Ok')
})

it.skip("confirm Alert bycancel",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm')
    })
    cy.on('window:confirm',()=>false) //closed alert window by using cancel option
    cy.get("#result").should('have.text','You clicked: Cancel')
})

it.skip("prompt alert",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    cy.window().then((win)=>{
        cy.stub(win,'prompt').returns("welcome")
    })
    cy.get("button[onclick='jsPrompt()']").click()
    
    cy.get("#result").should('have.text','You entered: welcome')
})

//Authentication alert - method one

it("Authentication Alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{
            auth: {username:"admin",password:"admin"}})
        
        cy.get("div[class='example']").should('have.contain','Congratulations')

    })

//Authentication alert - method two

it("Authentication Alert method 2",()=>{
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example']").should('have.contain','Congratulations')
})
})