import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';


import { AddAssignmentComponent } from './assignments/components/add-assignment/add-assignment.component';
import { Routes, RouterModule } from '@angular/router';
import { EditAssignmentComponent } from './assignments/components/edit-assignment/edit-assignment.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { AssignmentsListComponent, MyCustomPaginatorIntl } from './assignments/components/assignments-list/assignments-list.component';
import { AssignmentDetailComponent } from './assignments/components/assignment-detail/assignment-detail.component';
import { SharedModule } from './shared/shared.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { CoreModule } from './core/core.module';


const routes: Routes = [
  { path: '', component: AssignmentsListComponent },
  { path: 'home', component: AssignmentsListComponent },
  { path: 'add', component: AddAssignmentComponent },
  { path: 'assignement/:id', component: AssignmentDetailComponent },
  { path: 'assignement/:id/edit', component: EditAssignmentComponent }
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    AssignmentsModule,
    CoreModule,
    RouterModule.forRoot(routes),
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
