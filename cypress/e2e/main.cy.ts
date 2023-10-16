describe('Check the app-admin', () => {
    beforeEach(() => {
        const baseUrl = "http://localhost:3000/api";
        cy.interceptAndReturnFile("GET", `${baseUrl}/resources`, "resources.json");
        cy.interceptAndReturnFile("GET", `${baseUrl}/resources/1`, "resource.json");
        cy.interceptAndReturnFile("GET", `${baseUrl}/resources?page=0&size=5`, "resources.json");
    });

    it('can render home page', () => {
        cy.goToHome();
        cy.wait(1000)
    });

    it('Check table (exists, has 3 rows)', () => {
        cy.get('#resource-table')
            .should('be.visible')
            .find('tbody tr')
            .should('have.length', 3);
    });

    it('Pagination (change count, change page, new lists)', () => {
        cy.get('#pagination').should('be.visible')
    });

    it('Click into a resource', () => {
        cy.get('#resource-0').click()
        cy.wait(1000)
    });

    it('Can see resource info', () => {
        cy.get('#resource-info')
            .should('be.visible')
        cy.get("#org-unit-table")
            .should('be.visible')
            .find('tbody tr')
            .should('have.length', 2)
    });

// })
//
// describe('Check that user can reach info-page', () => {
//     beforeEach(() => {
//         const baseUrl = "http://localhost:3000/api";
//             cy.interceptAndReturnFile("GET", `${baseUrl}/resources`, "resources.json");
//             cy.interceptAndReturnFile("GET", `${baseUrl}/resources/1`, "resources.json");
//         }
//     );
//
//     it('Click into a resource', () => {
//         cy.get('#resource-0').click()
//     });
//
//   //todo
//   it('Members tab (exits, title, table, search)', () => {
//     // cy.goToHome();
//     cy.get('#tableTitle').should('have.text','Members')
//   });
//
//   //TODO
//   it('Resrouces tab (exits, title, table, search)', () => {
//     // cy.goToHome();
//     cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').should('have.text','Resources')
//   });

})