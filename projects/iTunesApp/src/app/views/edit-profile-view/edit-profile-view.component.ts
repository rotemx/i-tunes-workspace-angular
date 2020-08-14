import {Component, OnInit}                  from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WordsValidator}                     from '../../utils/validators/words-validator';

@Component({
    selector   : 'ita-edit-profile-view',
    templateUrl: './edit-profile-view.component.html',
    styleUrls  : ['./edit-profile-view.component.css']
})
export class EditProfileViewComponent implements OnInit {
    
    num:string
    
    formGroup = new FormGroup({
        name: new FormControl('', [WordsValidator('boris', 1)]),
        age : new FormControl(undefined, [Validators.min(18), Validators.max(65)]),
        address: new FormGroup({
            street:new FormControl('', [Validators.minLength(2)]),
            city:new FormControl('', [Validators.required, Validators.minLength(2)]),
        })
    });
    
    
    constructor() {
        window['editProfileViewComponent'] = this;
    }
    
    ngOnInit(): void {
        this
            .formGroup
            .valueChanges
            .subscribe(value => {
                console.log(value, 'value changes');
                if (this.formGroup.controls.name.errors)
                {
                    console.log(this.formGroup.controls.name.errors, 'this.formGroup.controls.name.errors');
                }
                if (this.formGroup.controls.age.errors)
                {
                    console.log(this.formGroup.controls.age.errors, 'this.formGroup.controls.age.errors');
                }
            });
    }
    
    onSave() {
        console.log('Saving Model');
        console.log(this.formGroup.value, 'this.nameValue');
        
    }
}