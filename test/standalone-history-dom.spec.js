import {base, fireEvent, sleep} from './util'
import {initDomListeners, route, setBase} from '../route.esm'
import $ from 'bianco.query'
import {expect} from 'chai'
import {spy} from 'sinon'

describe('@riotjs/route - standalone', function() {
  let teardown // eslint-disable-line

  beforeEach(() => {
    setBase(base)

    document.body.innerHTML = `
    <nav>
      <a href="/hello">Hello</a>
      <a href="/user">User</a>
      <a href="/goodbye">goodbye</a>
      <a href="/user/gianluca">Username</a>
    </nav>
  `
    teardown = initDomListeners()
  })

  afterEach(() => {
    window.history.replaceState(null, '', '/')
    teardown()
  })

  it('html5 history links dispatch events', async function() {
    const onRoute = spy()
    const hello = route('/hello').on.value(onRoute)

    const [a] = $('nav > a:first-of-type')

    fireEvent(a, 'click')

    await sleep()

    expect(onRoute).to.have.been.called
    hello.end()
  })

  it('html5 history links receive parameters', (done) => {
    const user = route('/user/:username').on.value((url) => {
      user.end()
      expect(url.params).to.be.deep.equal(['gianluca'])
      done()
    })

    const [a] = $('nav > a:last-of-type')

    fireEvent(a, 'click')
  })
})