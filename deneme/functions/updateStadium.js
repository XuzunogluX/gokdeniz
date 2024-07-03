const room = global.room;
const stadiums = [
    {name: "Small", minPlayers: 2, maxPlayers: 2, timeLimit: 3, scoreLimit: 3},
    {name: "Classic", minPlayers: 3, maxPlayers: 4, timeLimit: 3, scoreLimit: 3},
    {name: "Big", minPlayers: 5, maxPlayers: 8, timeLimit: 5, scoreLimit: 5},
    {name: "Huge", minPlayers: 9, maxPlayers: 10, timeLimit: 5, scoreLimit: 5}
]

module.exports = async () => {
    const stadiumName = global.room.stadiumName;
    const stadium = stadiums.find(s => s.name === stadiumName);
    const playerCount = await room.getPlayerList().filter(player => player.team !== 0).length;
    if(stadium.minPlayers > playerCount || playerCount > stadium.maxPlayers) {
        for(let i = 0, len = stadiums.length; i < len; i++) {
            if(playerCount <= stadiums[i].maxPlayers && stadiumName !== stadiums[i].name) {
                room.stopGame();
                room.setDefaultStadium(stadiums[i].name);
                room.setTimeLimit(stadiums[i].timeLimit);
                room.setScoreLimit(stadiums[i].scoreLimit);
                setTimeout(() => {
                    room.startGame();
                }, 1000);
                break;
            }
        }
    }
}