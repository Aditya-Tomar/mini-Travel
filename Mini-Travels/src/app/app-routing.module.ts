import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/component/admin/admin.component';
import { MainPageComponent } from 'src/component/main-page/main-page.component';
import { TripPlannerComponent } from 'src/component/trip-planner/trip-planner.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [{
      path: '',
      component: TripPlannerComponent
    },
  {
    path:"admin",
    component: AdminComponent
  }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
