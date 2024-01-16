import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    private apiUrl = 'https://httpbin.org/get';

    constructor(private httpClient: HttpClient){}

    getAllDetails(){
        return this.httpClient.get(this.apiUrl);
    }
}