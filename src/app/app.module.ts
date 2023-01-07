import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';



import { AddAssignmentComponent } from './assignments/components/add-assignment/add-assignment.component';
import { Routes, RouterModule } from '@angular/router';
import { EditAssignmentComponent } from './assignments/components/edit-assignment/edit-assignment.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { AssignmentsListComponent, MyCustomPaginatorIntl } from './assignments/components/assignments-list/assignments-list.component';
import { AssignmentDetailComponent } from './assignments/components/assignment-detail/assignment-detail.component';
import { SharedModule } from './shared/shared.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { CoreModule } from './core/core.module';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { LoginComponent } from './assignments/components/login/login.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';








const routes: Routes = [
  { path: '', component: AssignmentsListComponent },
  { path: 'home', component: AssignmentsListComponent },
  { path: 'add', component: AddAssignmentComponent },
  { path: 'assignment/:id', component: AssignmentDetailComponent },
  { path: 'assignment/:id/edit', component: EditAssignmentComponent },
  { path: 'login', component: LoginComponent },
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AssignmentsModule,
    CoreModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }, { provide: LOCALE_ID, useValue: "fr" }, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
