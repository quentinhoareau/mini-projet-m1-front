import { Component, Injectable, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { Assignement } from 'src/app/models/assignement.model';
import { AssignementsService } from 'src/app/services/assignements.service';


@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = $localize`Premiere page`;
  itemsPerPageLabel = $localize`Assigment par page:`;
  lastPageLabel = $localize`Dernière page`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Page suivant';
  previousPageLabel = 'Page précédente';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Page 1 à 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Page ${page} à ${amountPages-1}`;
  }
}



@Component({
  selector: 'app-assignments',
  templateUrl: './assignments-list.component.html',
  styleUrls: ['./assignments-list.component.css'],
})
export class AssignmentsListComponent implements OnInit {
  page: number = 1;
  limit: number = 10;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  prevPage: number;
  hasNextPage: boolean;
  nextPage: number;


  titre = 'Gestion des assignments';
  assignementSelectionne: Assignement | undefined;

  nomDevoir: string = "";

  assignments: Assignement[];

  constructor(private assignementsService: AssignementsService) { }

  assignmentClique(assignment: Assignement) {
    this.assignementSelectionne = assignment;
  }


  refreshPage(){
    this.assignementsService.getAssignmentsPagine(this.page, this.limit)
    .subscribe( (data :any)=> {
      this.assignments = data.docs;
      this.page = data.page;
      this.limit = data.limit;
      this.totalDocs = data.totalDocs;
      this.totalPages = data.totalPages;
      this.hasPrevPage = data.hasPrevPage;
      this.prevPage = data.prevPage;
      this.hasNextPage = data.hasNextPage;
      this.nextPage = data.nextPage;
      console.log("données reçues");
    });
  }


  ngOnInit(): void {
   
    this.refreshPage();

  }

  getColor(a: any) {
    return a.rendu ? 'green' : 'red';
  }

  pageChange(event:PageEvent){
    this.page = event.pageIndex;
    this.limit = event.pageSize;

    this.refreshPage();
  }


}
