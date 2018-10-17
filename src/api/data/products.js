import categories from './categories'

const rawProducts = [
  {
    id: 1,
    name: 'Clothing product',
    price: 12.99,
    categoryId: 1
  },
  {
    id: 2,
    name: 'Decor product',
    price: 14,
    categoryId: 2
  },
  {
    id: 3,
    name: 'Clothing product 2',
    price: 8.99,
    categoryId: 1
  },
  {
    id: 4,
    name: 'Accessories product',
    price: 28,
    categoryId: 3
  },
  {
    id: 5,
    name: 'Accessories product 2',
    price: 49.99,
    categoryId: 3
  },
  {
    id: 6,
    name: 'Clothing product 3',
    price: 13,
    categoryId: 1
  }
]

const findCategory = (categoryId) => {
  return categories.find(category => {
    return category.id === categoryId
  })
}

const products = rawProducts.map(product => {
  product.category = findCategory(product.categoryId)

  return product
})

export default products
