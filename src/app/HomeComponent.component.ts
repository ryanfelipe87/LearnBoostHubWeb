import { Component, OnInit } from "@angular/core";
import { HomeService } from "./HomeService.service";

@Component({
    selector: 'app-home',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class HomeComponent implements OnInit{
    data: any;
    
    constructor(private homeService: HomeService){}

    ngOnInit(): void {
        this.homeService.getSpecificData().subscribe((response) => {
            this.data = response;
        });
    }
}