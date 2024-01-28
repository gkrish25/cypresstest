import Login from "../pageobject/opencartLogin"
describe("pageobjectmodel",()=>{
    it("approach01",()=>
    
    {
        cy.visit("http://localhost/opencart/upload/index.php?route=account/account")
        const lp = new Login();
        lp.setUname("gokulkrishna.test@gmail.com")
        lp.setPassword("test@123")
        lp.selectLogin()
        lp.verifyLogin("Logout")
    })

    it.only("Approach 01",()=>{
        cy.visit("http://localhost/opencart/upload/index.php?route=account/account")
        cy.fixture('opencart').then((data)=>{
            const lp = new Login();
        lp.setUname(dd.username)
        lp.setPassword(dd.password)
        lp.selectLogin()
        lp.verifyLogin(dd.expected)
        })
    })
let dd
    before(()=>{
        cy.fixture('opencart').then((data)=>{
            dd=data;
        })
    })
})