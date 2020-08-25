import {DynamicField} from './dynamic-field';

export interface DynamicSection {
    title: string
    fields: DynamicField[];
    okFn?: () => Promise<any>
}
