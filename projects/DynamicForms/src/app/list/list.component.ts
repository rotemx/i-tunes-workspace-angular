import {Component, forwardRef, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR}             from '@angular/forms';

@Component({
    selector   : 'dyn-list',
    templateUrl: './list.component.html',
    styleUrls  : ['./list.component.css'],
    providers  : [
        {
            provide    : NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ListComponent),
            multi      : true
        }
    ]
})
export class ListComponent implements OnInit {
    change: any = () => {
    };
    touch: any  = () => {
    };
    
    registerOnChange(fn: (_: any) => void): void {
    
        // console.log(fn.toString());
        this.change = fn;
    }
    
    registerOnTouched(fn: (_: any) => void): void {
        this.touch = fn;
    }
    
    new_item: string = '';
    items: string[] = [];
    
    constructor() {
    }
    
    ngOnInit(): void {
    }
    
    onDelete(i:number){
        this.items.splice(i,1);
    }
    
    onAdd() {
        this.items = [...this.items, this.new_item];
        this.new_item = '';
        this.change(this.items);
    }
    
    writeValue(value: string[]): void {
        if (value && Array.isArray(value)) {
            this.items = value;
        }
    }
}
