import { Component, OnInit } from '@angular/core';
import {IArtist} from "../../interfaces/i-artist";
import {ArtistsService} from "../../services/artists.service";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  artists: IArtist[] = []
  title: string = 'Listen to your favorite artists!'
  subtitle: string = 'Discover and stream a constantly expanding mix of music from the best artists around the world'
  constructor(private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.artistsService.getAll().subscribe(artists => {this.artists = artists

    console.log(artists)
    })
  }

}
