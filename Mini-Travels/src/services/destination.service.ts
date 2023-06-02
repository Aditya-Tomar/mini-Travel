import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class DestinationService {

    private url = "http://localhost:3000/api/";
    constructor(private _httpService: HttpClient){}

    getDestinationList(): Observable<any> {
        const newUrl = this. url + 'destinations/list';
        return this._httpService.get(newUrl, { responseType: 'json' });
    }
}