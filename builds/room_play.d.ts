import { Room, Client } from "colyseus";
export declare class RoomPlay extends Room<any> {
    maxClients: number;
    onInit(options: any): void;
    requestJoin(options: any, isNew: boolean): boolean;
    onJoin(client: Client): void;
    onLeave(client: Client): void;
    onMessage(client: Client, message: any): void;
    onDispose(): void;
}
