import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

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