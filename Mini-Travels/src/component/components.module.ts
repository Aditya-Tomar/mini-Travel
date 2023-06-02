import { NgModule } from "@angular/core";
import { TripInputSectionComponent } from './trip-input-section/trip-input-section.component';
import { TripPlannerComponent } from "./trip-planner/trip-planner.component";
import { SharedModule } from "src/shared/shared.module";
import { PageDetailComponent } from './page-detail/page-detail.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AdminComponent } from './admin/admin.component';

@NgModule({
    declarations: [
        TripPlannerComponent,
        TripInputSectionComponent,
        PageDetailComponent,
        AdminComponent
    ],
    providers: [],
    imports:[
        SharedModule,
        ReactiveFormsModule
    ],
    exports:[
        TripPlannerComponent,
        TripInputSectionComponent,
        PageDetailComponent,
        AdminComponent
    ]
})
export class ComponentsModule {}
