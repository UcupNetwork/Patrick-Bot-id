let handler = async (m, { conn, text }) => {
    let yh = global.ragil
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, 'Ada apa manggil manggil saya 🤖', 'ʙᴀɴᴛᴜ ʀᴀᴍᴇɪɴ ɢᴄ :\nhttps://chat.whatsapp.com/BvSvdbqUVpn2e0MVfurLWn\nhttps://chat.whatsapp.com/BvSvdbqUVpn2e0MVfurLWn\nhttps://chat.whatsapp.com/BvSvdbqUVpn2e0MVfurLWn ', url, [['MENU', '#menu']], m)
  }
  handler.customPrefix = /bot|patrick|petrik|patrik/i
handler.command = new RegExp
  export default handler
  
  global.ragil = [
"https://telegra.ph/file/e66a353d510a2557490ba.jpg",
"https://telegra.ph/file/e66a353d510a2557490ba.jpg" 
  ]