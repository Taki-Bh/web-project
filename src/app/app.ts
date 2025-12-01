import { Component, HostListener, signal, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { NgStyle} from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink,NgStyle],
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
