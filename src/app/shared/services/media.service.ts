import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Media } from '../models/Media.model';
import { Type } from '../models/Type.model';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  urlBack = environment.urlBack;

  constructor(private http: HttpClient) {}

  //create a media
  postMedia(
    name: string,
    artist: string,
    genre: string,
    publishingDate: Date,
    description: string,
    type: Type
  ): Observable<Media> {
    return this.http.post<Media>(this.urlBack + 'medias', {
      name: name,
      artist: artist,
      genre: genre,
      publishingDate: publishingDate,
      description: description,
      typeId: type,
    });
  }

  //get all medias
  getMedias(): Observable<Media[]> {
    return this.http.get<Media[]>(this.urlBack + 'medias');
  }

  //get a media
  getMedia(id: number): Observable<Media> {
    return this.http.get<Media>(this.urlBack + 'medias/' + id);
  }

  //modify media
  modifyMedia(
    id: number,
    name: string,
    artist: string,
    genre: string,
    publishingDate: Date,
    description: string
  ): Observable<Media> {
    return this.http.put<Media>(this.urlBack + 'medias/' + id, {
      name: name,
      artist: artist,
      genre: genre,
      publishingDate: publishingDate,
      description: description
    });
  }

  //delete a media 
  deleteMedia(id: number){
    return this.http.delete<Media>(this.urlBack + 'medias/' + id);
  }
}
