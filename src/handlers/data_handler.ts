import { Server, Socket } from "socket.io";
import { Events } from "../constants/Events";

export function dataHandler (io: Server, socket : Socket) {

    const sendMessage = (payload: any) => {
        try {
            console.log(payload);
            socket.to(socket.data.id_user).emit(Events.SEND_MESSAGE, payload);
            console.log('Mensaje emitido');
        } catch (error : any ) {
            throw new Error(error.message);
        }
    }
    socket.on(Events.SEND_DATA, sendMessage);
}