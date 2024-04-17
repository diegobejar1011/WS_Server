import { db } from "../config/database_config";

export const getNotifications = async (offset: number) : Promise<any> => {
    try {
        const query = 'SELECT * FROM logs WHERE id > ?';
        const [rows] = await db.execute(query, [offset]);
        return rows;
    } catch (error : any) {
        throw new Error(error.message);
    }
}