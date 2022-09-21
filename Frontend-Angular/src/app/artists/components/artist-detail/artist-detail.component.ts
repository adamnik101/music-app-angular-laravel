import {Component, OnInit} from '@angular/core';
import {ArtistsService} from "../../services/artists.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IArtist} from "../../interfaces/i-artist";
import {ITrack} from "../../../tracks/interfaces/i-track";
@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {
  artist! : IArtist
  tracks : ITrack[] = []
  artists : IArtist[] = []
  constructor(private artistService: ArtistsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.artistService.getOne(id).subscribe(artist => {
      const owner = artist
      const tracks = artist.tracks

      if(artist == null) {
        this.router.navigateByUrl('/artists');
      }
      this.artist = artist.artist
      this.artists = artist.features
      this.tracks = artist.tracks
      console.log(this.artists)
    })
  }


}
