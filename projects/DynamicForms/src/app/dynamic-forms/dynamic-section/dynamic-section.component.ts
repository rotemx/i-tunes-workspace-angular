import {Component, Input, OnInit} from '@angular/core';
import {DynamicSection}           from '../../types/interfaces/dynamic-section';
import {FormControl, FormGroup}   from '@angular/forms';
import {DynamicField}             from '../../types/interfaces/dynamic-field';
import {FieldTypes}               from '../../types/enums/field-types';

@Component({
    selector   : 'dyn-dynamic-section',
    templateUrl: './dynamic-section.component.html',
    styleUrls  : ['./dynamic-section.component.css']
})
export class DynamicSectionComponent implements OnInit {
    FieldTypes = FieldTypes;
    
    formGroup: FormGroup;
    
    @Input() section: DynamicSection;
    
    constructor() {
        window['DynamicSectionComponent'] = this;
    }
    
    ngOnInit(): void {
        const fields = this
            .section.fields
            .reduce((dict: any, curr: DynamicField, i, array) => {
                dict[curr.propertyName] = new FormControl('', curr.validators || []);
                return dict;
            }, {});
        // this reduce creates:
        // {
        //     firstName:new FormControl(''),
        //     lastName:new FormControl(''),
        //     favoriteColor:new FormControl('')
        // }
        
        this.formGroup = new FormGroup(fields);
        
        
        // FormGroups be like:
        // this.formGroup = new FormGroup({
        //   firstName : new FormControl(''),
        //   lastName : new FormControl(''),
        // });
        
    }
    
}
