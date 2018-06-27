"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colyseus_1 = require("colyseus");
class RoomPlay extends colyseus_1.Room {
    constructor() {
        super(...arguments);
        this.maxClients = 2;
    }
    onInit(options) {
        console.log("onInit");
    }
    requestJoin(options, isNew) {
        console.log("requestJoin");
        return (options.create)
            ? (options.create && isNew)
            : this.clients.length > 0;
    }
    onJoin(client) {
        console.log("onJoin");
    }
    onLeave(client) {
        console.log("onLeave");
    }
    onMessage(client, message) {
        console.log("onMessage");
    }
    onDispose() {
        console.log("onDispose");
    }
}
exports.RoomPlay = RoomPlay;
