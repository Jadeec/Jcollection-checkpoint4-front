import { Component, OnInit } from '@angular/core';
import { Media } from '../shared/models/Media.model';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-dvds',
  templateUrl: './dvds.component.html',
  styleUrls: ['./dvds.component.css'],
})
export class DvdsComponent implements OnInit {
  dvds!: Media[];
  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.mediaService.getMedias(3).subscribe((medias: Media[]) => {
      this.dvds = medias;
    });
  }
}
