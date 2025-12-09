import { Component, HostListener, signal, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { NgStyle, NgIf } from '@angular/common';
import { EnrollModal } from './shared/enroll-modal/enroll-modal';

@Component({
  selector: 'app-root',
  imports: [EnrollModal, RouterOutlet, RouterLinkActive, RouterLink, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  platformIsClicked = false;
  loaded: boolean = false;
  onActivate() {
    this.loaded = false;
    // reset state

    setTimeout(() => (this.loaded = true), 10); // apply loaded state
  }
  onPlatformClick() {
    
    this.platformIsClicked = false;
    setTimeout(() => (this.platformIsClicked = true), 10);
  }
  @HostListener('document:click', ['$event'])
  handleKeyDown(event: MouseEvent) {
    


  }
  
   
  protected readonly title = signal('web-project');
}
