const { readdirSync } = require("fs");
const room = global.room;

try {
    readdirSync("./events").filter(file => file.endsWith(".js")).forEach(async file => {
        const event = await require(`./events/${file}`);
        room[event.name] = await event.execute;
        console.log("[SUNUCU] Event başarıyla yüklendi: " + event.name);
    })
}
catch (error) {
    console.error("[HATA] Eventler yüklenirken bir hata oluştu.\n" + error);
}