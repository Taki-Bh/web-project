import { Component } from '@angular/core';
import {Quiz} from '../shared/quiz/quiz';

@Component({
  selector: 'app-content',
  imports: [Quiz],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {

}
