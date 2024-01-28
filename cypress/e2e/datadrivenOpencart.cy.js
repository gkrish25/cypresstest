describe("opencart",()=>{

    it("datadriven test",()=>{

cy.fixture('opencart1').then((data)=>{
    cy.visit("http://localhost/opencart/upload/index.php?route=account/login")
    data.forEach((userdata)=>{
    cy.get("#input-email").type(userdata.username)
    cy.get("#input-password").type(userdata.password)
    cy.get("[value='Login']").click()

    if(userdata.username=="gokulkrishna.test@gmail.com" && userdata.password=="test@123")
    {
    cy.xpath("//a[text()='Logout'][@class='list-group-item']").should('have.text',userdata.expected)
    cy.xpath("//a[text()='Logout'][@class='list-group-item']").click()
    cy.xpath("//a[text()='Login'][@class='list-group-item']").click()   
    }
    else{
        cy.xpath("//div[contains(text(),'No match for E-Mail Address')]").should('have.text',userdata.expected)
    }
    })
})




    })
})