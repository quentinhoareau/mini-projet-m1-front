import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
    return $localize`Page ${page} à ${amountPages - 1}`;
  }
}



@Component({
  selector: 'app-assignments',
  templateUrl: './assignments-list.component.html',
  styleUrls: ['./assignments-list.component.scss'],
})
export class AssignmentsListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  renduFilter:boolean|undefined = undefined;

  page: number = 1;
  limit: number = 10;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  prevPage: number;
  hasNextPage: boolean;
  nextPage: number;
  displayedColumns: string[] = ['nom', 'rendu', 'dateDeRendu', 'note'];
  dataSource = new MatTableDataSource<Assignement>();


  assignementSelectionne: Assignement | undefined;

  nomDevoir: string = "";


  constructor(private assignementsService: AssignementsService, private router: Router, private _liveAnnouncer: LiveAnnouncer) {
    this.dataSource.filterPredicate = (data: Assignement, filter: string) => {

      if (filter.includes("non") || filter.includes("pas") || filter == "non rendu") {
        return data.rendu === false;
      }

      else if (filter.includes("rendu")) {
        return data.rendu === true;
      }

      return data.nom.toLowerCase().includes(filter);
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.refreshPage();

  }

  assignmentClique(assignment: Assignement) {
    this.assignementSelectionne = assignment;
  }

  openAssignmentDetail(assignement: Assignement) {
    console.log(assignement);
    this.router.navigate(["/assignement/" + assignement._id])
  }


  refreshPage() {
    this.assignementsService.getAssignmentsPagine(this.page, this.limit)
      .subscribe((data: any) => {
        this.dataSource.data = data.docs;


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

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRenduFilter(reset: boolean = false) {

    if(!reset){
      this.dataSource.filter = (!this.renduFilter ? "rendu" : "non rendu" ).trim().toLowerCase();
    }else{
      this.renduFilter = undefined;
      this.dataSource.filter = "";
    }
    
    
  }




  getColor(a: any) {
    return a.rendu ? 'green' : 'red';
  }

  pageChange(event: PageEvent) {
    this.page = event.pageIndex;
    this.limit = event.pageSize;

    this.refreshPage();
  }


}
