import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SignIn from '../../../src/views/SignIn.vue'
import auth from '../../../src/store/modules/auth'
import filters from '../../../src/filters'
import i18n from '../../../src/i18n'
import router from '../../../src/router'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SignIn.vue', () => {
  let state
  let actions
  let store

  beforeEach(() => {
    state = {
      loggedIn: false,
    }

    actions = {
      signIn: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        auth: {
          namespaced: true,

          state,

          actions,

          getters: auth.getters
        }
      }
    })
  })

  test('set "emailAddress" data on emailInput input change', () => {
    const wrapper = shallowMount(SignIn, { store, filters, i18n, router, localVue })
    const emailAddressInput = wrapper.find('#signInFormEmailAddress')

    emailAddressInput.setValue('email')

    expect(wrapper.vm.emailAddress).toBe('email')
  })

  test('set "password" data on password input change', () => {
    const wrapper = shallowMount(SignIn, { store, filters, i18n, router, localVue })
    const passwordInput = wrapper.find('#signInFormPassword')

    passwordInput.setValue('password')

    expect(wrapper.vm.password).toBe('password')
  })

  test('fire "signIn" action on #signInForm submit', () => {
    const wrapper = shallowMount(SignIn, { store, filters, i18n, router, localVue })
    const signInButton = wrapper.find('#signInForm')

    signInButton.trigger('submit')

    expect(actions.signIn).toHaveBeenCalled()
  })
})