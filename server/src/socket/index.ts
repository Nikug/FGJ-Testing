import { Socket } from "socket.io";
import { io } from "../..";
import { Vector2 } from "../../types/types";
import { addModifier } from "../game/gameState";
import {
  addPlayer,
  pushPlayer,
  removePlayer,
  updatePlayerPosition,
} from "../game/player";

export const handleSockets = (socket: Socket) => {
  addPlayer(socket);

  socket.on("disconnect", () => {
    removePlayer(socket);
  });

  socket.on("move", ({ x, y }: { x: number; y: number }) => {
    updatePlayerPosition(x, y, socket);
  });
  socket.on("push", ({ id, direction }: { id: string; direction: Vector2 }) => {
    pushPlayer(id, direction);
  });

  socket.on(
    "addModifier",
    (newModifier: string, modifierDurationSecond: number) => {
      addModifier(newModifier, modifierDurationSecond);
    },
  );
};
