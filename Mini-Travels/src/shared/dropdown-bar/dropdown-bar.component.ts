import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dropdown-bar',
  templateUrl: './dropdown-bar.component.html',
  styleUrls: ['./dropdown-bar.component.scss']
})
export class DropdownBarComponent implements  OnChanges{

  @Input() public buttonName: string='';
  @Input() public data: Array<any> = [];

  @Output() onSelected: EventEmitter<any> = new EventEmitter();

  private selected: { disable: boolean, name: string } = { disable:false, name: ''};
  public dropdownList: { disable: boolean, name: string }[] = [];
  public toggle: boolean = false;
  constructor(){}

  
  ngOnChanges(changes: any): void {
    
    this.dropdownList = changes?.data?.currentValue ?? this.data;
  }

  

  public optionSelect(data: { disable: boolean, name: string}): void {
    if(!data.disable){
      this.toggle=false;
      this.selected = data;
      this.onSelected.emit(this.selected);
    }
  }

} 
