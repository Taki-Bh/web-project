import { Component } from '@angular/core';
import { MainBanner } from "../shared/main-banner/main-banner";
import { HomeIntro } from "../shared/home-intro/home-intro";
import { Dashboard } from "../shared/dashboard/dashboard";

@Component({
  selector: 'app-home',
  imports: [MainBanner, HomeIntro, Dashboard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
