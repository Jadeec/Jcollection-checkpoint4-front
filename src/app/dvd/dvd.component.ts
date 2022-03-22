import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Media } from '../shared/models/Media.model';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css'],
})
export class DvdComponent implements OnInit {
  dvd!: Media;
  constructor(
    private mediaService: MediaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //get selected dvd id and display it
    const dvdId = this.route.snapshot.paramMap.get('dvdId');
    if (dvdId != null) {
      this.mediaService.getMedia(dvdId).subscribe((vinyl) => {
        this.dvd = vinyl;
      });
    }
  }
  delete(id: number) {
    this.mediaService.deleteMedia(id).subscribe(() => {
      this.router.navigate(['/', 'dvds']);
    });
  }

  modify() {
    this.router.navigate(['/modifyMedia/' + this.dvd.id]);
  }
}
