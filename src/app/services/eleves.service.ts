import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from "rxjs"
import { HttpClient } from '@angular/common/http';
import { Eleve } from '../models/eleve.model';
import { LoggingService } from './logging.service';


@Injectable({
  providedIn: 'root'
})
export class ElevesService {
  url = "https://mini-projet-back-quentin-hoareau-m1.onrender.com/api/eleves"

  constructor(private loggingService: LoggingService, private http: HttpClient) {
  }

  getEleves(): Observable<Eleve[]> {


    return this.http.get<Eleve[]>(this.url);

  }

  getEleve(id: string): Observable<Eleve | null> {
    return this.http.get<Eleve>(`${this.url}/${id}`);

  }
}
