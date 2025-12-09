import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { QUESTIONS } from '../data/questions';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz implements AfterViewInit {
  readonly MAX_QUESTIONS = 30;
  totalQuestions = QUESTIONS.length;
  listOfRandomIndices: number[] = [];
  curIndex = 0;
  correctCount=0;
  @ViewChild('mainContainer') quizElement!: ElementRef;
  generateQuiz(){
    const pElement = this.quizElement.nativeElement.getElementsByTagName('p')[0];
    this.listOfRandomIndices=[]
    while (this.listOfRandomIndices.length <this.MAX_QUESTIONS) {
      const randIndex = Math.floor(Math.random() * this.totalQuestions);
      if (!this.listOfRandomIndices.includes(randIndex)) {
        this.listOfRandomIndices.push(randIndex);
      }
    }
   
    this.curIndex = 0;
    this.correctCount=0;
    pElement.textContent = QUESTIONS[this.listOfRandomIndices[0]].Question;
    this.curIndex++;
  }
  ngAfterViewInit(): void {
    this.generateQuiz()
  }
  pressedBtn(ans:boolean) {
    const pElement = this.quizElement.nativeElement.getElementsByTagName('p')[0];
    
    if(this.curIndex < this.MAX_QUESTIONS) {
      pElement.textContent = QUESTIONS[this.listOfRandomIndices[this.curIndex]].Question;
      if(QUESTIONS[this.listOfRandomIndices[this.curIndex]].Answer==ans){
        this.correctCount++
      }
      this.curIndex++;

    }else{
      pElement.textContent = `total réponses correctes: ${ this.correctCount }/ ${ this.MAX_QUESTIONS }`
    }
    console.log(this.correctCount)
  }
  resetQuiz(){
    
    this.generateQuiz()
  }
}
