import {DynamicSection} from './dynamic-section';

export interface DynamicForm {
    model: any;
    title: string;
    sections: DynamicSection[]
}
