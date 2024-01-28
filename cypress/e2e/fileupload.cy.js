import 'cypress-file-upload'
describe("fileupload",()=>{

    it("single File upload",()=>{
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("Jenins+Installation+on+Windows.pdf")
        cy.get("#file-submit").click()
    })

    it("File name chnage",()=>{
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:"Jenins+Installation+on+Windows.pdf",fileName:"Newfile.pdf"})
        cy.get("#file-submit").click() 
    })

    it("Drag and drop",()=>{
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("Jenins+Installation+on+Windows.pdf",{subjectType:'drag-n-drop'})
    })
    it("multiple file upload",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(['Jenins+Installation+on+Windows.pdf','cucumber+folder+structure.png'])
    })
    it.only("Shadow dom",()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile("Jenins+Installation+on+Windows.pdf")
    })
})
