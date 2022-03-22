import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Type } from '../models/Type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  urlBack = environment.urlBack;
  constructor(private http: HttpClient) { }

  //get all types
  getTypes(): Observable<Type[]>{
    return this.http.get<Type[]>(this.urlBack + 'types');
  }
}
