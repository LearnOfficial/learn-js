import { DataSource } from "typeorm";
import dotenv from "dotenv"

// NOTE: Read the env file from root project
dotenv.config({path: "../../.env"})

export const DatabaseDataSource = new DataSource({
	type: "mysql",
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT as string),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
});
