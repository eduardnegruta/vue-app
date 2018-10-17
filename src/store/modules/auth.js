const namespaced = true

const state = {
  signedIn: false
}

const mutations = {
  setSignedIn: (state, value) => {
    state.signedIn = value
  }
}

const actions = {
  signIn: ({ commit }, data) => {
    return data.fn(data.data)
      .then(response => {
        commit('setSignedIn', true)

        return Promise.resolve(response)
      })
      .catch(reason => {
        return Promise.reject(reason)
      })
  },

  signOut: ({ commit }, data) => {
    return data.fn()
      .then(() => {
        commit('setSignedIn', false)

        return Promise.resolve()
      })
  },

  signUp: ({ commit }, data) => {
    return data.fn(data.data)
      .then(response => {
        commit('setSignedIn', true)

        return Promise.resolve(response)
      })
      .catch(reason => {
        return Promise.reject(reason)
      })
  }
}

const getters = {
  signedIn: state => {
    return state.signedIn
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
