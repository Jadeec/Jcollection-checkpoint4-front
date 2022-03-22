import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Media } from '../shared/models/Media.model';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.css'],
})
export class VinylComponent implements OnInit {
  vinyl!: Media;
  constructor(
    private mediaService: MediaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //get selected vinyl id and display it
    const vinylId = this.route.snapshot.paramMap.get('vinylId');
    if (vinylId != null) {
      this.mediaService.getMedia(vinylId).subscribe((vinyl) => {
        this.vinyl = vinyl;
      });
    }
  }

  modify() {
    this.router.navigate(['/modifyMedia/'+this.vinyl.id]);
  }

  delete(id: number) {
    this.mediaService.deleteMedia(id).subscribe((res) => {
      this.router.navigate(['/', 'vinyls']);
    });
  }
}
