const HaxballJS = require("haxball.js")
const { token } = require("./config.json");

HaxballJS.then((HBInit) => {

  const room = HBInit({
    roomName: "Classic oynuyoruz gel",
    maxPlayers: 10,
    noPlayer: true,
    public: true,
    token: token
  })

  global.room = room;
  global.room.stadiumName = "Classic";
  require("./handler.js");

  room.onRoomLink = (url) => {
    console.log("[SUNUCU] Oda bağlantısı: " + url);
  }

})