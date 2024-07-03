const room = global.room;

module.exports = {
    name: "onStadiumChange",
    async execute(newStadiumName, byPlayer) {
        global.room.stadiumName = newStadiumName;
    }
}