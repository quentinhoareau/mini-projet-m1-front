import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';
import { AssignmentsListComponent } from './components/assignments-list/assignments-list.component';
import { AddAssignmentComponent } from './components/add-assignment/add-assignment.component';
import { EditAssignmentComponent } from './components/edit-assignment/edit-assignment.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AssignmentsListComponent,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AssignmentsListComponent,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent
  ]
})
export class AssignmentsModule { }
