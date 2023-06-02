import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trip-input-section',
  templateUrl: './trip-input-section.component.html',
  styleUrls: ['./trip-input-section.component.scss']
})
export class TripInputSectionComponent {
  
  @Input() public cities: any[] = [];
  @Input() public categories: any[] = [];
  @Input() form: FormGroup = this._fb.group({
    destination: [],
    category: [],
    people: [],
    budget: []
  });
  @Input() isLoading: boolean = false;

  @Output() onSubmitClicked: EventEmitter<{destination: any, category: any, people: number, budget: number}> = new EventEmitter();
  public text: string = "We Care, So You Can Travel Carefree";
  public subText: string = "Let our experts plan your private, tailor-made and secure tour in 70+ inspiring destinations.";
  public buttonText: string = "Create My Trip Now";

  get destination (): FormControl {
    return this.form.get("destination") as FormControl;
  }

  get category(): FormControl {
    return this.form.get('category') as FormControl;
  }

  constructor( private _fb: FormBuilder){}

  public isNumber($event: any): boolean{
    if($event.key >= 0 && $event.key <= 9){
      return true;
    }
    if($event.key === "Backspace"){
      return true;
    }
    return false;
  }

  public submitQuery(): void {
      this.onSubmitClicked.emit(this.form.value);
      this.form.reset();
  }

}
