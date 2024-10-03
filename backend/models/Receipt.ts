import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db";

class Receipt extends Model {
  public id!: number;
  public date!: Date;
  public totalAmount!: number;
}

Receipt.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.DATE, allowNull: false },
    totalAmount: { type: DataTypes.FLOAT, allowNull: false },
  },
  {
    sequelize,
    modelName: "Receipt",
  }
);

export default Receipt;
