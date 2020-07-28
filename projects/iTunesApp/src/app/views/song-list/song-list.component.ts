import { Component, OnInit } from '@angular/core';
import {ITunesService}       from '../../services/i-tunes.service';

@Component({
  selector: 'ita-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  constructor(public iTunesService:ITunesService) { }

  ngOnInit(): void {
  }

}
