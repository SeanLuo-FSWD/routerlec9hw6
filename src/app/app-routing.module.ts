// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MovielistComponent } from './movies/movielist/movielist.component';
import { MoviesComponent } from './movies/movies.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: ':id', component: MoviesComponent },
  { path: '', redirectTo: '/1', pathMatch: 'full' },

  // {
  //   path: 'movies',
  //   component: MoviesComponent,
  //   children: [{ path: ':id', component: MovielistComponent }],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
