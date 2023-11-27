// Import locators
import loc from '../support/locators'

describe('Test in a functional level', () => {
    before(() => {
        cy.login("myke@test", "myketest")
        cy.resetApp()
        //cy.visit('https://barrigareact.wcaquino.me/')
        //cy.get(loc.LOGIN.USER).type('myke@test')
        //cy.get(loc.LOGIN.PASSWORD).type('myketest')
        //cy.get(loc.LOGIN.BTN_LOGIN).click()
        //cy.get(loc.MESSAGE).should('contain', 'Bem vindo, ')
    })

    it('Create an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Conta de Teste')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!')
    })

    it('Update an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta Alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
    })
})
