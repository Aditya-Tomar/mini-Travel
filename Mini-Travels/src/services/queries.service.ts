import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface QueryBody { 
    destinationData: string;
    people: number;
    budget: number;
    categoryData: string;
}

@Injectable({
    providedIn: "root"
})
export class QueriesService {

    private url = "http://localhost:3000/api/";
    constructor(private _httpService: HttpClient){}

    getQueriesList(): Observable<any> {
        const newUrl = this. url + 'queries/list';
        return this._httpService.get(newUrl, { responseType: 'json' });
    }

    setQuery(body : QueryBody ): Observable<any>{
        const newUrl = this. url + 'queries/newQuery';
        return this._httpService.post(newUrl, body);
    }
}