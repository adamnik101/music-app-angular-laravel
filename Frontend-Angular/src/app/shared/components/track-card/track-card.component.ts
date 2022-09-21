import {Component, Input, OnInit} from '@angular/core';
import {ITrack} from "../../../tracks/interfaces/i-track";
import {PlayerService} from "../../../player/services/player.service";

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit {

  @Input() track : ITrack = {} as ITrack

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void { }

  playTrack(track: ITrack) {
    this.playerService.playSingleTrack(track)
  }


}
