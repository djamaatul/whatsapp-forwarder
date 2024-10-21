import Elysia from "elysia";
import whatsapp, { LocalAuth } from 'whatsapp-web.js';
import qr from 'qrcode-terminal'


export const client = new whatsapp.Client({
	authStrategy: new LocalAuth(),
	puppeteer: {
		headless: true
	}
})

client.on('qr', (code)=> {
		qr.generate(code, {
			small: true
		})
})

const whatsappClient = new Elysia().decorate('client', client);

client.initialize()

export default whatsappClient