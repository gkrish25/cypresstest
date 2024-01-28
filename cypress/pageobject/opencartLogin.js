class Login
{
setUname(email)
{
cy.get("#input-email").type(email)
}
setPassword(password)
{
    cy.get("#input-password").type(password)
}
selectLogin()
{
    cy.get("[value='Login']").click()
}
verifyLogin(expected)
{
cy.xpath("//a[text()='Logout'][@class='list-group-item']").should('have.text',expected)
}
}
export default Login