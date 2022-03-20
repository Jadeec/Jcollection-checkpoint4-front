import { Injectable } from '@angular/core';
import { MusicBrainzApi } from 'musicbrainz-api';

@Injectable({
  providedIn: 'root',
})
export class MusicBrainApiService {
  baseUrl: string;
  mbApi = new MusicBrainzApi({
    appName: 'my-app',
    appVersion: '0.1.0',
    appContactInfo: 'jade.cmail@gmail.com',
  });
  constructor() {
    this.baseUrl = 'https://musicbrainz.org';
  }

  // For example, search Artist:
// http://musicbrainz.org/ws/2/artist/?query=name:bigbang%20AND%20country:NO&limit=10
}
