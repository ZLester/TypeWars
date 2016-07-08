const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
const mongoose = require('mongoose');
mongoose.Promise = Promise;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  games: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
  }],
});

userSchema.methods.comparePasswords = function (candidatePassword) {
  const savedPassword = this.password;
  return bcrypt.compareAsync(candidatePassword, savedPassword)
    .then(isMatch => isMatch)
    .catch(err => err);
};

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  bcrypt.genSaltAsync(10)
    .then(salt => bcrypt.hashAsync(this.password, salt, null))
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => next(err));
});

module.exports = mongoose.model('User', userSchema);
