import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/services/categories.service';
import { DestinationService } from 'src/services/destination.service';
import { QueriesService } from 'src/services/queries.service';

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.scss']
})
export class TripPlannerComponent implements OnInit {
  
  public destinationsList: any[] = [];
  public categoriesList: any[] = [];
  public isLoading: boolean = false;
  constructor(
    private _destinationService: DestinationService,
    private _categoriesService: CategoriesService,
    private _queryService: QueriesService,
    private _router: Router
    ){}

  ngOnInit(){
    this.fetchDestinationsList();
    this.fetchCategoriesList();
  }

  private fetchDestinationsList(): void {
    this._destinationService.getDestinationList().subscribe( data => {
      this.destinationsList = data;
      this.destinationsList = this.setDropdownList();
    });
  }

  private fetchCategoriesList(): void {
    this._categoriesService.getCategoriesList().subscribe( (data) => {
      this.categoriesList = data;
    })
  }

  private setDropdownList(): any[] {
    let tempDropdownList = [];
    for(let index = 0; index< this.destinationsList.length; index++) {
      tempDropdownList.push({name: this.destinationsList[index].country, disable: true});
      for(let index_1=0; index_1< this.destinationsList[index].regions.length; index_1++){
        tempDropdownList.push({ disable: false, name: this.destinationsList[index].regions[index_1]});
      }
    }
    return tempDropdownList;
  }

  public onSubmitQuery( $event: any): void {
    let { destination , people, budget, category: categoryData }: {
      destination: {default: boolean, name: string},
      people: number,
      budget: number,
      category: string} = $event;
    const destinationData = {name: destination?.name};
    this.isLoading = true;
    // using settimeout to show loader effect only.
    setTimeout(() => { 

      this._queryService.setQuery({destinationData, people, budget, categoryData}).subscribe( () => {
        this.isLoading=false;
        alert("Query Submitted");
      },
      (err) => {
        this.isLoading=false;
        console.log("Error Happend: Unable to save query", err);
      });
    }, 100)
  }

  public routeToQueryList(): void{
    this._router.navigateByUrl("admin");
  }

}
