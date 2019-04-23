import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

describe('Header Components', () => {
  it('Should render without errors', () => {
    const component = shallow(<Header />)
    const headerElement = component.find(`[data-test='header-component']`)
    expect(headerElement.length).toBe(1)
  })

  it('Should have a title', () => {
    const component = shallow(<Header />)
    const title = component.find(`[data-test='header-title']`)
    expect(title.text().length).toBeGreaterThan(0)
  })
})
