import { Component, OnInit } from '@angular/core';
import { QueriesService } from 'src/services/queries.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public headerList: any[] = [
    { name: "S.No" },
    { name: "Destination"},
    { name: "Category"},
    { name: "Number Of People"},
    { name: "Budget Amount"}
  ];
  public queries: any[] = [];
  public isLoading: boolean = true;
  constructor(private _queryListService: QueriesService){}

  ngOnInit() {
    this.fetchQueryList();
  }

  private fetchQueryList(): void {
    this.isLoading = true;
    this._queryListService.getQueriesList().subscribe( data => {
      this.isLoading = false;
      this.queries = data.queries;
    })
  }
}
