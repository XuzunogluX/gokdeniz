const HaxballJS = require("haxball.js");

HaxballJS.then((HBInit) => {
  // Same as in Haxball Headless Host Documentation
  const room = HBInit({
    roomName: "Haxball.JS",
    maxPlayers: 16,
    public: false,
    noPlayer: true,
    token: "thr1.AAAAAGP6cIfXEIrJQixASw.Kvgi3V-CNqo", // Required
  });

  room.setDefaultStadium("Big");
  room.setScoreLimit(5);
  room.setTimeLimit(0);

  room.onRoomLink = function (link) {
    console.log(link);
  };
});
