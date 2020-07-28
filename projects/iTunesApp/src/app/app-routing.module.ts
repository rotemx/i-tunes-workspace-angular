import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SongListComponent}      from './views/song-list/song-list.component';

const routes: Routes = [
  {
    path: '',
    component: SongListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
