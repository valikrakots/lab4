import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCenterComponent } from './movies/movie-center/movie-center.component';

const routes: Routes = [
  { path: '', component: MovieCenterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
