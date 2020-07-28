import {Injectable}  from '@angular/core';
import {HttpAdapter} from '../adapters/http-adapter';
import {Song}        from '../types/models/song.model';
import {MockSongs}   from '../data/mocks-songs';

export const ITUNES_API_URL = 'https://itunes/sheker/kolshehu';

@Injectable({
    providedIn: 'root'
})
export class ITunesService {
    use_mocks: boolean = true;
    songs: Song[] = [];
    
    constructor(public httpAdapter: HttpAdapter) {
        window['iTunesService'] = this;
        this.getSongs().then(songs => this.songs = songs);
    }
    
    async getSongs(): Promise<Song[]> {
        
        if (this.use_mocks) {
            return MockSongs;
        }
        
        return this
            .httpAdapter
            .get<Song[]>(ITUNES_API_URL);
    }
}
