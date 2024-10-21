import Elysia from "elysia";
import messageController from "./src/modules/messages/messages.controllers";
import { client } from "./src/plugins/whatsapp.client";

const port = process.env.PORT;

client.on('ready',()=> {
	new Elysia({
		prefix: '/api',
	})
	.use(messageController)
	.listen(port ?? 5001, () => console.log(`listening on port ${port}`));

})