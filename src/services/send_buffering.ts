import { Socket } from "socket.io"
import { Events } from "../constants/Events";
import { getNotifications } from "./get_notifications";

export const sendBuffering = async (offset: number, socket: Socket) => {
    const payloads = await getNotifications(offset);
    payloads.map((payload: any)=> {
        console.log(payload.id);
        socket.to(socket.data.id_user).emit(Events.SEND_MESSAGE, payload);
    })
}