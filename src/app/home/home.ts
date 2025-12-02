import { Component } from '@angular/core';
import { MainBanner } from "../shared/main-banner/main-banner";
import { HomeIntro } from "../shared/home-intro/home-intro";
import { Dashboard } from "../shared/dashboard/dashboard";
import { Ad1 } from "../shared/ad1/ad1";

@Component({
  selector: 'app-home',
  imports: [MainBanner, HomeIntro, Dashboard, Ad1],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
