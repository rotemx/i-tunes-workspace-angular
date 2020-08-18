import {Component} from '@angular/core';

export interface Div {
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    borderRadius: number
    left: number
    opacity: number
    top: number
    borderStyle: 'dotted' | 'solid' | 'dashed'
    
}

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.css']
})
export class AppComponent {
    
    
    divs: Div[] = [];
    
    title = 'DivCanvas';
    
    onAddDiv() {
        this.divs.push(
            {
                backgroundColor: '#9fa4ef',
                borderColor    : '#000',
                borderWidth    : 1,
                borderRadius   : 0,
                left           : 0,
                top            : 0,
                opacity        : 1,
                borderStyle    : 'solid'
            });
    }
    
    onRemove(div: Div) {
        this.divs.splice(this.divs.indexOf(div), 1);
    }
}
