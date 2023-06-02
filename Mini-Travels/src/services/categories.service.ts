import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class CategoriesService {

    private url = "http://localhost:3000/api/";
    constructor(private _httpService: HttpClient){}

    getCategoriesList(): Observable<any> {
        const newUrl = this. url + 'categories/list';
        return this._httpService.get(newUrl, { responseType: 'json' });
    }
}