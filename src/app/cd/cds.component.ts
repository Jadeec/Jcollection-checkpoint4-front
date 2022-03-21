import { Component, OnInit } from '@angular/core';
import { Media } from '../shared/models/Media.model';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-cds',
  templateUrl: './cds.component.html',
  styleUrls: ['./cds.component.css'],
})
export class CdsComponent implements OnInit {
  cds: Media[];

  constructor(private mediaService: MediaService) {
    this.cds = [];
  }

  ngOnInit(): void {
    
  }
}
