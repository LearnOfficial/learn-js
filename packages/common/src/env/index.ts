import dotenv from "dotenv";

dotenv.config({path: "../../.env"});

interface IDatabase_env {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
};

export const DATABASE_ENV: IDatabase_env = {
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT as string) || 3306,
  database: process.env.DB_DATABASE || "default",
  username: process.env.DB_USERNAME || "default",
  password: process.env.DB_PASSWORD || "default",
};

export const JWT_SECRET = process.env.JWT_SECRET || "secret";
