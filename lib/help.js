
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered) => { 
	return `
╔━━━━━━━━❮𝐈𝐍𝐅𝐎❯━━━━━━━━
║
╠➣  𝐋𝐘𝐍𝐎 𝐁𝐎𝐓ϟ
║
╠➣ 𝐏𝐑𝐄𝐅𝐈𝐗: ( . )
║
╠➣ 𝐃𝐎𝐍𝐎: ༆𖤐⁩ꪶ𝙇𝙔⃯𝙉𝙊⃯֟֯፝𝙕𝙓𖡬𝘼⃯𝟭𝟬ꫂ༆𖤐⁩
║
╠➣ *wa.me/558897187831*
║
╠➣ 𝐒𝐓𝐀𝐓𝐔𝐒: ON
║
╠━━━━━━━━❮INFO DO USER❯━━━━━━━━
║╭─━─━─━─━─━─━─━─━─━─━─╮
║│➣ *nome* : ${pushname}
║│
║│➣ *ua mi 😁* : wa.me/${sender.split("@")[0]}
║│
║│➣ *XP* : ${getLevelingXp(sender)}/${reqXp}
║│
║│➣ *level* : ${getLevelingLevel(sender)}
║│
║│➣ *user register : ${_registered.length}
║╰─━─━─━─━─━─━─━─━─━─━─╯
╠━━━━━━━━━━━❮MENU❯━━━━━━━━━━
║╭─━─━─━─━─━─╮
║│➣ *${prefix}sticker*    
║│➣ *${prefix}tts*
║│➣ *${prefix}toimg*  
║╰─━─━─━─━─━─╯
╠━━━━━━━━━━━━━━━━
║╭─━─━─━─━─━─━─╮
║│➣ *${prefix}ocr*
║│➣ *${prefix}quotemaker*
║│➣ *${prefix}tiktokstalk*
║│➣ *${prefix}fototiktok*
║│➣ *${prefix}truth*
║│➣ *${prefix}dare*
║╰─━─━─━─━─━─━─╯
╠━━━━━━━━━━━━━━━━
║╭─━─━─━─━─━─╮
║│➣ *${prefix}text3d*
║│➣ *${prefix}bucin*
║│➣ *${prefix}hilih*
║│➣ *${prefix}ssweb*
║╰─━─━─━─━─━─╯
╠━━━━━━━━━━━━━━━━
║╭─━─━─━─━─━─━─╮
║│➣ *${prefix}artinama*
║│➣ *${prefix}spamcall*
║│➣ *${prefix}quotes*
║│➣ *${prefix}kbbi*
║│➣ *${prefix}map*
║│➣ *${prefix}cerpen*
║╰─━─━─━─━─━─━─╯
╠━━━━━━━━━━━━━━━━
║╭─━─━─━─━─━─╮
║│➣ *${prefix}chord*
║│➣ *${prefix}lirik*
║│➣ *${prefix}phlogo*
║╰─━─━─━─━─━─╯
╠━━━━━━━━━━━━━━━━
║╭─━─━─━─━─━─━─╮
║│➣ *${prefix}bisakah*
║│➣ *${prefix}apakah*
║│➣ *${prefix}kapankah*
║│➣ *${prefix}rate*
║│➣ *${prefix}owner*
║╰─━─━─━─━─━─━─╯
╠━━━━━━━━❮NSFW❯━━━━━━━━
║╭─━─━─━─━─━─━─╮
║│➣ *${prefix}waifu*
║│➣ *${prefix}anime*
║│➣ *${prefix}neko*
║│➣ *${prefix}dewabatch*
║│➣ *${prefix}pokemon*
║│➣ *${prefix}anjing*
║│➣ *${prefix}indohot*
║╰─━─━─━─━─━─━─╯
╠━━━━━━━━❮GRUPO❯━━━━━━━━
║╭─━─━─━─━─━─━─━─━─━─━─╮
║│➣ *${prefix}hidetag*
║│➣ *${prefix}linkgc*
║│➣ *${prefix}tagall*
║│➣ *${prefix}setpp*
║│➣ *${prefix}antilink
║│➣ *${prefix}add*
║│➣ *${prefix}kick*
║│➣ *${prefix}setname*
║│➣ *${prefix}setdesc*
║│➣ *${prefix}demote*
║│➣ *${prefix}kickall*
║│➣ *${prefix}promote*
║│➣ *${prefix}listadmin*
║│➣ *${prefix}group* [buka/tutup]
║│➣ *${prefix}leveling* [enable/disable]
║│➣ *${prefix}nsfw* [1/0]
║│➣ *${prefix}simih* [1/0]
║│➣ *${prefix}welcome* [1/0]
║╰─━─━─━─━─━─━─━─━─━─━─╯
╠━━━━━━━━❮OWNER❯━━━━━━━━
║╭─━─━─━─━─━─━─╮
║│➣ *${prefix}bc*
║│➣ *${prefix}setprefix*
║│➣ *${prefix}getses*
║│➣ *${prefix}clearall*
║│➣ *${prefix}block*
║│➣ *${prefix}unblock* 
║│➣ *${prefix}leave*    
║│➣ *${prefix}clone*
║╰─━─━─━─━─━─━─╯
┗━━━━━━━━━━━━━━━━
`
}
exports.help = help



  
