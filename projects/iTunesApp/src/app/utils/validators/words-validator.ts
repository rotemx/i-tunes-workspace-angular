import {AbstractControl} from '@angular/forms';

export const WordsValidator = (word:string, count:number=1) => (control:AbstractControl) =>
     control.value.toLowerCase().includes(word.toLowerCase()) ? null : {noWords:`Too few ${word} included!`}

