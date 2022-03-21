import { Component, Input, OnInit } from '@angular/core';
import { Media } from '../shared/models/Media.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cd!: Media
  @Input() vinyl!: Media
  constructor() { 


  }

  ngOnInit(): void {
  
  }

}
