import {Injectable} from '@angular/core';
import {MockSongs}  from '../data/mocks-songs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpAdapter {
    
    constructor(public http: HttpClient) {
    }
    
    get<T>(url: string): Promise<T> {
        return this
            .http
            .get<T>(url)
            .toPromise();
    }
}
