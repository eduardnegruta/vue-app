const getters = {
  categories: state => {
    return state.categories
  },

  products: state => {
    if (state.selectedCategory.id) {
      return state.products.filter(product => {
        return product.categoryId === state.selectedCategory.id
      })
    } else {
      return state.products
    }
  },

  selectedCategory: state => {
    return state.selectedCategory
  }
}

export default getters
