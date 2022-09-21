import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {PlayerService} from "../../services/player.service";
import {IArtist} from "../../../artists/interfaces/i-artist";
import {ArtistsService} from "../../../artists/services/artists.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({opacity:0, bottom: -100}),
        animate(500, style({opacity:1, bottom: 1}))
      ])
    ])
  ]
})
export class PlayerComponent implements OnInit {
  artists : IArtist[] = []
  constructor(public playerService: PlayerService,
              private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.artistsService.getAllAdmin().subscribe(artists => this.artists = artists)
  }

  pauseOrContinueTrack(){
    this.playerService.pauseOrContinueTrack();
  }

  changeVolume(volume: number) {
    this.playerService.changeVolume(volume)
  }

  seekTrack(seek: number){
    this.playerService.seeked(seek)
  }
  seeking(seek: number) {
    this.playerService.seeking(seek)
  }

  nextTrack() {
    if( this.playerService.queuePosition < this.playerService.queue.length){
      this.playerService.queuePosition++
      this.playerService.playQueue(this.playerService.queue)
    }
  }
  previousTrack() {
    if(this.playerService.queuePosition > 0){
      this.playerService.queuePosition--
      this.playerService.playQueue(this.playerService.queue)
    }
  }
}
