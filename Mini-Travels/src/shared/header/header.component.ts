import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() headerSubTitle: string = "mini";
  @Input() headerTitle: string = "Travels";
  @Input() headerText: string = "Private tailor-made journeys of a lifetime";
  @Input() buttonText: string = "Contact Us";

  @Output() onHeaderTitleClick: EventEmitter<void> = new EventEmitter();
  @Output() onButtonClick: EventEmitter<void> = new EventEmitter();

  public onHeaderTitleClicked(): void {
    this.onHeaderTitleClick.emit();
  }

  public onButtonClicked(): void {
    this.onButtonClick.emit();
  }
}
