import App from './App'

describe('<App/>', () => {
  const DivContainerSelector = '[id=testCountDivContainer]'
  const incrementButtonSelector = '[id=increment]'
  const decrementButtonSelector = '[id=decrement]'
  it('initalState', () => {
    cy.mount(<App />)
    cy.get(DivContainerSelector).should('contain.text', 0)
  })

  it('is initialState 100?', () => {
    cy.mount(<App initial={100} />)
    cy.get(DivContainerSelector).should('contain.text', 100)
  })

  it('can be increment', () => {
    cy.mount(<App />)
    cy.get(incrementButtonSelector).click()
    cy.get(DivContainerSelector).should('contain.text', 1)
  })

  it('can be decrement', () => {
    cy.mount(<App />)
    cy.get(decrementButtonSelector).click()
    cy.get(DivContainerSelector).should('contain.text', -1)
  })

  it('multiple clicks', () => {
    cy.mount(<App initial={100} />)
    cy.get(incrementButtonSelector).click().click().click()
    cy.get(DivContainerSelector).should('contain.text', 103)
    cy.get(decrementButtonSelector).click().click()
    cy.get(DivContainerSelector).should('contain.text', 101)
  })
})
