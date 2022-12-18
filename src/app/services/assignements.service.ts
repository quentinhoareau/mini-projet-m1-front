import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from "rxjs"
import { HttpClient } from '@angular/common/http';
import { Assignement } from '../models/assignement.model';
import { LoggingService } from './logging.service';
import { bdInitialAssignments } from './data';


@Injectable({
  providedIn: 'root'
})
export class AssignementsService {

  url = "http://localhost:8010/api/assignments"


  constructor(private loggingService: LoggingService, private http: HttpClient) {

  }

  getAssignements(): Observable<Assignement[]> {


    return this.http.get<Assignement[]>(this.url);

  }

  getAssignement(id: string): Observable<Assignement | null> {


    return this.http.get<Assignement>(`${this.url}/${id}`);

  }

  addAssignement(assignement: Assignement) {
    return this.http.post<Assignement>(this.url, assignement);
  }

  updateAssignement(assignement: Assignement) {

    return this.http.put<Assignement>(this.url, assignement);
  }

  deleteAssignement(assignement: Assignement) {
    return this.http.delete(`${this.url}/${assignement._id}`);
  }

  peuplerBDAvecForkJoin() {
    const appelsVersAddAssignment: any = [];


    bdInitialAssignments.forEach(a => {
      let nouvelAssignment = new Assignement();
      nouvelAssignment.nom = a.nom;
      nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
      nouvelAssignment.rendu = a.rendu;



      appelsVersAddAssignment.push(this.addAssignement(nouvelAssignment));

    });

    return forkJoin(appelsVersAddAssignment); // renvoie un seul Observable 


  }

  getAssignmentsPagine(page: number, limit: number) {
    return this.http.get<Assignement[]>(`${this.url}?page=${page}&limit=${limit}`);
  }

}
