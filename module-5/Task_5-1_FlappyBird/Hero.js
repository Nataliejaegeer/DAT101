"use strict";
import { TSprite } from "libSprite";
import { EGameStatus, soundMuted } from "./FlappyBird.mjs";
import { TSineWave } from "lib2d";
import { TSoundFile } from "libSound";

const fnFood = "./Media/food.mp3";
const fnHeroIsDead = "./Media/heroIsDead.mp3";
const fnGameOver = "./Media/gameOver.mp3";

export class THero extends TSprite {
    #gravity;
    #speed;
    #wave;
    #sfFood;
    #sfHeroIsDead;
    #sfGameOver;
  constructor(aSpcvs, aSPI) {
    super(aSpcvs, aSPI, 100, 100);
    this.animationSpeed = 50;
    this.#gravity = 9.81 / 100;
    this.#speed = 0;
    this.#wave = new TSineWave(1, 1);
    this.y += this.#wave.value;
    this.#sfFood = null;
    this.#sfHeroIsDead = null;
    this.#sfGameOver = null;
  }

  eat() {
    if (soundMuted) return;
    if (this.#sfFood === null) {
      this.#sfFood = new TSoundFile(fnFood);
    }else{
      this.#sfFood.stop();
    }
    this.#sfFood.play();
  }

  animate() {
    const hasGravity = 
     EGameStatus.state === EGameStatus.gaming ||
     EGameStatus.state === EGameStatus.heroIsDead;

    if (hasGravity) {
      if (this.y < 400-this.height) {
       this.#speed+= this.#gravity;
       this.y += this.#speed;
       if(this.rotation < 90){
         this.rotation = this.#speed * 25;
      }
   } else {
     EGameStatus.state = EGameStatus.gameOver;
     this.animationSpeed = 0;
     if (!soundMuted) {
       this.#sfGameOver = new TSoundFile(fnGameOver);
       this.#sfGameOver.play();
     }
   }
} else if (EGameStatus.state === EGameStatus.idle) {
   this.y += this.#wave.value;
  }
}

  dead () {
    if (soundMuted) return;
    this.#sfHeroIsDead = new TSoundFile(fnHeroIsDead);
    this.#sfHeroIsDead.play();
  }

  restart() {
    this.x = 100;
    this.y = 100;
    this.rotation = 0;
    this.animationSpeed = 50;
    this.#speed = 0;
  }


flap() {
    this.#speed = -3.5;
    this.rotation = 0;
  }
}
