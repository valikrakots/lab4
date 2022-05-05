import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddFormComponent } from './add-form/add-form.component';
import { MovieCenterComponent } from './movie-center/movie-center.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    MovieCenterComponent,
    MovieListComponent,
    AddFormComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    RouterModule,
    FormsModule,
  ]
})
export class MoviesModule { }
