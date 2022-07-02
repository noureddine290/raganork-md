/* Copyright (C) 2022 Sourav KL11.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Raganork MD - Sourav KL11
*/
const {
    Module
} = require('../main');
Module({
    pattern: 'del',
    fromMe: true,
    desc: 'deletes message'
}, (async (m, t) => {
    await m.client.sendMessage(m.jid, { delete: { remoteJid: m.jid, fromMe: true, id: m.reply_message.id, participant: m.reply_message.jid } })
}));