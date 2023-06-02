import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class DestinationService {
    private destinationsList = {
        "destinations": [
         {
             "country": "India",
             "regions": [
                 "North India",
                 "South India",
                 "East India",
                 "Himalayas"
             ]
         },
         {
             "country": "South America",
             "regions": [
                 "Argentina",
                 "Brazil",
                 "Chile",
                 "Colombia"
             ]
         },
         {
             "country": "North America",
             "regions": [
                 "Alaska",
                 "Hawai"
             ]
         },
         {
             "country": "Eurpoe",
             "regions": [
                 "France",
                 "Germany",
                 "Greece",
                 "Iceland",
                 "Itlay",
                 "Portugal",
                 "Spain"
             ]
         }
     ]
     };
    // private url = "http://localhost:3000/api/";
    constructor(private _httpService: HttpClient){}

    // getDestinationList(): Observable<any> {
    //     const newUrl = this. url + 'destinations/list';
    //     return this._httpService.get(newUrl, { responseType: 'json' });
    // }

    getDestinationList(): Observable<any> {
        return of(this.destinationsList.destinations);
    }
}