import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from '../shared/models/Media.model';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-dvds',
  templateUrl: './dvds.component.html',
  styleUrls: ['./dvds.component.css'],
})
export class DvdsComponent implements OnInit {
  dvds!: Media[];
  constructor(private mediaService: MediaService, private router: Router) {}

  ngOnInit(): void {
    this.mediaService.getMedias(3).subscribe((medias: Media[]) => {
      this.dvds = medias;
    });
  }

  addDvd(){
    this.router.navigate(['/', 'createMedia'])
  }
}
