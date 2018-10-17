const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories
  },

  setProducts: (state, products) => {
    state.products = products
  },

  setSelectedCategory: (state, category) => {
    state.selectedCategory = category
  }
}

export default mutations
