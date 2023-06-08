module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Users", {
      otp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return User;
  };
  