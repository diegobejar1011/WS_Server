import { ConnectionOptions, createConnection } from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

const config : ConnectionOptions = {
    host: 'database-1.cd8ee2i0wc9v.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123',
    database: 'multidiciplinario'
}

const conn : Connection = createConnection(config);

export const db = conn.promise();