import {ChangeDetectorRef, Component} from '@angular/core';
import {FieldTypes}                   from './types/enums/field-types';

@Component({
    selector   : 'dyn-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.css']
})
export class AppComponent {
    
    constructor(public cdr:ChangeDetectorRef) {
        window['AppComponent'] = this;
        
    }
    
    list:string[] = ['tomato', 'cucumber'];
    
    
    FieldTypes = FieldTypes;
    
    user: any = {};
    
    title = 'DynamicForms';
    
    ngOnInit(){
        // this.list = ['tomato', 'cucumber'];
        
    }
}
