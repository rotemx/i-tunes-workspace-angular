import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }  from './app-routing.module';
import { LayoutComponent }   from './views/layout/layout.component';
import { SongListComponent } from './views/song-list/song-list.component';
import {HttpClientModule}    from '@angular/common/http';

@NgModule({
  declarations: [
    LayoutComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
