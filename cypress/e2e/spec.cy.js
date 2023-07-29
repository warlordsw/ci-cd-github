describe('template spec', () => {
  const DivContainerSelector = '[id=testCountDivContainer]'
  const incrementButtonSelector = '[id=increment]'
  const decrementButtonSelector = '[id=decrement]'
  it('count is 0', () => {
    cy.visit('https://comfy-torrone-9aa30a.netlify.app/')
    cy.get(DivContainerSelector).should('contain.text', 0)
  })

  it('multiple clicks', () => {
    cy.visit('https://comfy-torrone-9aa30a.netlify.app/')
    cy.get(incrementButtonSelector).click().click().click()
    cy.get(DivContainerSelector).should('contain.text', 3)
    cy.get(decrementButtonSelector).click().click()
    cy.get(DivContainerSelector).should('contain.text', 1)
  })
})
