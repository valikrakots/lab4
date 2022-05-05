import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddFormComponent } from './add-form/add-form.component';
import { MovieCenterComponent } from './movie-center/movie-center.component';

const routes: Routes = [
  { path: '', component: MovieCenterComponent},
  { path: 'list', component: MovieListComponent },
  { path: 'add_form', component: AddFormComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule,]
})
export class MoviesRoutingModule { }
