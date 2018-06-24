import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContentProvider } from '../../providers/content/content';

import { Question } from '../../app/question-class';

@Component({
  selector: 'page-classroom',
  templateUrl: 'classroom.html',
})
export class ClassroomPage {
  questions: Question[];
  currentLevel: number;
  selectedAnswer: string;
  wrongAnswer: string;
  rightAnswer: string;

  displaySize: string;

  feedbackText: string;
  submitText: string;
  submitFunction;

  errorCount: number;
  triesCount: number;

  acerto: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private content: ContentProvider) {

  }

  ionViewCanEnter(): void {
    console.log('ionViewDidLoad ClassroomPage');
    this.currentLevel = this.navParams.get('levelId');
    this.getQuestions();
    this.cleanValues();
  }

  getQuestions(): void {
    this.content.getLevel(this.currentLevel)
      .subscribe(questions => {
        this.questions = questions;
        questions.length == 0? this.navCtrl.pop() : null;
      });
  }

  selectAnswer(answer: string): void {
    this.selectedAnswer = answer;
  }

  noneSelected(): boolean {
    return this.selectedAnswer == null;
  }

  submitAnswer(): void {
    this.rightAnswer = this.questions[0].answerKey;
    if (this.rightAnswer == this.selectedAnswer) {
        this.acerto = true;
        this.feedbackText = "Você acertou";
    }
    else {
        this.acerto = false;
        this.feedbackText = "Você errou.";
        this.wrongAnswer = this.selectedAnswer
        this.errorCount += 1;
    }
    this.submitText = "Próximo";
    this.submitFunction = this.nextQuestion;
    
  }

  nextQuestion(): void {
    this.acerto? null : this.questions.push(this.questions[0]);
    this.questions.length == 1? this.finishClass() : this.questions.shift();
    this.triesCount += 1;
    this.cleanValues();
  }

  finishClass(): void {
    this.navCtrl.pop();
  }

  cleanValues(): void {
    this.setAssetSize();
    this.rightAnswer = this.selectedAnswer = this.wrongAnswer = null;
    this.submitText = "Confirmar";
    this.submitFunction = this.submitAnswer;
  }

  setAssetSize(): void {
    let assetSizeMod: number;
    if (this.questions != undefined && this.questions.length > 0) {
        assetSizeMod = Math.E ** Math.log10(this.questions[0].assets.length);
    }
    else {assetSizeMod = 1;}

    this.displaySize = `${168 / assetSizeMod}px`;
  }


}