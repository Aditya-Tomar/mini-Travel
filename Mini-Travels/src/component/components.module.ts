import { NgModule } from "@angular/core";
import { TripInputSectionComponent } from './trip-input-section/trip-input-section.component';
// import { TripPlannerComponent } from "./trip-planner/trip-planner.component";
import { SharedModule } from "src/shared/shared.module";
import { PageDetailComponent } from './page-detail/page-detail.component';

@NgModule({
    declarations: [
        // TripPlannerComponent,
        TripInputSectionComponent,
        // PageDetailComponent
    ],
    providers: [],
    imports:[
        SharedModule,
    ],
    exports:[
        // TripPlannerComponent,
        TripInputSectionComponent,
        // PageDetailComponent,
    ]
})
export class ComponentsModule {}
