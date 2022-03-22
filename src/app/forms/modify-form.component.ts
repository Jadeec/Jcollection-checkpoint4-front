import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Media } from '../shared/models/Media.model';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.css'],
})
export class ModifyFormComponent implements OnInit {
  modifyForm!: FormGroup;
  artist!: string;
  title!: string;
  genre!: string;
  publicationDate!: Date;
  description!: string;
  type!: string;
  typeId!: number;
  currentMedia!: Media;
  date!: string |null;

  constructor(
    private fb: FormBuilder,
    private mediaService: MediaService,
    private router: Router,
    private route: ActivatedRoute,
    public datepipe: DatePipe
  ) {
    this.modifyForm = this.fb.group({
      artist: ['', [Validators.required]],
      title: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      type: ['', [Validators.required]],
      publicationDate: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
    const mediaId = this.route.snapshot.paramMap.get('mediaId');
    if (mediaId != null) {
      this.mediaService.getMedia(mediaId).subscribe((media: Media) => {
        this.currentMedia = media;
        this.date = this.datepipe.transform(media.publishingDate, 'dd/MM/yyyy');
        this.modifyForm = this.fb.group({
          artist: [this.currentMedia.artist, [Validators.required]],
          title: [this.currentMedia.title, [Validators.required]],
          genre: [this.currentMedia.genre, [Validators.required]],
          publicationDate: [this.date],
          description: [this.currentMedia.description],
        });
      });
    }
  }

  modifyMedia() {
    this.artist = this.modifyForm.controls.artist.value;
    this.title = this.modifyForm.controls.title.value;
    console.log(this.title);
    this.genre = this.modifyForm.controls.genre.value;
    this.publicationDate = this.modifyForm.controls.publicationDate.value;
    this.description = this.modifyForm.controls.description.value;
    this.mediaService
      .modifyMedia(
        this.currentMedia.id,
        this.artist,
        this.title,
        this.genre,
        this.publicationDate,
        this.description
      )
      .subscribe((media: Media) => {
        console.log(media);
        this.router.navigate(['/', 'vinyls']);
      });
  }
}
