export const validations = {
  username: {
    presence: {
      message: '^Please enter a username'
    },
    format: {
      pattern: /^[a-zA-Z0-9]*$/,
      message: '^Your username must be alphanumeric.'
    },
    length: {
      minimum: 4,
      message: '^Your username must be >= 4 characters.'
    }
  },

  password: {
    presence: {
      message: '^Please enter a password'
    },
    length: {
      minimum: 4,
      message: '^Your password must be >= 4 characters'
    }
  }
}
