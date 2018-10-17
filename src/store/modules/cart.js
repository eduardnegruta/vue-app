const namespaced = true

const state = {
  items: []
}

const mutations = {
  setItems: (state, items) => {
    state.items = items
  },

  pushItems: (state, item) => {
    state.items.push(item)

    localStorage.setItem('cartItems', JSON.stringify(state.items))
  },

  spliceItems: (state, spliceItem) => {
    const index = state.items.findIndex(item => {
      return item.id === spliceItem.id
    })

    state.items.splice(index, 1)

    localStorage.setItem('cartItems', JSON.stringify(state.items))
  }
}

const actions = {

}

const getters = {
  items: state => {
    return state.items
  },

  itemsCount: state => {
    return state.items.length
  },

  totalPrice: state => {
    return state.items.reduce((prev, item) => {
      return prev + item.price
    }, 0)
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}