import {Component} from '@angular/core';


export enum FieldTypes {
    Text = 'text',
    Color = 'color'
}


@Component({
    selector   : 'dyn-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.css']
})
export class AppComponent {
    
    FieldTypes = FieldTypes
    
    user:any = {};
    
    title = 'DynamicForms';
    
    form = {
        model : this.user,
        title : 'User Details',
        fields: [
            {
                type: FieldTypes.Text,
                placeholder: "enter first name",
                label : "First Name",
                prop: 'firstName'
            },
            {
                type: FieldTypes.Text,
                placeholder: "enter last name",
                label : "Last Name",
                prop: 'lastName'
            },
            {
                type: FieldTypes.Color,
                label : "Favorite Color",
                prop: 'color'
            },
        ]
    };
}
