import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ContentProvider } from '../../providers/content/content';

import { Question } from '../../app/question-class';
import { PerformanceMap } from '../../app/performance-class';

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

  errorCount: number = 0;
  triesCount: number = 0;

  acerto: boolean;

  constructor(
      public navCtrl: NavController, public navParams: NavParams, private content: ContentProvider,
      private modal: ModalController
    ) {}

  ionViewCanEnter(): void {
    this.currentLevel = this.navParams.get('levelId');
    this.getQuestions();
    this.cleanValues();
  }

  getQuestions(): void {
    this.content.getLevel(this.currentLevel)
      .subscribe(questions => {
        this.questions = questions;
        questions.length == 0? this.navCtrl.pop() : null;
        //TODO: Alerta de erro. Função exclusiva de saída?
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
    this.triesCount += 1;
    this.submitText = "Próximo";
    this.submitFunction = this.nextQuestion;
    
  }

  nextQuestion(): void {
    this.acerto? null : this.questions.push(this.questions[0]);
    this.questions.length == 1? this.finishClass() : this.questions.shift();
    this.cleanValues();
  }

  finishClass(): void {
    const Data: PerformanceMap = {
        tries: this.triesCount,
        errors: this.errorCount,
        course: this.content.courseId,
        level: this.currentLevel
    }
    const ClassResults = this.modal.create('PostLevelPage', {data: Data});
    ClassResults.present().then( () => this.navCtrl.pop() );
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
