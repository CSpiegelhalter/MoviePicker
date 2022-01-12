const bcrypt = require('bcrypt-nodejs');
const db = require('../../index').db;

const user = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING
    }
  );

  // User.beforeCreate((user, options) => {
  //   const salt = bcrypt.genSaltSync();
  //   user.password = bcrypt.hashSync(user.password, salt);
  // });

  // User.prototype.validPassword = function(candidatePassword) {
  //   return bcrypt.compareSync(candidatePassword, this.password);
  // }

  User.sync();
  return User;
};

module.exports = user;