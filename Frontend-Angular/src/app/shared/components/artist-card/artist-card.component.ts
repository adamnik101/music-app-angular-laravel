import {Component, Input, OnInit} from '@angular/core';
import {IArtist} from "../../../artists/interfaces/i-artist";
import {ITrack} from "../../../tracks/interfaces/i-track";
import {TracksService} from "../../../tracks/services/tracks.service";
import {PlayerService} from "../../../player/services/player.service";

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {
  @Input() artist: IArtist = {} as IArtist
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    console.log(this.artist)
  }
  playArtist(artist: IArtist) {
    this.playerService.queue = artist.tracks
    console.log(artist)
    this.playerService.playArtist(artist)
  }
}
