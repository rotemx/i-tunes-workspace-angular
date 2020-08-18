import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';

import {AppRoutingModule}                 from './app-routing.module';
import {LayoutComponent}                  from './views/layout/layout.component';
import {SongListComponent}                from './views/song-list/song-list.component';
import {HttpClientModule}                 from '@angular/common/http';
import {EditProfileViewComponent}         from './views/edit-profile-view/edit-profile-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BinaryPipe } from './pipes/binary-pipe.pipe';
import { TheMarkerDirective } from './directives/the-marker.directive';
import { CircleComponent } from './components/circle/circle.component';

@NgModule({
    declarations: [
        LayoutComponent,
        SongListComponent,
        EditProfileViewComponent,
        BinaryPipe,
        TheMarkerDirective,
        CircleComponent
    ],
    imports     : [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers   : [HttpClientModule],
    bootstrap   : [LayoutComponent]
})
export class AppModule {
}
