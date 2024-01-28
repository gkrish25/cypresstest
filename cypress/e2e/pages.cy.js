describe("Tables",(()=>{
    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")
        cy.get("#input-username").type('demo')
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()
        cy.get("#menu-customer>a").click()  //select customer main menu
        cy.get("#menu-customer>ul>li:first-child").click()  //select customer sub menu
    })
    it("number of rows and columns",()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')
    })

    it("cell data in specific row and column",()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains('demo234566@gmail.com')
    })

    it("read all row and column data in first page",()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get('td').each(($col, index, $cols)=>{
                        cy.log($col.text())

                    })
                })
            })

    })

    it("read all row and column data in pagination table",()=>{
        //total number of pages
        /*let totalPages
        cy.get("[class='col-sm-6 text-end']").then((e)=>{
            let mytext= e.text()
           totalPages = mytext.substring( mytext.indexOf("(")+1,mytext.indexOf("Pages")-1)
           cy.log("Total number of pages in a tab==>"+totalPages)
        })*/
        let totalpages= 5
        for( let p=1; p<=totalpages; p++)
        {
            if(totalpages>1)
            {
                cy.log("Active Pages is ==="+p)
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click()
                cy.wait(2000)

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text())
                        })
                    }                    
                    )
                })
            }
        }


    })

}))