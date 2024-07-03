const room = global.room;

module.exports = {
    name: "onRoomLink",
    async execute(url) {
        await console.log("[SUNUCU] Oda bağlantısı: " + url);
    }
}