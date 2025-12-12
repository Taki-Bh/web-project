import { Component, HostListener, signal, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { NgStyle} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // <-- Add this
import { EnrollModal } from './shared/enroll-modal/enroll-modal';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink,EnrollModal],
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
  isEnrollModalOpen: boolean = false;
  openModal(): void {
  this.isEnrollModalOpen = true;

  console.log('Modal State:', this.isEnrollModalOpen); // CHECK THIS IN THE CONSOLE
  } 

  closeModal(): void {
    this.isEnrollModalOpen = false;
  }
   
  protected readonly title = signal('web-project');
}
