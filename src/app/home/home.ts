import { Component } from '@angular/core';
import { MainBanner } from "../shared/main-banner/main-banner";
import { HomeIntro } from "../shared/home-intro/home-intro";

@Component({
  selector: 'app-home',
  imports: [MainBanner, HomeIntro],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
