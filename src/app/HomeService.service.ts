import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    private apiUrl = 'https://httpbin.org/get';

    constructor(private http: HttpClient){}

    getAllDetails(): Observable<any> {
        const url = '${this.apiUrl}/home';
        return this.http.get(url);
    }
}