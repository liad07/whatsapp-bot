const qrcode = require('qrcode-terminal');

const { Client,LocalAuth } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message', message => {
    const contact = message.body;
    var chanels=["kan11","keshet12","reshet13","now14","sport1","sport2","sport3","sport4","sport5","sport5plus","sport5live","sport5gold"];
    if(contact=="help"){
        client.sendMessage(message.from, '"kan11","keshet12","reshet13","now14","sport1","sport2","sport3","sport4","sport5","sport5plus","sport5live","sport5gold"')

    }
    if(contact == chanels[0]){
        client.sendMessage(message.from, "https://www.crackapps.online/iptv/"+chanels[0])
    }
    if(contact == chanels[1]){
        client.sendMessage(message.from, "https://www.crackapps.online/iptv/"+chanels[1])
    }
    if(contact == chanels[2]){
        client.sendMessage(message.from, "https://www.crackapps.online/iptv/"+chanels[2])
    }
    if(contact == chanels[3]){
        client.sendMessage(message.from, "https://www.crackapps.online/iptv/"+chanels[3])
    }
    if(contact == chanels[4]){
        client.sendMessage(message.from, "https://www.crackapps.online/iptv/"+chanels[4])
    }
    if(contact == chanels[5]){
        client.sendMessage(message.from, "https://www.crackapps.online/iptv/"+chanels[5])
    }
    if(contact == chanels[6]){
        client.sendMessage(message.from, "https://www.crackapps.online/iptv/"+chanels[6])
    }
    if(contact == chanels[7]){
        client.sendMessage(message.from, "https://www.crackapps.online/iptv/"+chanels[7])
    }
    if(contact == chanels[8]){
        client.sendMessage(message.from, "https://www.crackapps.online/iptv/"+chanels[8])
    }
    if(contact == chanels[9]){
        client.sendMessage(message.from, "https://www.crackapps.online/iptv/"+chanels[9])
    }
    if(contact == chanels[10]){
        client.sendMessage(message.from, "https://www.crackapps.online/iptv/"+chanels[10])
    }
    if(contact == chanels[11]){
        client.sendMessage(message.from, "https://www.crackapps.online/iptv/"+chanels[11])
    }
    if(contact == chanels[12]){
        client.sendMessage(message.from, "https://www.crackapps.online/iptv/"+chanels[12])
    }
    console.log('messege received', message);
});

client.initialize();