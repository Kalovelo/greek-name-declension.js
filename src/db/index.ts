import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { Name } from "../models/Name";

dotenv.config({ path: "db.env" });

export const sequelize = new Sequelize({
  logging: false,
  dialect: "postgres",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  models: [Name],
});
