import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.css']
})
export class ModifyFormComponent implements OnInit {
  modifyForm : FormGroup
  
  constructor(private fb : FormBuilder) { 
    this.modifyForm = this.fb.group ({
  
      artist: ['', [Validators.required]],
      title: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      publicationDate: ['', [Validators.required]],
      description: ['', [Validators.required]],
  
    })
  }
  

  ngOnInit(): void {
  }

}
