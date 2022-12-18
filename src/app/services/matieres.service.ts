import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from "rxjs"
import { HttpClient } from '@angular/common/http';
import { Matiere } from '../models/matiere.model';
import { LoggingService } from './logging.service';


@Injectable({
  providedIn: 'root'
})
export class MatieresService {
  url = "http://localhost:8010/api/matieres"

  constructor(private loggingService: LoggingService, private http: HttpClient) {
  }

  getMatieres(): Observable<Matiere[]> {


    return this.http.get<Matiere[]>(this.url);

  }

  getMatiere(id: string): Observable<Matiere | null> {
    return this.http.get<Matiere>(`${this.url}/${id}`);

  }
}
