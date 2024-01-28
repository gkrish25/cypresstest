import 'cypress-iframe'
import 'cypress-xpath'
require('@4tw/cypress-drag-drop')
describe('moveoperaion',()=>{

it('mouseover',()=>{
    cy.visit("https://demo.opencart.com/")
    cy.get("[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27']").should("not.be.visible")
    cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
    cy.get("[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27']").should("be.visible")

})

it('rightclick approach01',()=>{
    cy.visit("https://demo.guru99.com/test/simple_context_menu.html")
    cy.get("[class='context-menu-one btn btn-neutral']").trigger('contextmenu')
    cy.get('.context-menu-icon-edit').should("be.visible")

})

it('rightclick approach02',()=>{
    cy.visit("https://demo.guru99.com/test/simple_context_menu.html")
    cy.get("[class='context-menu-one btn btn-neutral']").rightclick()
    cy.get('.context-menu-icon-edit').should("be.visible")
})
it('doubleClick approach01',()=>{
    cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
    cy.frameLoaded('#iframeResult')
    cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick')
    cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
    

})

it('doubleClick approach02', ()=>{
    cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
    cy.frameLoaded('#iframeResult')
    cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').dblclick()
    cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
})

it('draganddrop',()=>{
    cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
    cy.get("#box7").drag('#box103',{force:true})
})

it.only('scroll',()=>{
    cy.visit("https://www.countries-ofthe-world.com/")
    cy.xpath("//a[@href='currencies-in-north-america.html']").scrollIntoView()
    cy.xpath("//div[@class='content-text']/h1").scrollIntoView()
})
})