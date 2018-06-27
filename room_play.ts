import { Room, Client } from "colyseus"

export class RoomPlay extends Room<any> {
    maxClients = 2;

    onInit (options: any) {
      console.log("onInit");
    }

    requestJoin (options: any, isNew: boolean) {
      console.log("requestJoin");
      return (options.create)
            ? (options.create && isNew)
            : this.clients.length > 0;
    }

    onJoin (client: Client) {
      console.log("onJoin");
    }

    onLeave (client: Client) {
      console.log("onLeave");
    }

    onMessage (client: Client, message: any) {
      console.log("onMessage");
    }

    onDispose () {
      console.log("onDispose");
    }
}
