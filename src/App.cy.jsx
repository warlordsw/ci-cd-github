import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)

    cy.contains('Reset').click()

    cy.get('p[name="reset"]')
      .invoke('val')
      .then((sometext) => cy.log(sometext))
  })
})
