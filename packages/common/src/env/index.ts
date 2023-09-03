import dotenv from "dotenv";

dotenv.config({path: "../../.env"});

interface IDatabase_env {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
};

interface IServer_env {
  host: string;
  port: number;
}

const env = process.env;

export const DATABASE_ENV: IDatabase_env = {
  host: env.DB_HOST || "localhost",
  port: parseInt(env.DB_PORT as string) || 3306,
  database: env.DB_DATABASE || "default",
  username: env.DB_USERNAME || "default",
  password: env.DB_PASSWORD || "default",
};

export const JWT_SECRET = env.JWT_SECRET || "secret";

export const SERVER_ENV: IServer_env = {
  port: parseInt(env.SERVER_PORT as string) || 4000,
  host: env.SERVER_HOST || "localhost"
}
