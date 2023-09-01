import { DataSource } from "typeorm";
import { ENTITIES } from ".";
import { DATABASE_ENV } from "@learn/common/env";

console.log(DATABASE_ENV);

export const DatabaseDataSource = new DataSource({
	type: "mysql",
	host: DATABASE_ENV.host,
	port: DATABASE_ENV.port,
	database: DATABASE_ENV.database,
	username: DATABASE_ENV.username,
	password: DATABASE_ENV.password,
	entities: ENTITIES,
	synchronize: true,
	logging: true
});
