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
  salt: {
    type: String,
  },
  games: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Games',
  }]
});

userSchema.methods.comparePasswords = (candidatePassword, callback) => {
  const savedPassword = this.password;
  bcrypt.compare(candidatePassword, savedPassword)
    .then(isMatch => callback(null, isMatch))
    .catch(err => callback(err));
};

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10)
    .then(salt => bcrypt.hash(user.password, salt, null))
    .then(hash => {
      user.password = hash;
      user.salt = salt;
      next();
    })
    .catch(err => next(err));
});

module.exports = mongoose.model('User', userSchema);
