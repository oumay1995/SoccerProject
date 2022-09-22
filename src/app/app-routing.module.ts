import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "addMatch", component : AddMatchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
