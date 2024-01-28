describe('MyFirst test', () =>{
    it('test1', () => {
        cy.visit("https://hegdes007.github.io/conFusion/index.html")
        cy.title().should('eq','Ristorante Con Fusion')
    })

    
}
)