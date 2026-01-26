"use strict";
import { TSprite } from "libSprite";
import { EGameStatus } from "./FlappyBird.mjs";
import { TSineWave } from "lib2d";
import { TSoundFile } from "libSound";

const fnFood = ".Media/food.mp3";
const fnHeroIsDead = ".Media/hero_is_dead.mp3";
const fnGameOver = ".Media/game_over.mp3";

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
     menubar.stopSound();
     this.animationSpeed = 0;
     this.#sfGameOver = new TSoundFile(fnGameOver);
      this.#sfGameOver.play();
   }
} else if (EGameStatus.state === EGameStatus.idle) {
   this.y += this.#wave.value;
  }
}

  dead () {
    this.#sfHeroIsDead = new TSoundFile(fnHeroIsDead);
    this.#sfHeroIsDead.play();
  }


flap() {
    this.#speed = -3.5;
    this.rotation = 0;
  }
}

