import { Component, Input, OnInit } from '@angular/core';
import { Media } from '../shared/models/Media.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() media!: Media;
  constructor() {}

  ngOnInit(): void {}
}
