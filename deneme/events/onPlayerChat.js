const room = global.room;

module.exports = {
    name: "onPlayerChat",
    execute(player, message) {
        if(player.admin) {
            room.sendAnnouncement(`[ADMIN]${player.name}: ${message}`, null, 0xFFD700, "bold", null);
        }
        else {
            room.sendAnnouncement(`${player.name}: ${message}`, null, null, null, null);
        }
        return false;
    }
}