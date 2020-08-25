import {Component, OnInit} from '@angular/core';
import {DynamicForm}       from '../../types/interfaces/dynamic-form';
import {FieldTypes}        from '../../types/enums/field-types';
import {Validators}        from '@angular/forms';

@Component({
    selector   : 'dyn-user-details',
    templateUrl: './user-details.component.html',
    styleUrls  : ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    
    constructor() {
    }
    
    ngOnInit(): void {
    }
    
    user: { firstName?: string, lastName?: string, color?: string } = {};
    
    
    userForm: DynamicForm = {
        model   : this.user,
        title   : 'New User',
        sections: [{
            title : 'User Details',
            fields: [
                {
                    type        : FieldTypes.Text,
                    placeholder : 'enter first name',
                    label       : 'First Name',
                    propertyName: 'firstName',
                    validators  : [Validators.minLength(5)]
                },
                {
                    type        : FieldTypes.Text,
                    placeholder : 'enter last name',
                    label       : 'Last Name',
                    propertyName: 'lastName'
                },
                {
                    type        : FieldTypes.Color,
                    label       : 'Favorite Color',
                    propertyName: 'favoriteColor'
                },
            ]
            
        }],
    };
    
    
}
