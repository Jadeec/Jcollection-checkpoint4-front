import { Component, OnInit } from '@angular/core';
import { Media } from '../shared/models/Media.model';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-vinyls',
  templateUrl: './vinyls.component.html',
  styleUrls: ['./vinyls.component.css'],
})
export class VinylsComponent implements OnInit {
  vinyls: Media[];

  constructor(private mediaService: MediaService) {
    this.vinyls = [];
  }
  ngOnInit(): void {
    this.mediaService.getMedias().subscribe((medias: Media[]) => {
      medias.forEach((media: Media) => {
        if (media.type.id == 1) {
          this.vinyls.push(media);
        }
      });
    });
  }
}
