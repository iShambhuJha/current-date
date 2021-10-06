import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeekDayComponent } from './week-day/week-day.component';

const routes: Routes = [
  {path: '', redirectTo: 'week-day', pathMatch: 'full'},
  {path: 'week-day', component: WeekDayComponent},
  {path: '**', component: WeekDayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
