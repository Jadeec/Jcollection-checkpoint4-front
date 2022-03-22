import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from '../shared/models/Media.model';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-cds',
  templateUrl: './cds.component.html',
  styleUrls: ['./cds.component.css'],
})
export class CdsComponent implements OnInit {
  cds: Media[];

  constructor(private mediaService: MediaService, private router: Router) {
    this.cds = [];
  }

  ngOnInit(): void {
    this.mediaService.getMedias(2).subscribe((medias: Media[]) => {
      this.cds = medias;
    });
  }

  addCd() {
    this.router.navigate(['/', 'createMedia']);
  }
}
