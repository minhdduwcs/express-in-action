const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_FACTOR = 10;

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  displayName: {
    type: String,
  },
  bio: {
    type: String,
  }
});

userSchema.pre('save', function (done) {
  const user = this;

  if (!user.isModified('password')) {
    return done();
  }

  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return done(err);

    bcrypt.hash(user.password, salt, function (err, hashedPassword) {
      if (err) return done(err);
      user.password = hashedPassword;
      done();
    });
  });
});

userSchema.methods.name = function () {
  return this.displayName || this.username;
};

userSchema.methods.checkPassword = function (guess, done) {
  bcrypt.compare(guess, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
