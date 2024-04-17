import { ConnectionOptions, createConnection } from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

const config : ConnectionOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}

const conn : Connection = createConnection(config);

export const db = conn.promise();