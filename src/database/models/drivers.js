'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class drivers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  drivers.init({
    driver_firstname: DataTypes.STRING,
    driver_lastname: DataTypes.STRING,
    driver_phone: DataTypes.INTEGER,
    driver_email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'drivers',
  });
  return drivers;
};