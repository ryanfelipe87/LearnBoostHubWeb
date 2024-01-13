import { Component } from '@angular/core';
import { HomeService } from './HomeService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LearnBoostHubWeb';
  home: any;

  constructor(private homeService: HomeService){}

  ngOnInit(){
    this.homeService.getAllDetails().subscribe((response) => {
      this.home = response; },
      (error) => {console.log(error); });
  }
}
