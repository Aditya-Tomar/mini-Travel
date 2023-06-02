import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

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
    public queries: any =  {
        "queries": []
    };

    // private url = "http://localhost:3000/api/";
    constructor(private _httpService: HttpClient){}

    // getQueriesList(): Observable<any> {
    //     const newUrl = this. url + 'queries/list';
    //     return this._httpService.get(newUrl, { responseType: 'json' });
    // }

    // setQuery(body : QueryBody ): Observable<any>{
    //     const newUrl = this. url + 'queries/newQuery';
    //     return this._httpService.post(newUrl, body);
    // }

    getQueriesList(): Observable<any> {
       
        return of(this.queries);
    }

    setQuery(body : QueryBody ): Observable<boolean>{
        console.log(body, this.queries);
        this.queries["queries"].push(body);
        return of(true);
    }
}