import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Media } from '../shared/models/Media.model';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.css']
})
export class CdComponent implements OnInit {
cd !: Media
  constructor(
    private mediaService: MediaService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    
   }

  ngOnInit(): void {
    //get selected cd id and display it
    const cdId = this.route.snapshot.paramMap.get('cdId');
    if (cdId != null) {
      this.mediaService.getMedia(cdId).subscribe((cd) => {
        this.cd = cd;
      });
    }
  }

  modify(){
    this.router.navigate(['/modifyMedia/'+this.cd.id]);
  }

  delete(id : number) {
    this.mediaService.deleteMedia(id).subscribe(() => {
      this.router.navigate(['/', 'cds']);
    });
  }


}
