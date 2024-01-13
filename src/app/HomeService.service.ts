import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    private apiUrl = 'https://httpbin.org';

    constructor(private http: HttpClient){}

    getAllDetails(): Observable<any> {
        const url = '${this.apiUrl}/get';
        return this.http.get(url);
    }

    getSpecificData(): Observable<any> {
        const url = '${this.apiUrl}/get';
        return this.http.get(url).pipe(
            map((response: any) => response)
        );
    }
}