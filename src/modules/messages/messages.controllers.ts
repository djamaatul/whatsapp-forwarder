import Elysia from "elysia";
import whatsappClient from "../../plugins/whatsapp.client";

const messageController = new Elysia({
	prefix: 'messages'
})
.use(whatsappClient)

export default messageController