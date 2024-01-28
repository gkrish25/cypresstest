describe("Fixture method",()=>{


it("account login_general",()=>{
    cy.visit("http://localhost/opencart/upload/index.php?route=account/login")
    cy.get("#input-email").type("gokulkrishna.test@gmail.com")
    cy.get("#input-password").type("test@123")
    cy.get("[value='Login']").click()
    cy.xpath("//a[text()='Logout'][@class='list-group-item']").should('have.text',"Logout")
})
it("accountlogin_ficturemethod01",()=>{
    cy.visit("http://localhost/opencart/upload/index.php?route=account/login")

    cy.fixture('opencart').then((dd)=>{   
    cy.get("#input-email").type(dd.username)
    cy.get("#input-password").type(dd.password)
    cy.get("[value='Login']").click()
    cy.xpath("//a[text()='Logout'][@class='list-group-item']").should('have.text',dd.expected)
    })
})

let userdata
before(()=>{
    cy.fixture('opencart').then((data)=>{
        userdata = data;
    })

    
})
it.only("accountlogin_ficturemethod",()=>{
    cy.visit("http://localhost/opencart/upload/index.php?route=account/login")
    cy.get("#input-email").type(userdata.username)
    cy.get("#input-password").type(userdata.password)
    cy.get("[value='Login']").click()
    cy.xpath("//a[text()='Logout'][@class='list-group-item']").should('have.text',userdata.expected)
    
})

})