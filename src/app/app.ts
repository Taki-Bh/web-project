
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})

export class App{


  loaded :boolean=false;
  onActivate() {
    this.loaded=false;
               // reset state

    setTimeout(() => this.loaded = true, 10); // apply loaded state
  
}
  protected readonly title = signal('web-project');
}
