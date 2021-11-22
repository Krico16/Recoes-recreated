'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const salt = 10;

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  user.init({
    alumnId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    names: DataTypes.STRING,
    surnames: DataTypes.STRING,
    email: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    password: DataTypes.STRING,
    userType: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'user',
    /*
    defaultScope: {
      attributes: { exclude: ['password'] }
    },
    */
  });


  user.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, salt).then((hash) => {
      user.password = hash
    }).catch((err) => {
      console.log("Error hashing password");
    })
  });

  user.validatePassword = function validatePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
  return user;
};