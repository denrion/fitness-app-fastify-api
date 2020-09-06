function findByEmail(email) {
  return this.findOne({ email });
}

module.exports = { findByEmail };
