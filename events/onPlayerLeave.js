const updateTeams = require("../functions/updateTeams.js");
const updateStadium = require("../functions/updateStadium.js");

const room = global.room;

module.exports = {
    name: "onPlayerLeave",
    async execute(player) {
        await updateTeams();
        await updateStadium();
    }
}