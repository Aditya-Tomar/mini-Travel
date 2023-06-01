import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-trip-input-section',
  templateUrl: './trip-input-section.component.html',
  styleUrls: ['./trip-input-section.component.scss']
})
export class TripInputSectionComponent {
  
  @Input() public cities: any[] = [];
  @Input() public categories: any[] = [];
  
  @Output() onSubmitClicked: EventEmitter<any> = new EventEmitter();
  public text: string = "We Care, So You Can Travel Carefree";
  public subText: string = "Let our experts plan your private, tailor-made and secure tour in 70+ inspiring destinations.";
  public buttonText: string = "Create My Trip Now";

  constructor(){}

  public isNumber($event: any): boolean{
    console.log($event);
    if($event.key >= 0 && $event.key <= 9){
      return true;
    }
    if($event.key === "Backspace"){
      return true;
    }
    return false;
  }

  public submitQuery(): void {
    this.onSubmitClicked.emit();
  }

}
