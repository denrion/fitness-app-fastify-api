const isValidPassword = {
  validator: function (password) {
    return password.match(/^[a-zA-Z0-9]+(?:[_-]?[a-zA-Z0-9])*$/);
  },
  message: '{PATH} must only contain letters, numbers, underscores and dashes',
};

const isPasswordMatch = {
  validator: function (passwordConfrim) {
    return passwordConfrim === this.password;
  },
  message: 'Passwords do not match',
};

module.exports = { isValidPassword, isPasswordMatch };
