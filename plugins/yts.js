let yts = require('yt-search')
let handler = async (m, { text }) => {
if (!text) return m.reply('Cari apa?')
let results = await yts(text)
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `
π *${v.title}* (${v.url})
β³ DURACIΓN: ${v.timestamp}
π PUBLICADO ${v.ago}
`.trim()
case 'channel': return `
π¨βπ» *${v.name}* (${v.url})
π€ _${v.subCountLabel} suscriptores_
π½ ${v.videoCount} VIDEO/S
`.trim()
}
}).filter(v => v).join('\n========================\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['general']
handler.command = /^yts(earch)?$/i
module.exports = handler
