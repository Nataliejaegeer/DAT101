"use strict";

import { ESpriteNumberJustifyType, TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { TSoundFile } from "libSound";
import { EGameStatus, resetWorld, soundMuted, startGame } from "./FlappyBird.mjs";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

let bestScore = 0;

export class TMenu {
  #spTitle;
  #spPlayBtn;
  #spInfoText;
  #spCountDown;
  #spGameOverBoard;
  #spMedal;
  #spGameScore;
  #spFinalScore;
  #spBestScore;
  #sfCountDown;
  #sfRunning;
  #countDownTimer;

  constructor(aSpcvs, aSPI) {
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 90);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 236, 255);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));

    this.#spInfoText = new TSprite(aSpcvs, aSPI.infoText, 188, 140);
    this.#spInfoText.hidden = true;

    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 288, 210, 0, 1, ESpriteNumberJustifyType.Center);
    this.#spCountDown.visible = false;

    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberBig, 288, 40, 0, 0, ESpriteNumberJustifyType.Center);
    this.#spGameScore.visible = false;

    this.#spGameOverBoard = new TSprite(aSpcvs, aSPI.gameOver, 175, 120);
    this.#spGameOverBoard.hidden = true;

    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 202, 166);
    this.#spMedal.hidden = true;

    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 364, 156, 0, 0, ESpriteNumberJustifyType.Right);
    this.#spFinalScore.visible = false;

    this.#spBestScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 364, 192, 0, 0, ESpriteNumberJustifyType.Right);
    this.#spBestScore.visible = false;

    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#countDownTimer = null;
  }

  incGameScore(aScore) {
    this.#spGameScore.value += aScore;
  }

  resetGameScore() {
    this.#spGameScore.value = 0;
  }

  get gameScore() {
    return this.#spGameScore.value;
  }

  setSoundMute(aIsMuted) {
    if (aIsMuted) {
      this.#sfCountDown?.pause();
      this.#sfRunning?.pause();
      return;
    }

    if (EGameStatus.state === EGameStatus.countDown && this.#sfCountDown !== null) {
      this.#sfCountDown.play();
    }

    if (EGameStatus.state === EGameStatus.gaming) {
      this.#playRunningSound();
    }
  }

  stopRunningSound() {
    this.#sfRunning?.stop();
  }

  showGameOver() {
    this.stopRunningSound();
    this.#spInfoText.hidden = true;
    this.#spCountDown.visible = false;
    this.#spGameScore.visible = false;
    this.#spPlayBtn.hidden = false;
    this.#spGameOverBoard.hidden = false;
    this.#spFinalScore.visible = true;
    this.#spBestScore.visible = true;

    const currentScore = this.#spGameScore.value;
    this.#spFinalScore.value = currentScore;
    bestScore = Math.max(bestScore, currentScore);
    this.#spBestScore.value = bestScore;

    this.#spMedal.index = this.#getMedalIndex(currentScore);
    this.#spMedal.hidden = this.#spMedal.index === 0;
  }

  draw() {
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spInfoText.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
    this.#spGameOverBoard.draw();
    this.#spMedal.draw();
    this.#spFinalScore.draw();
    this.#spBestScore.draw();
  }

  #getMedalIndex(aScore) {
    switch (aScore) {
      case 0:
        return 0; // None
      case 1:
        return 2; // Gold
      case 2:
        return 1; // Silver
      case 3:
      default:
        return 3; // Bronze
    }
  }

  #hideGameOverUI() {
    this.#spGameOverBoard.hidden = true;
    this.#spMedal.hidden = true;
    this.#spFinalScore.visible = false;
    this.#spBestScore.visible = false;
  }

  #playRunningSound() {
    if (soundMuted) return;

    if (this.#sfRunning === null) {
      this.#sfRunning = new TSoundFile(fnRunning);
    } else {
      this.#sfRunning.stop();
    }

    this.#sfRunning.play();
  }

  #tickCountDown() {
    this.#spCountDown.value -= 1;

    if (this.#spCountDown.value > 0) {
      this.#countDownTimer = setTimeout(this.#tickCountDown.bind(this), 1000);
      return;
    }

    this.#spCountDown.visible = false;
    this.#spInfoText.hidden = true;
    this.#spGameScore.visible = true;
    this.#sfCountDown?.stop();
    this.#playRunningSound();
    startGame();
  }

  spPlayBtnClick() {
    if (EGameStatus.state === EGameStatus.countDown || EGameStatus.state === EGameStatus.gaming || EGameStatus.state === EGameStatus.heroIsDead) {
      return;
    }

    if (EGameStatus.state === EGameStatus.gameOver) {
      resetWorld();
    }

    EGameStatus.state = EGameStatus.countDown;

    clearTimeout(this.#countDownTimer);
    this.stopRunningSound();
    this.#hideGameOverUI();
    this.#spTitle.hidden = true;
    this.#spPlayBtn.hidden = true;
    this.#spInfoText.index = 0;
    this.#spInfoText.hidden = false;
    this.#spCountDown.value = 3;
    this.#spCountDown.visible = true;
    this.#spGameScore.visible = false;

    if (this.#sfCountDown === null) {
      this.#sfCountDown = new TSoundFile(fnCountDown);
    } else {
      this.#sfCountDown.stop();
    }

    if (!soundMuted) {
      this.#sfCountDown.play();
    }

    this.#countDownTimer = setTimeout(this.#tickCountDown.bind(this), 1000);
  }
}
