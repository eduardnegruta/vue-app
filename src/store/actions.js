import { categories, products, users } from '../api/data'

const actions = {
  init: ({ commit }) => {
    if (localStorage.getItem('signedIn') === 'true') {
      commit('auth/setSignedIn', true, { root: true })
    }

    if (localStorage.getItem('users')) {
      JSON.parse(localStorage.getItem('users')).map(user => {
        users.push(user)
      })
    }

    if (localStorage.getItem('cartItems')) {
      commit('cart/setItems', JSON.parse(localStorage.getItem('cartItems')), { root: true })
    }

    commit('setCategories', categories)

    commit('setProducts', products)
  }
}

export default actions
