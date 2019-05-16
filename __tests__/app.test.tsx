/**
 * @see https://github.com/zeit/next.js/blob/master/examples/with-jest/__tests__/index.test.js
 *
 * @todo for app tests, can mock Apollo + can mock Redux store...
 */
import * as React from 'react'
import { render, waitForElement } from 'react-testing-library'
import { InnerApp } from '../pages/_app'
import DefaultPage from '../pages/index'

const sleep = async (time: number) => Promise.resolve(time)

describe('app', () => {
  it.skip('should match snapshot', async () => {
    const view = (
      <InnerApp>
        <DefaultPage />
      </InnerApp>
    )
    const { container, rerender, getByText } = render(view)
    rerender(view)
    console.log('[tests] App - waiting')
    await waitForElement(() => getByText('@todo_______________'))
    await sleep(5000)

    console.log('[tests] App - waited')
    expect(container).toMatchSnapshot()
  })
})
