import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';

import {AppRoutingModule}                 from './app-routing.module';
import {AppComponent}                     from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserDetailsComponent}             from './my-forms/user-details/user-details.component';
import {DynamicFormComponent}             from './dynamic-forms/dynamic-form/dynamic-form.component';
import {DynamicSectionComponent}          from './dynamic-forms/dynamic-section/dynamic-section.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent,
        UserDetailsComponent,
        DynamicFormComponent,
        DynamicSectionComponent
    ],
    imports     : [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers   : [],
    bootstrap   : [AppComponent]
})
export class AppModule {
}
