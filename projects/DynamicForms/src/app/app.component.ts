import {Component}  from '@angular/core';
import {FieldTypes} from './types/enums/field-types';

@Component({
    selector   : 'dyn-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.css']
})
export class AppComponent {
    
    FieldTypes = FieldTypes;
    
    user: any = {};
    
    title = 'DynamicForms';
    
}
