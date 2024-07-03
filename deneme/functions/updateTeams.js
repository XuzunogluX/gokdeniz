const room = global.room;

module.exports = async () => {
    const players = await room.getPlayerList();
    const spectators = await players.filter(player => player.team === 0);
    const reds = await players.filter(player => player.team === 1);
    const blues = await players.filter(player => player.team === 2);
    const [morePlayersTeam, lessPlayersTeamID] = reds.length < blues.length ? [blues, 1] : [reds, 2];

    if (spectators.length === 2) {
        await room.setPlayerTeam(spectators[0].id, 1);
        await room.setPlayerTeam(spectators[1].id, 2);
    }
    else if (spectators.length === 1 && Math.abs(reds.length - blues.length) === 1) {
        await room.setPlayerTeam(spectators[0].id, lessPlayersTeamID);
    }
    else if (Math.abs(reds.length - blues.length) === 2) {
        await room.setPlayerTeam(morePlayersTeam[0].id, lessPlayersTeamID);
    }
}