import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from "rxjs"
import { HttpClient } from '@angular/common/http';
import { Assignment } from '../models/assignment.model';
import { LoggingService } from './logging.service';
import { bdInitialAssignments } from './data';


@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  url = "http://localhost:8010/api/assignments"


  constructor(private loggingService: LoggingService, private http: HttpClient) {

  }

  getAssignments(): Observable<Assignment[]> {


    return this.http.get<Assignment[]>(this.url);

  }

  getAssignment(id: string): Observable<Assignment | null> {


    return this.http.get<Assignment>(`${this.url}/${id}`);

  }

  addAssignment(assignment: Assignment) {
    return this.http.post<Assignment>(this.url, assignment);
  }

  updateAssignment(assignment: Assignment) {

    return this.http.put<Assignment>(this.url, assignment);
  }

  deleteAssignment(assignment: Assignment) {
    
    return this.http.delete(`${this.url}/${assignment._id}`);
  }

  getAssignmentsPagine(page: number, limit: number) {
    return this.http.get<Assignment[]>(`${this.url}?page=${page}&limit=${limit}`);
  }

}
