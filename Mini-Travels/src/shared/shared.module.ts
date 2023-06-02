import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RatingTagComponent } from './rating-tag/rating-tag.component';
import { DropdownBarComponent } from './dropdown-bar/dropdown-bar.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';


@NgModule({
  declarations: [
    HeaderComponent, 
    RatingTagComponent, 
    DropdownBarComponent
  ],
  imports: [
    CommonModule,
    MdbCheckboxModule
  ],
  exports: [
    HeaderComponent, 
    CommonModule, 
    RatingTagComponent, 
    DropdownBarComponent, 
    MdbCheckboxModule
  ]
})
export class SharedModule { }
