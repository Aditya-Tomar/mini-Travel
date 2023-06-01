import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/component/main-page/main-page.component';
import { TripPlannerComponent } from 'src/component/trip-planner/trip-planner.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [{
      path: '',
      component: TripPlannerComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
