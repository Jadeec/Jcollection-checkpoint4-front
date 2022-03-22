import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from '../shared/models/Media.model';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-vinyls',
  templateUrl: './vinyls.component.html',
  styleUrls: ['./vinyls.component.css'],
})
export class VinylsComponent implements OnInit {
  vinyls: Media[];

  constructor(private mediaService: MediaService, private router: Router) {
    this.vinyls = [];
  }
  ngOnInit(): void {
    this.mediaService.getMedias(1).subscribe((medias: Media[]) => {
     this.vinyls = medias;
     
    });
  }

  addVinyl(){
    this.router.navigate(['/', 'createMedia'])
  }
}
