import type { Socket } from "socket.io-client";

export type PhysicsRectangle = Phaser.GameObjects.Rectangle & {
  body: Phaser.Physics.Arcade.Body;
};

export interface PlayerGameObject extends PhysicsRectangle {
  id: string;
}

export interface ResourceGameObject extends PhysicsRectangle {
  id: string;
}

export interface PlayerState {
  x?: number;
  y?: number;
  socket?: Socket;
  lastUpdate?: number;
}

export interface Platform {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export interface ApiPlayerState {
  x: number;
  y: number;
  id: string;
}

export interface Resource {
  id: string;
  x: number;
  y: number;
  type: string;
}
