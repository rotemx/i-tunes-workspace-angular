import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import {SongListComponent}        from './views/song-list/song-list.component';
import {EditProfileViewComponent} from './views/edit-profile-view/edit-profile-view.component';

const routes: Routes = [
  {
    path: '',
    component: SongListComponent
  },
  {
    path: 'profile',
    component: EditProfileViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
