import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class CategoriesService {
    private categoriesList = { 
        "categories": [
        {
            "name": "Adventure & Outdoors"
        },
        {
            "name": "Heritage & Culture"
        },
        {
            "name": "Nature & Landscapes"
        },
        {
            "name": "Wildlife & Safaris"
        },
        {
            "name": "Wine & Food"
        },
        {
            "name": "Beaches"
        }
    ]
    };
    // private url = "http://localhost:3000/api/";
    constructor(private _httpService: HttpClient){}

    // getCategoriesList(): Observable<any> {
    //     const newUrl = this. url + 'categories/list';
    //     return this._httpService.get(newUrl, { responseType: 'json' });
    // }
    
    getCategoriesList(): Observable<any> {
        return of(this.categoriesList.categories);
    }
}