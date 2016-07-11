const Game = require('../games/Game');
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

userSchema.methods.addGame = function addGame(gameId) {
  return Game.findById(gameId)
    .then(game => {
      if (!game) {
        throw new Error('Game not found');
      }
      return game.setPlayer(this._id);
    })
    .then(() => this.save())
    .then(() => this);
};

userSchema.methods.comparePasswords = function comparePasswords(candidatePassword) {
  const savedPassword = this.password;
  return bcrypt.compareAsync(candidatePassword, savedPassword)
    .then(isMatch => isMatch);
};

userSchema.pre('save', function userPreSave(next) {
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
