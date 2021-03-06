import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Media } from '../shared/models/Media.model';
import { MediaService } from '../shared/services/media.service';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {

  modifyForm : FormGroup
  artist!: string;
  title!: string;
  genre!: string;
  publicationDate!: Date;
  description!: string
  type!: string
  typeId!:number;
  
  constructor(private fb : FormBuilder, private mediaService : MediaService, private router: Router) { 
    this.modifyForm = this.fb.group ({
      artist: ['', [Validators.required]],
      title: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      type: ['', [Validators.required]],
      publicationDate: [''],
      description: ['' ],
  
    })
  }
  
  
  ngOnInit(): void {
  }
  
  addMedia(){
    this.artist = this.modifyForm.controls.artist.value;
    this.title = this.modifyForm.controls.title.value;
    this.genre = this.modifyForm.controls.genre.value;
    this.publicationDate = this.modifyForm.controls.publicationDate.value;
    this.description = this.modifyForm.controls.description.value;
    this.type =this.modifyForm.controls.type.value.toLowerCase();

    if(this.type.match("vinyl") ){
      this.typeId = 1;
    } else if (this.type.match("cd")){
      this.typeId = 2
    } else if (this.type.match("dvd")){
      this.typeId = 3
    }

    
    this.mediaService.postMedia(this.artist,this.title,this.genre,this.publicationDate,this.description,this.typeId).subscribe(() => {
      if (this.typeId == 1) {
        this.router.navigate(['/', 'vinyls']);
      } else if (this.typeId == 2) {
        this.router.navigate(['/', 'cds']);
      } else if (this.typeId == 3) {
        this.router.navigate(['/', 'dvds']);
      }

    },
    (error) => {
      alert("Une ereur est survenue, veillez recommencer")
    })
    
  }

}
