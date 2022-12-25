import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';
import { AssignmentsListComponent } from './components/assignments-list/assignments-list.component';
import { AddAssignmentComponent } from './components/add-assignment/add-assignment.component';
import { EditAssignmentComponent } from './components/edit-assignment/edit-assignment.component';
import { SharedModule } from '../shared/shared.module';
import { AssignementFormComponent } from './components/assignement-form/assignement-form.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AssignmentsListComponent,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    AssignementFormComponent,
    LoginComponent
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
