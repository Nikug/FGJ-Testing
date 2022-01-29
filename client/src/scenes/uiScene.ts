import { Scoreboard } from "../ui/scoreboard";
import { Timer } from "../ui/timer";

export class UIScene extends Phaser.Scene {
  timer: Timer | undefined;
  scoreboard: Scoreboard | undefined;

  constructor() {
    super({ key: "UIScene", active: true });
    this.timer = new Timer(this);
    this.scoreboard = new Scoreboard(this);
  }

  create() {
    this.scoreboard?.addScoreBoard();

    const mainGame = this.scene.get("Game");

    mainGame.events.on(
      "addScore",
      (player: string, score: number) => {
        this.scoreboard?.addScore(player, score);
      },
      this,
    );

    mainGame.events.on(
      "addTimer",
      (seconds: number) => {
        this.timer?.addTimer(seconds);
      },
      this,
    );

    this.scoreboard?.addScore("Maija", 300);
    this.scoreboard?.addScore("Niku", 500);
  }
}
