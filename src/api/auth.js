import { users } from './data'
import { userTransformer } from './transformers'

const auth = {
  signIn (data) {
    return new Promise((resolve, reject) => {
      const response = users.find(user => {
        return user.emailAddress === data.emailAddress && user.password === data.password
      })

      setTimeout(() => {
        if (response) {
          localStorage.setItem('signedIn', 'true')

          resolve(userTransformer(response))
        } else {
          reject('badCredentials')
        }
      }, 600)
    })
  },

  signOut () {
    localStorage.removeItem('signedIn')

    return Promise.resolve()
  },

  signUp (data) {
    return new Promise((resolve, reject) => {
      const response = users.find(user => {
        return user.emailAddress === data.emailAddress
      })

      setTimeout(() => {
        if (response) {
          reject('userWithEmailAddressAlreadyExists')
        } else {
          const user = {
            id: users.length + 1,
            emailAddress: data.emailAddress,
            password: data.password
          }

          users.push(user)

          localStorage.setItem('users', JSON.stringify(users))

          resolve(userTransformer(user))
        }
      }, 600)
    })
  }
}

export default auth
