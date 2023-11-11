import { DataSource } from "typeorm";
import { Product } from "../entity/Product";
import { Pack } from "../entity/Pack";
import { CreateTables1693951908092 } from "./migrations/1693951908092-createTables";
import { InsertDataIntoProducts1693953158470 } from "./migrations/1693953158470-insertDataIntoProducts";
import { InsertDataIntoPacks1693955422100 } from "./migrations/1693955422100-insertDataIntoPacks";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_LOCAL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: "price_updater",
  synchronize: false,
  logging: false,
  entities: [Product, Pack],
  migrations: [
    CreateTables1693951908092,
    InsertDataIntoProducts1693953158470,
    InsertDataIntoPacks1693955422100,
  ],
});
