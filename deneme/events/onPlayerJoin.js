const updateTeams = require("../functions/updateTeams.js");
const updateStadium = require("../functions/updateStadium.js");

const { adminAuths } = require("../config.json");
const room = global.room;

module.exports = {
    name: "onPlayerJoin",
    async execute(player) {
        if(adminAuths.includes(player.auth)) {
            await room.setPlayerAdmin(player.id, 1);
        }
        await updateTeams();
        await updateStadium();
    }
}